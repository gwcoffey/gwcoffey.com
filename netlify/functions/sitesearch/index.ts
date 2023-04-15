import {Handler, HandlerContext, HandlerEvent} from "@netlify/functions";
import {Index} from "flexsearch";
import fs from 'fs';
import path from 'node:path';

export interface SearchDoc {
    link: string;
    title: string;
    img: string | null;
    tags: string[];
}

export interface SearchDocs {
    [name: string] : SearchDoc
}

const FUNCTION_PATH = './netlify/functions/sitesearch';
const DOCS_PATH = path.join(FUNCTION_PATH, 'documents.json');
const INDEX_PATH = path.join(FUNCTION_PATH, 'search-index');

// load document data
const docs : SearchDocs = JSON.parse(fs.readFileSync(DOCS_PATH, "utf8"));

// load index
const index = new Index("memory");
fs.readdirSync(INDEX_PATH).forEach(fname => {
	if (fname.startsWith('.')) return;
	index.import(fname, fs.readFileSync(path.join(INDEX_PATH, fname), "utf8"));
});

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

	// construct query
	const query = event.queryStringParameters?.q;
	if (!query) {
        return {
            statusCode: 400,
            headers: {"Content-Type": "text/plain"},
            body: "required `q` param not specified"
        }
    }

	// execute search
	var ids: number[] = index.search(query, {limit: 30});
	var results = ids.map(id => docs["" + id]);

    return {
      statusCode: 200,
      body: JSON.stringify({
      	q: query,
      	docs: results
      }, null, 3),
    };
};

export { handler };

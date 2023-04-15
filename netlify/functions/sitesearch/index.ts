import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import index_data from "./index.json";
import { Document } from "flexsearch";

// pre-load the index
const index = new Document({
	document: {
		id: "id",
		index: ["title", "content", "img"],
		tag: "tags",
        store: ["title", "tags", "link"]
	}
});

console.log("indexing " + index_data.length + " documents...");
index_data.forEach((doc, i) => {
	if (!doc.tags) doc["tags"] = [];
	doc.id = i;
	index.add(doc);
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
    
    const qTag = event.queryStringParameters?.tag;
	
	const options = { enrich: true, limit: 30 };
	
	if (qTag) {
		options["tag"] = qTag;
	}
	
	// execute search
	var results = index.search(query, options);
	
	// aggregate
	var docs = [];
	results.forEach(result => docs = docs.concat(result.result));
	
	// dedup
	docs = docs.filter((doc, idx, self) =>
		idx === self.findIndex((t) => (t.id === doc.id))
	)

    return {
      statusCode: 200,
      body: JSON.stringify({
      	q: query,
      	tag: qTag || null,
      	docs: docs
      }),
    };
};

export { handler };

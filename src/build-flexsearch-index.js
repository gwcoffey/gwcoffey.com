const { Index } = require("flexsearch");
const fs = require('fs');
const path = require('node:path');

const IN_PATH = 'public/index.json';
const FUNCTION_PATH = 'netlify/functions/sitesearch/';
const INDEX_OUT_PATH = path.join(FUNCTION_PATH, 'search-index');
const DATA_OUT_PATH = path.join(FUNCTION_PATH, 'documents.json');

// read raw page data
const in_data = JSON.parse(fs.readFileSync(IN_PATH, 'utf8'));

// build index
console.log(`indexing ${in_data.length} documents...`);

const index = new Index("memory");
const data = {};

in_data.forEach((doc, i) => {
    data[i] = {link: doc.link, title: doc.title, img: doc.img, tags: doc.tags};
    index.add(i, `${doc.title} ${doc.tags} ${doc.content}`);
});

// export index
console.log("exporting index...");
fs.rmSync(INDEX_OUT_PATH, {force: true, recursive: true});
fs.rmSync(DATA_OUT_PATH, {force: true});
fs.mkdirSync(INDEX_OUT_PATH);
index.export((key, data) =>
    fs.writeFileSync(path.join(INDEX_OUT_PATH, key), data, 'utf8'));

// export data
console.log("exporting data...");
fs.writeFileSync(DATA_OUT_PATH, JSON.stringify(data));

// delete source data
console.log("deleting index source data...");
fs.rmSync(IN_PATH, {force: true});
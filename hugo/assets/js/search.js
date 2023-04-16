(() => {
    const DEBOUNCE_INTERVAL = 300; //ms
    const SEARCH_URL = "/.netlify/functions/sitesearch";
    const RESULTS_EL = document.querySelector(".search-form .results");

    let timeout;
    let query;

    function handleInput(q) {
        let clean = q.trim().toLowerCase();
        if (clean !== query) {
            query = clean;
            // debounce the query
            clearTimeout(timeout);
            timeout = setTimeout(() => doQuery(), DEBOUNCE_INTERVAL);
        }
    }

    function doQuery() {
        if (query.trim() === "") {
            RESULTS_EL.innerHTML = "";
            return;
        }

        let search = new URLSearchParams({q: query});
        let url =
        fetch(`${SEARCH_URL}?${search}`).then(async (data) => {
             let json = await data.text();
             let docs = JSON.parse(json).docs;
             let html = docs.join("\n");
             RESULTS_EL.innerHTML = html;
        });
    }

    document.querySelectorAll("div.search-form input").forEach((el) => {
        el.addEventListener("input", (e) => {
            handleInput(el.value);
        })
    });
})();

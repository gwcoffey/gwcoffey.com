import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const ACCOUNTS = {
    "acct:gwcoffey@gwcoffey.com": {
        instance: "pub.gwcoffey.com",
        handle: "gwcoffey"
    }
};

const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=3600" // one hour
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    const resource = event.queryStringParameters.resource;
    const rel = event.queryStringParameters.rel;

    // if no resource was specified, return a 400
    if (!resource) {
        return {
            statusCode: 400,
            headers: {...HEADERS, "Content-Type": "text/plain"},
            body: "required resource not specified"
        }
    }

    // otherwise start building the response with a subject
    var response: any = {subject: resource};

    // look up the account
    const account = ACCOUNTS[event.queryStringParameters.resource];

    // augment the response with account info if any
    if (account) {
        const self_url = `https://${account.instance}/users/${account.handle}`;
        const profile_url = `https://${account.instance}/@${account.handle}`;
        const subscribe_url = `https://${account.instance}/authorize_interaction?uri={uri}`;

        response.aliases = [self_url, profile_url];

        response.links = [];

        if (!rel || rel.includes('http://webfinger.net/rel/profile-page')) {
            response.links.push({
                rel: "http://webfinger.net/rel/profile-page",
                type: "text/html",
                href: profile_url
            });
        }

        if (!rel || rel.includes('self')) {
            response.links.push({
                rel: "self",
                type: "application/activity+json",
                href: self_url
            });
        }

        if (!rel || rel.includes('http://ostatus.org/schema/1.0/subscribe')) {
            response.links.push({
                rel: "http://ostatus.org/schema/1.0/subscribe",
                template: subscribe_url
            });
        }
    }

    return {
      statusCode: 200,
      headers: {...HEADERS, 'Content-Type': 'application/jrd+json'},
      body: JSON.stringify(response, null, 2),
    };
};

export { handler };

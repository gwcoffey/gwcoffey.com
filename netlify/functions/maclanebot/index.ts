import { Handler, HandlerEvent, HandlerContext, schedule } from "@netlify/functions";
import post from "@gwcoffey/litbot"
import { env } from "process";
import post_data from "./posts.json";

const maclanebotHandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    await post(post_data, new URL('https://botsin.space'), env['LITBOT_TOKEN_MACLANE']!);
    console.log("Post sent successfully");
    return {
        statusCode: 200,
    };
};

// schedule every 2 hours at 11 minutes after the hour
const handler = schedule("11 */4 * * *", maclanebotHandler)

export { handler };
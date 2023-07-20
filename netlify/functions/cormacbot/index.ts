import {Handler, HandlerEvent, schedule} from "@netlify/functions";
import post from "@gwcoffey/litbot"
import { env } from "process";
import post_data from "./posts.json";

const cormacbotHandler: Handler = async (event: HandlerEvent) => {
    await post(post_data, new URL('https://botsin.space'), env['LITBOT_TOKEN_CORMAC']!);
    console.log("Post sent successfully");
    return {
        statusCode: 200,
    };
};

// schedule every saturday morning at 6
const handler = schedule("0 */2 * * *", cormacbotHandler)

export { handler };
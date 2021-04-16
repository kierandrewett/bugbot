import { DiscordConfig } from "./types";

import dotenv from 'dotenv';

dotenv.config();

export const discordConfig: DiscordConfig = {
    token: process.env.TOKEN || "", // change this in .env
    prefix: "bug",

    bugChannelId: "832361086824611880",
    bugQueueChannelId: "832611278551121930"
}
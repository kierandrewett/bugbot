import { DiscordConfig } from "./types";

import dotenv from 'dotenv';

dotenv.config();

export const discordConfig: DiscordConfig = {
    token: process.env.TOKEN // change this in .env
}
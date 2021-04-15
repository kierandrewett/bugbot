import BugBot from "@bugbot/lib/bugbot";

import { discordConfig } from "../config";

const bot = new BugBot();

bot.login(discordConfig.token);
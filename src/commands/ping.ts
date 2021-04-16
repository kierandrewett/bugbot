import { Command } from "discord-akairo";
import { Message } from "discord.js";

import { ping } from "../../lib/utils/ping";

export default class PingCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping'] 
        });
    }

    public async exec(message: Message) {
        const { bot, gateway } = await ping();

        return message.reply(
            `🏓 \`${bot}ms\`\n💓 \`${gateway}ms\``
        , { replyTo: message })
    }
}
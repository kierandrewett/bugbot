import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping'] 
        });
    }

    public exec(message: Message) {
        return message.reply(`🏓 \`${message.client.ws.ping}ms\``, { replyTo: message })
    }
}
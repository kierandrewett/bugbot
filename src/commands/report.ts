import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class ReportCommand extends Command {
    public constructor() {
        super('report', {
            aliases: ['report']
        });
    }

    public exec(message: Message) {
        return message.channel.send(`🚧`)
    }
}
import { emotes } from "../../lib/utils/constants";
import { Command } from "discord-akairo";
import { DiscordAPIError } from "discord.js";
import { Message } from "discord.js";

export default class ReportCommand extends Command {
    public constructor() {
        super('report', {
            aliases: ['report'],
        });
    }

    public exec(message: Message) {
        message.author.send("🚧")
            .then(_ => {
                message.react("📬")
            })
            .catch((e: DiscordAPIError) => {
                switch(e.code) {
                    case(50007):
                        message.reply(`${emotes.error} We were unable to direct message you!`, { replyTo: message })
                }
            })
    }
}
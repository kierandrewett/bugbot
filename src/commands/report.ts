import { emotes } from "../../lib/utils/constants";
import { Command } from "discord-akairo";
import { DiscordAPIError, Message, MessageEmbed } from "discord.js";

export default class ReportCommand extends Command {
    public constructor() {
        super('report', {
            aliases: ['report'],
        });
    }

    public exec(message: Message) {
        const intro = new MessageEmbed()

        intro.setTitle("👋 Hello!")
        intro.setDescription("BugBot will ask a couple questions about your bug or issue, there is no time limit so you can take your time.")
        intro.setColor("#2F3136")

        message.author.send(intro)
            .then(async _ => {
                message.react("📬")

                intro.setTitle("📝 Once you have finished your report...")
                intro.setDescription("...it will be sent off to the team to make sure it isn't spam.")
                intro.setColor("#2F3136")

                await message.author.send(intro)

                intro.setTitle("💭 Any questions?")
                intro.setDescription("You can ask one of the staff for support with this whenever you like.")
                intro.setColor("#2F3136")

                await message.author.send(intro)
            })
            .catch((e: DiscordAPIError) => {
                switch(e.code) {
                    case(50007):
                        message.reply(`${emotes.error} We were unable to direct message you!`, { replyTo: message })
                }
            })
    }
}
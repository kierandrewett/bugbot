import { Command } from "discord-akairo";
import { MessageEmbed } from "discord.js";
import { Message } from "discord.js";

export default class HelpCommand extends Command {
    public constructor() {
        super('help', {
            aliases: ['help', 'h', 'helpme', 'ihavefallenandicantgetup'],
            regex: new RegExp(`^<@!?832363938640298024>$`)
        });
    }

    public async exec(message: Message) {
        let embed = new MessageEmbed()
            .setTitle(`✨ Hi! I'm BugBot!`)
            .setDescription(`I'm **BugBot**\n\nThe prefix for all commands here is \`bug\`.`)
            .addField("📘 General", "`ping, help`")
            .addField("🐛 Bug Reporting", "`report, reproduce, noreproduce`")
            .addField("👀 Administrative", "`eval`\n__\n__")
            .setColor("#3498db")
            .setTimestamp(Date.now())
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
        message.channel.send(embed)     
    }
}
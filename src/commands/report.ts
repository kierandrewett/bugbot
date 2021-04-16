import { emotes, products } from "../../lib/utils/constants";
import { Command } from "discord-akairo";
import { DiscordAPIError, Message, MessageEmbed } from "discord.js";

export default class ReportCommand extends Command {
    public sentPrompt?: boolean;

    public constructor() {
        const productEmbed = new MessageEmbed();
        productEmbed.setTitle("🤔 What product does the bug occur on?")
        productEmbed.setColor("#FFC95D")
        productEmbed.setDescription(`Valid products: \`${products.map(p => p[0]).join(", ")}\``)

        super('report', {
            aliases: ['report'],

            args: [
                {
                    id: 'product',
                    type: products,
                    prompt: {
                        start: async (message: Message) => {
                            if(message.channel.type == "dm") message.reply("", productEmbed)
                            else {
                                message.author.send("__\n__")
                                    .then(msg => {
                                        msg.delete()
                                        message.reply(`${emotes.error} This command must be ran in a DM with the bot.`, { replyTo: message });
                                    })
                                    .catch(e => {
                                        message.reply(`${emotes.error} We were unable to DM you.\nChances are your privacy settings are blocking DMs.`, { replyTo: message });
                                    })
                            }
                        },
                        retry: (message: Message) => {
                            if(message.channel.type == "dm") {
                                message.reply(`${emotes.error} Sorry! That didn't work.\nTry running \`bug report\` again and enter the **correct** product.`, { replyTo: message })
                            } else {
                                message.reply(`${emotes.error} This command must be ran in a DM with the bot.`, { replyTo: message });
                            }
                        }
                    }
                }
            ]
        });
        
    }

    public exec(message: Message, args: any) {
        if(message.channel.type != "dm") {
            if(!this.sentPrompt) message.reply(`${emotes.error} This command must be ran in a DM with the bot.`, { replyTo: message });
            return;
        };

        const summaryEmbed = new MessageEmbed();
        summaryEmbed.setTitle("🚀 Can you write a short summary on the bug?");
        summaryEmbed.setColor("#FFC95D");
        summaryEmbed.setDescription("Make it short, snappy and clear.\nThis helps Dot HQ identify and organise reports easier.");
        message.reply("", summaryEmbed);
        let filter = (m: Message) => m.author.id === message.author.id;

        message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ["time"]
        })
        .then(summaryMessage => {
            const summaryResponse = summaryMessage.first();
            console.log(summaryResponse?.content);
        })
    }
}
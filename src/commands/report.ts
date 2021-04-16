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
                                        message.reply(`${emotes.error} We were unable to DM you.`, { replyTo: message });
                                    })
                            }
                        },
                        retry: (message: Message) => {
                            if(message.channel.type == "dm") {
                                message.reply(`${emotes.error} That isn't a valid product. Try running \`bug report\` again.`, { replyTo: message })
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

        message.reply("BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS BINGUS", { replyTo: message })
    }
}
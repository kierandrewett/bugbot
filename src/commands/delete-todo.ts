import { Client } from "asana";
import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class DeleteTodoCommand extends Command {
    public asana: Client;

    public constructor() {
        super('deletetodo', {
            aliases: ['delete-todo', 'dt'],

            args: [
                {
                    id: 'id',
                    match: 'rest'
                }
            ]
        });

        this.asana = Client.create().useAccessToken(process.env.ASANA_TOKEN || "");
    }

    public async exec(message: Message, args: any) {
        this.asana.tasks.delete(args.id).then(_ => {
            message.react("🗑")
            message.react("✅")
        }).catch(_ => {
            message.react("❌")
        })
    }
}
import { AkairoClient } from "discord-akairo";

class BugBot extends AkairoClient {
    constructor() {
        super({
            // Options for Akairo go here.
        }, {
            // Options for discord.js goes here.
        });
    }
}

const client = new BugBot();
client.login('TOKEN');

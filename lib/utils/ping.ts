import axios from "axios";

export const ping = async () => {
    const botTimings = [Date.now(), -1];
    await axios.get("https://discord.com");
    botTimings[1] = Date.now();

    const gatewayTimings = [Date.now(), -1];
    await axios.get("https://gateway.discord.gg").catch(_ => {})
    gatewayTimings[1] = Date.now();

    return {
        bot: botTimings[1] - botTimings[0],
        gateway: gatewayTimings[1] - gatewayTimings[0]
    }
}
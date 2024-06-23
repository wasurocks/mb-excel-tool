import axios from "axios";
import { Imposter } from "./imposter.js";

export class Mountebank {
    private mountebankUrl: string;

    constructor(mountebankHostname = "localhost") {
        console.log(`Mountebank hostname: ${mountebankHostname}`);
        this.mountebankUrl = `http://${mountebankHostname}:2525`;
    }

    async checkIsAlive(logIfNotAlive = false) {
        const url = `${this.mountebankUrl}/`;
        const result = await axios.get(url);
        if (result.status == 200) return true;
        if (logIfNotAlive) {
            console.log(`Mountebank is not available under url '${url}'`);
            console.log(result);
        }
        return false;
    }

    async createImposter(imposter: Imposter) {
        try {
            // just try to delete in case an imposter is there
            await this.deleteImposter(imposter.port);
        } catch (error) {} // eslint-disable-line

        const response = await axios.post(
            `${this.mountebankUrl}/imposters`,
            JSON.stringify(imposter)
        );

        if (response.status != 201) {
            throw new Error(
                `Problem creating imposter: ${JSON.stringify(response?.data)}`
            );
        }
    }

    async deleteImposter(port: number) {
        await axios.delete(`${this.mountebankUrl}/imposters/${port}`);
    }

    async getImposter(port: number) {
        const response = await axios.get(
            `${this.mountebankUrl}/imposters/${port}`,
            {
                headers: {
                    Accept: "application/json",
                },
            }
        );
        return response.data;
    }
}

import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY || "your_api_key";

const mistralClient = new Mistral({ apiKey: apiKey });

export { mistralClient };

import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
dotenv.config();
const configuration = new Configuration({
  organization: "org-M1EeIsFrLaIuFDTUA64S0NeB",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;

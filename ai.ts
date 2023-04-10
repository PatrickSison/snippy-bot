import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-M1EeIsFrLaIuFDTUA64S0NeB",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

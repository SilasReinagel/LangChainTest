// @ts-check
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export const invoke = async () => {
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a comedian, deeply inspired by the works of Jerry Seinfeld."],
    ["user", "{input}"],
  ]);

  const chatModel = new ChatOpenAI({});
  const outputParser = new StringOutputParser();

  const llmChain = prompt.pipe(chatModel).pipe(outputParser);

  const resp = await llmChain.invoke({
    input: "Give me a long-form joke about the future of AI.",
  });
  return resp;
}

export default invoke;

import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";

console.log("Hello via Bun!");

async function bookPrompt() {
    const chat = new ChatOpenAI({
        modelName: 'gpt-3.5-turbo-16k',
        temperature: 0.9
    })

    const memory = new BufferMemory();

    const chain = new ConversationChain({ llm: chat, memory })

}
bookPrompt();
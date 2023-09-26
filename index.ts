import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory } from "langchain/memory";
import { sherlock } from "./resources/Sherlock";

async function bookPrompt() {
    const chat = new ChatOpenAI({
        modelName: 'gpt-3.5-turbo-16k',
        temperature: 0.9
    })

    const memory = new BufferMemory();

    const chain = new ConversationChain({ llm: chat, memory })

    const adventuresplit: RegExp = /(THE ADVENTURE OF[\s\S]*?)(?=(THE ADVENTURE OF|$))/g;
    const chapters: string[] = [...sherlock.matchAll(adventuresplit)].map(match => match[1]);

    console.log(chapters[0])
}
bookPrompt();
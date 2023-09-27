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

    const res1 = await chain.run("I'm gonna give you a ton of text. Learn from it. Listen to it. Prepare yourself. Because once I'm done feeding you text. I have a challenge for you.")
    const res2 = await chain.run(chapters[0].slice(0, 9000))
    const res3 = await chain.run(chapters[1].slice(0, 9000))
    const res4 = await chain.run(chapters[2].slice(0, 9000))
    const res5 = await chain.run(chapters[3].slice(0, 9000))
    const res6 = await chain.run(chapters[4].slice(0, 9000))
    // const res7 = await chain.run(chapters[5].slice(0, 16385))
    // const res8 = await chain.run(chapters[6].slice(0, 16385))
    // const res9 = await chain.run(chapters[7].slice(0, 16385))
    // const res10 = await chain.run(chapters[8].slice(0, 16385))
    // const res11 = await chain.run(chapters[9].slice(0, 16385))
    // const res12 = await chain.run(chapters[10].slice(0, 16385))
    // const res13 = await chain.run(chapters[11].slice(0, 16385))
    const res14 = await chain.run("Now write me your own sherlock story in the same style. Do your best.")
    console.log(res14)
}
bookPrompt();
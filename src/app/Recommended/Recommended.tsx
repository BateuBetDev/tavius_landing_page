import Button from "@/components/button/Button";
import Image from 'next/image';
import { ReactNode } from "react";

interface RecommendedItems {
    text: ReactNode
}

interface RecommendedProps {
    items: RecommendedItems[]
}

const Recommended: React.FC<RecommendedProps> = ({ items }) => {
    return (
        <section className="p-4 h-screen flex flex-col bg-black  md:p-10 xl:p-12">
            <h1 className="pb-10 text-white text-2xl font-rowdies uppercase text-center md:text-3xl xl:text-[2.5rem]">Para quem recomendo estas lives:</h1>
            <div className="md:flex md:justify-center">
                <ul className="pb-10">
                    {items.map((item, index) => (
                        <li key={index} className="py-4 flex w-full"><img src="/check.svg" alt="" className="w-[2rem]" />{item.text}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center">
                <Button />
            </div>
            <div className="my-10 w-full flex justify-center md:hidden">
                <Image src={"/before-after.png"} alt={""} width={300} height={300}/>
            </div>
        </section>
    )
}

export default Recommended;
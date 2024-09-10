import Button from '@/components/button/Button'
import Image from 'next/image'

interface HeroItems {
    svg: string,
    text: string,
}

interface HeroProps {
    items: HeroItems[]
}

const Hero:React.FC<HeroProps> = ({items}) => {
    return (
        <section className="h-screen px-4 py-4 md:px-10 md:py-10 overflow-hidden">
            <div>
                <h1 className="text-white uppercase font-rowdies text-center text-2xl md:text-3xl xl:text-[2.5rem]">
                    Você vai <br className="md:hidden" /> aprender comigo:
                </h1>
            </div>
            {/* HeroItems  */}
            <div className='w-full py-4 grid grid-cols-2 gap-4 md:py-10 xl:grid-cols-3'>
                {items.map((item, index) => (
                    <div className="w-[160px] h-[140px] flex flex-col items-center justify-center glassmorphism m-auto md:w-[300px] xl:w-[400px]" key={index}>
                        <Image src={item.svg} alt={''} width={60} height={60}></Image>
                        <h2 className='text-white text-center font-kulim'>{item.text}</h2>
                    </div>
                ))}
            </div>
            <div className='flex justify-center pt-4 md:pt-10'>
                <Button/>
            </div>
        </section>
    )
}

export default Hero
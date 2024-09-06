import Image from 'next/image'

const Tavius = () => {
    return (
        <section className="w-full h-screen px-4 py-4 md:px-10 md:py-4">
            <div className='w-full flex flex-col items-center'>
                <h1 className="text-yellow-400 uppercase font-rowdies text-center text-2xl md:text-3xl xl:text-[2.5rem]">
                    Quem é <br />
                    <Image src={'/logo_yellow.svg'} alt={'Logo Tavius'} width={120} height={120} className='inline-block' /> ?
                </h1>
            </div>
            <div>
            </div>

        </section>
    )
}

export default Tavius
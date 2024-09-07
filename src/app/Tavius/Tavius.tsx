import Image from 'next/image'

const Tavius = () => {
    return (
        <div className=" p-4 w-full">
            <div className='flex items-center justify-center'>
                <h1 className='text-white font-rowdies uppercase text-2xl md:text-3xl xl:text-4xl'>Quem é</h1>
                <Image src={'/logo_yellow.svg'} alt={'Logo Tavius'} width={120} height={120} />
                <h2 className='text-white font-rowdies uppercase text-2xl'>?</h2>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Tavius
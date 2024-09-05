import Button from '@/components/button/Button';
import Image from 'next/image'
import { FaTelegram } from 'react-icons/fa';

const Main = () => {
    return (
        <div className="w-full h-screen">
            {/* Header */}
            <div className="px-4 py-2 w-full flex justify-between items-center bg-yellow-400">
                <Image src={'/logo_black.svg'} alt={'Logo Tavius'} width={120} height={120} />
                <a href="">
                    <FaTelegram className='text-3xl' />
                </a>
            </div>
            {/* Conteúdo Imagem + Texto */}
            <div className='px-4 py-2 w-full h-[80%] bg-main bg-cover bg-no-repeat bg-mobile-position md:bg-tablet-position xl:bg-contain xl:bg-desktop-position'>
                <div className='w-full h-full flex items-end md:w-1/2 md:items-center'>
                    <h2 className='text-white font-rowdies text-xl uppercase md:text-3xl'>
                        Eu vou te <span className='text-yellow-400'>ensinar </span> as estratégias que me renderam <span className='text-yellow-400'>muita grana</span>. Todos os dias e ao vivo, você vai ter acesso a todo o meu arsenal que me fizeram <span className='text-yellow-400'>mudar de vida</span>.
                    </h2>
                </div>
            </div>
            <div className='pt-4 w-full flex justify-center'>
                <Button/>
            </div>
        </div>
    )
}

export default Main;
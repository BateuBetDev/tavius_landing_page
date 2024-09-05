import Button from "@/components/button/Button"

const Ebook = () => {
    return (
        <section className="w-full h-screen py-4">
            <div className="h-full bg-second bg-cover bg-center md:bg-contain md:bg-left md:bg-no-repeat">

                <div className="h-full flex">
                    <div className="flex flex-col justify-end md:items-end xl:items-center xl:ml-[40%]">
                        <h1 className="text-yellow-400 uppercase font-rowdies text-center text-2xl md:text-3xl xl:text-[2.5rem] md:w-[45%] xl:w-[40%]">
                            O que você <br className="md:hidden xl:block" />vai Receber:
                        </h1>
                        <h2 className="p-4 text-white uppercase text-center font-kulim md:text-3xl xl:text-[2.5rem] md:w-[45%] md:flex-grow xl:w-[95%] xl:pt-[10%] xl:pr-10">
                            Dentro de nossa comunidade você terá acesso a <span className="text-yellow-400">Ebooks</span>, <span className="text-yellow-400">vídeo aulas</span>, <span className="text-yellow-400">planilhas de acompanhamento</span>, <span className="text-yellow-400">análise do mercado</span>, acesso ao grupo de <span className="text-yellow-400">networking</span> e <span className="text-yellow-400">sorteio de bancas</span>.
                        </h2>
                        <div className='pt-4 w-full flex justify-center xl:relative xl:bottom-[30%]'>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Ebook
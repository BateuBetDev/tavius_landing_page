import Button from "@/components/button/Button"

const Tavius = () => {
    return (
        <section className="mt-40 w-full h-screen md:px-12 md:flex md:mt-0">
            {/* Título & Texto */}
            <div className="p-4 md:w-[60%] md:flex md:flex-col md:items-center">
                <h1 className="text-white text-center font-rowdies text-2xl uppercase xl:text-4xl xl:pb-10 ">Quem é TAVIUS?</h1>
                <h2 className="py-4 text-white font-kulim text-center uppercase text-base md:text-2xl xl:text-3xl">Minha jornada começou como um ex-CLT comum, preso a uma rotina exaustiva de mais de 8 horas por dia, sem liberdade financeira. A necessidade me impulsionou a buscar alternativas ousadas para me libertar do sistema trabalhista e oferecer um futuro melhor à minha família.

                    Hoje, após mais de 2 anos no emocionante mundo do Igaming, ganho mais de 20 vezes o que recebia antes. Essa transformação me permite proporcionar uma vida digna e inspirar aqueles que me acompanham. Cada conquista é uma prova de que a mudança é possível!
                </h2>
                <div className="w-full flex justify-center xl:pt-10">
                    <Button />
                </div>
            </div>
            {/* Background */}
            <div className="hidden w-full h-full bg-before-after bg-contain bg-center bg-no-repeat md:block md:w-[40%] xl:bg-contain ">

            </div>

        </section>
    )
}

export default Tavius
import React from "react";

function About() {
    return (
        <div className="flex justify-start md:items-start items-center md:flex-row pt-12 md:pt-0 flex-col gap-24 bg-stone-900 h-screen">
            <div className="md:pl-40 md:pt-32 p-12 md:p-0 text-white max-w-xl md:max-w-2xl text-justify lg:w-2/4 w-full space-y-8">
                <h1 className="md:text-6xl text-4xl font-bold">Bem-vindo, </h1> 
                <h1 className="md:text-2xl text-lg">Sou o Rafael e estour sempre estudando novas tecnologias e mexendo com várias ferramentas.
                    Além da programação, amo ler e jogar. Ainda estou me encontrando na área da programação.
                </h1>
            </div>
            <div className="h-40">
                <h1>Foto minha aqui do lado</h1>
            </div>
        </div>
    )
}

export default About
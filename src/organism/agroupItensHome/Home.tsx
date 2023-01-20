import React, { ButtonHTMLAttributes, HtmlHTMLAttributes, useEffect, useState } from "react"
import './styleHome.scss'

import axios from "axios"

import GroupButtons from "../../molecul/groupButtons/GroupButtons"
import TextComment from "../../molecul/TextComment/TextComment"
import Button from "../../atoms/Button/Button"
import RenderItem from "../../molecul/RenderItem/RenderItem"


export interface IDataAPI {
    anime: string;
    character: string;
    quote: string;
    nota?: number;
    id: number;
}

export default function Home() {
    const [index, setIndex] = useState(0)
    const [init, setInit] = useState(0)
    const [array, setArray] = useState<IDataAPI[]>([])

    async function dataApi() {
        const res = await axios.get('https://animechan.vercel.app/api/random');
        const resValue: IDataAPI = res.data
        resValue.nota = 0
        array.push(resValue)
        setArray(array)
    }

    useEffect(() => {
        dataApi()
    }, [index])

    function identificador(nota?: number) {
        array[index].nota = nota
        console.log(array[index])
        console.log(index)
        setIndex(index + 1)
    }

    function renderResult() {
        array.sort((a, b) => a.nota && b.nota ? b.nota - a.nota : 0)

        return (
            array.map((item: IDataAPI, index: number) => (
                item.nota != 0 ? <RenderItem name={item.anime} character={item.character} nota={item.nota} citation={item.quote} position={index + 1} /> : null
            ))
        )
    }

    return (
        <section className="containerHome">
            {init == 0 ? (
                <div className="boxWelcome">
                    <h1>Seja bem-vindo(a)</h1>
                    <Button handleClick={() => { setInit(1) }} text='Iniciar' />
                </div>
            )
                : null
            }

            <div>
                {index < array.length && init == 1 && (
                    <div>
                        <TextComment Citation={array[index].quote}
                            nameSerie={array[index].anime}
                            Personage={array[index].character} />
                        <div className="agroupNota">
                            <h3>Nota:</h3>
                            <GroupButtons handleClick={identificador} />
                        </div>
                    </div>
                )}
            </div>
            <div className="boxRanking">
                {init == 1 && (
                    <h1 id="textRanking">
                        Ranking
                    </h1>
                )}
                {renderResult()}
            </div>
        </section>
    )
}
import { useEffect, useState } from "react"

import axios from "axios"

import './styleHome.css'
import GroupButtons from "../../molecul/groupButtons/GroupButtons"
import TextComment from "../../molecul/TextComment/TextComment"
import Button from "../../atoms/Button/Button"
import RenderItem from "../../molecul/RenderItem/RenderItem"

let i = 1

export default function Home() {
    const [index, setIndex] = useState(0)
    const [init, setInit] = useState(0)
    const [array, setArray] = useState([])

    async function dataApi() {
        const res = await axios.get('https://animechan.vercel.app/api/random');
        res.data.nota = 0
        res.data.id = i
        i++
        array.push(res.data)
    }

    useEffect(() => {
        dataApi()
    }, [index])

    function identificador(number, nota) {
        array.forEach((item) => {
            if (item.id == number) {
                item.nota = nota
            }
        })
        setIndex(index + 1)
    }

    function renderResult() {
        array.sort(function (a, b) {
            if (a.nota > b.nota) {
                return -1
            }
            else {
                return true
            }
        })

        return (
            array.map((item, index) => (
                item.nota != 0 ? <RenderItem name={item.anime} character={item.character} nota={item.nota} citation={item.quote} position={index + 1} /> : null
            ))
        )
    }

    return (
        <section className="containerHome">
            {init == 0 ? (
                <div className="boxWelcome">
                    <h1>Seja bem vindo(a)</h1>
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
                            <GroupButtons handleClick={(e) => identificador(array[index].id, parseInt(e.target.value))} />
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
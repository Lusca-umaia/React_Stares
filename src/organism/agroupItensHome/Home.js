import { useEffect, useState } from "react"

import './styleHome.css'
import GroupButtons from "../../molecul/groupButtons/GroupButtons"
import TextComment from "../../molecul/TextComment/TextComment"
import Button from "../../atoms/Button/Button"
import RenderItem from "../../atoms/RenderItem/RenderItem"

export default function Home() {
    const [index, setIndex] = useState(0)
    const [init, setInit] = useState(0)
    const [array, setArray] = useState([
        { name: 'Game of Thrones', personage: 'Lord Varys', citation: '"O poder reside onde os homens acreditam que reside. Nem mais, nem menos"', nota: 0, id: 1 },
        { name: 'Stranger Things', personage: 'Mike', citation: '"Um amigo é alguém por quem você faria qualquer coisa. Você emprestaria as suas coisas legais como gibis e cards raros. E eles nunca quebram uma promessa"', nota: 0, id: 2 },
        { name: 'Friends', personage: 'Monica', citation: '"Bem-vinda ao mundo real. É uma droga. Você vai amar"', nota: 0, id: 3 }
    ])


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
                item.nota != 0 ? <RenderItem name={item.name} nota={item.nota} citation={item.citation} position={index + 1} /> : null
            ))
        )
    }

    return (
        <section className="containerHome">
            {init == 0 ? (
                <div className="boxWelcome">
                    <h1>Seja bem vindo(a)</h1>
                    <Button handleClick={() => setInit(1)} text='Iniciar' />
                </div>
            )
                : null
            }

            <div>
                {index < array.length && init == 1 && (
                    <div>
                        <TextComment Citation={array[index].citation}
                            nameSerie={array[index].name}
                            Personage={array[index].personage} />
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
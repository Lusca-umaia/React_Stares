import './styleComment.scss'

interface ITextComment {
    nameSerie: string;
    Citation: string;
    Personage: string;
}


export default function TextComment({ nameSerie, Citation, Personage }: ITextComment) {
    return (
        <article>
            <h3>{Citation}</h3>
            <h4>{nameSerie}, {Personage}</h4>
        </article>
    )
}
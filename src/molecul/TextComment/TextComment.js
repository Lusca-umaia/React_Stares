import './styleComment.css'

export default function TextComment({ nameSerie, Citation, Personage }) {
    return (
        <article>
            <h3>{Citation}</h3>
            <h4>{nameSerie}, {Personage}</h4>
        </article>
    )
}
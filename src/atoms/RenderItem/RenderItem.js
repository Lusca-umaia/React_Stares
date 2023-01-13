import './styleRender.css'

export default function RenderItem({ citation, nota, name, position }) {
    return (
        <div className="boxRender">
            <h2><span>{position}° -</span> Nome da série: {name}</h2>
            <h2>Citação: {citation}</h2>
            <h2>Nota:{nota}</h2>
        </div>
    )
} 
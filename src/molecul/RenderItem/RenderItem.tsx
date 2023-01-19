import './styleRender.css'
interface IRenderItem {
    citation: string;
    nota?: number;
    name: string;
    position: number;
    character: string;
}

export default function RenderItem({ citation, nota, name, position, character }: IRenderItem) {
    return (
        <div className="boxRender">
            <h2><span>{position}° -</span> <span className='bottomEffect'>Nome do anime:</span> {name}</h2>
            <h2><span className='bottomEffect'>Personagem: </span>{character}</h2>
            <h2><span>Citação:</span> {citation}</h2>
            <h2><span className='bottomEffect'>Nota: </span>{nota}</h2>
        </div>
    )
} 
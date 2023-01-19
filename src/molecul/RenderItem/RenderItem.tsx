// import './styleRender.css'

interface IRenderItem {
    citation: string;
    nota?: number;
    name: string;
    position: number;
    character: string;
}


const styles = {
    boxRender: {
        'display': 'flex',
        'width': '70%',
        'font-size': '.8em',
        'border-radius': '20px',
        'border': '5px solid #00EE00',
        'padding': '20px',
        'margin': '0 auto',
        'justify-content': 'center',
        'text-align': 'center',
        'gap': '10px',
        'flex-direction': 'column'
    },
    span: {
        'color': '#00EE00',
        'font-size': '1.2em'
    }
}

export default function RenderItem({ citation, nota, name, position, character }: IRenderItem) {
    return (
        <div style={styles.boxRender}>
            <h2><span style={styles.span}>{position}° -</span> <span style={styles.span}>Nome do anime:</span> {name}</h2>
            <h2><span style={styles.span}>Personagem: </span>{character}</h2>
            <h2><span style={styles.span}>Citação:</span> {citation}</h2>
            <h2><span style={styles.span}>Nota: </span>{nota}</h2>
        </div>
    )
} 
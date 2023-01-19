import './styleButton.css'

interface ValuesButton {
    text: string;
    handleClick: () => void;
}
const Button = ({ text, handleClick }: ValuesButton) => {
    return (
        <button type={'button'} onClick={handleClick}>{text}</button >
    )
}

export default Button 
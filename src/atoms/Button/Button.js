import './styleButton.css'

export default function Button({ text, value, handleClick }) {
    return (
        <button value={value} onClick={handleClick}>{text}</button>
    )
}
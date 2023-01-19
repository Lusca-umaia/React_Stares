import styles from './styleButton.module.css'

interface ValuesButton {
    text: string;
    handleClick: () => void;
}
const Button = ({ text, handleClick }: ValuesButton) => {
    return (
        <button className={styles.button} type={'button'} onClick={handleClick}>{text}</button >
    )
}

export default Button 
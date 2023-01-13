import Button from "../../atoms/Button/Button"
import './styleGroupButtons.css'
export default function GroupButtons({ handleClick }) {
    return (
        <div className="groupButtons">
            <Button text='1' value={1} handleClick={handleClick} />
            <Button text='2' value={2} handleClick={handleClick} />
            <Button text='3' value={3} handleClick={handleClick} />
            <Button text='4' value={4} handleClick={handleClick} />
            <Button text='5' value={5} handleClick={handleClick} />
            <Button text='6' value={6} handleClick={handleClick} />
            <Button text='7' value={7} handleClick={handleClick} />
            <Button text='8' value={8} handleClick={handleClick} />
            <Button text='9' value={9} handleClick={handleClick} />
            <Button text='10' value={10} handleClick={handleClick} />
        </div>
    )
}
import Button from "../../atoms/Button/Button"
import { IDataAPI } from "../../organism/agroupItensHome/Home"
import './styleGroupButtons.scss'

interface IhandleClick {
    handleClick: (nota?: number) => void
}

export default function GroupButtons({ handleClick }: IhandleClick) {
    return (
        <div className="groupButtons">
            <Button text='1' handleClick={() => handleClick(1)} />
            <Button text='2' handleClick={() => handleClick(2)} />
            <Button text='3' handleClick={() => handleClick(3)} />
            <Button text='4' handleClick={() => handleClick(4)} />
            <Button text='5' handleClick={() => handleClick(5)} />
            <Button text='6' handleClick={() => handleClick(6)} />
            <Button text='7' handleClick={() => handleClick(7)} />
            <Button text='8' handleClick={() => handleClick(8)} />
            <Button text='9' handleClick={() => handleClick(9)} />
            <Button text='10' handleClick={() => handleClick(10)} />
        </div>
    )
}
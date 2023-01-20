import styled from "styled-components";

const ButtonComponent = styled.button`
    padding: 5px 20px;
    font-size: 1.3em;
    font-weight: 700;
    border: 3px solid #00EE00;
    background-color: #00EE00;
    border-radius: 5px;
    font-family: Sora;
    cursor: pointer;
    transition: .7s all;
    
    &:hover {
    color: #00EE00;
    background-color: #fff;
}
`

export default function Button() {
    return (
        <ButtonComponent >textp</ButtonComponent>
    )
}
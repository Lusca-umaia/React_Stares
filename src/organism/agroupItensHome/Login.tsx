import styled from "styled-components"
import { Link } from "react-router-dom";

const DivContainer = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Input = styled.input`
border: 2px solid #000 ;
padding: 10px 10px;
width: 300px;
transition: .7s all;
outline: none;
border-radius: 8px;

&:focus {
border-color: #00EE00;    
}
`
const InputSub = styled.input`
border: 3px solid #00EE00 ;
padding: 10px 10px;
width: 300px;
background-color: #00EE00;
margin: 0 auto !important;
transition: .7s all;
outline: none;
font-size: 1em;
font-weight: 700;
cursor: pointer;
border-radius: 8px;

&:hover {
background-color: #fff;   
}
`
const Label = styled.label`
font-size: 1em;
font-weight: 700;
`
const DivInput = styled.div`
display: flex;
flex-direction: column;
`

export default function Login() {
    return (
        <DivContainer>
            <h1>Efetue o Login para prosseguir:</h1>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <DivInput>
                    <Label htmlFor="name">Nome:</Label>
                    <Input type='text' id="name" required />
                </DivInput>
                <DivInput>
                    <Label>Senha:</Label>
                    <Input type='password' required />
                </DivInput>

                <Link to={'/AnimeCitations'} style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }} >
                    <InputSub type='submit' value={'Login'}>
                    </InputSub>
                </Link>
            </form>
        </DivContainer>
    )
}
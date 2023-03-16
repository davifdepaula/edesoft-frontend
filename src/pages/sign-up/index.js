import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignUpContainer } from './style'

function SignUP(props) {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    function onSignUp(e){
        e.preventDefault()
        const url = process.env.REACT_APP_API_URL
        axios.post(url, {name: {name, lastName}, userName, email, phone, password})
            .then(response => {
                console.log('oi')
                alert('Cadastro criado com sucesso')
                navigate('/')})
            .catch(error => alert(error))
            setName('')
            setLastName('')
            setUserName('')
            setEmail('')
            setPhone('')
            setPassword('')
            setConfirmPassword('')               
    }

    return (
        <>
            <SignUpContainer>
                <div>
                    <h1 className="registro">
                        Registre-se
                    </h1>
                    <form onSubmit={onSignUp}>
                        <input type="text" 
                            placeholder='Nome'
                            value={name}  
                            onChange={(event) => setName(event.target.value)}>
                        </input>
                        <input type="text" 
                            placeholder='Sobrenome'
                            value={lastName}  
                            onChange={(event) => setLastName(event.target.value)}>
                        </input>
                        <input type="text" 
                            placeholder='Nome de Usuário'
                            value={userName}  
                            onChange={(event) => setUserName(event.target.value)}>
                        </input>
                        <input type="email" 
                            placeholder='E-mail'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}>
                        </input>
                        <input type='text' 
                            placeholder='Telefone'
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}>
                        </input>
                        <input type='password' 
                            placeholder='Senha'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}>
                        </input>
                        <input type='password' 
                            placeholder='Confirme a senha'
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}>
                        </input>
                        <button type='submit'>Cadastrar</button>
                    </form>
                    <Link to ='/'> Home page </Link>
                </div>
            </SignUpContainer>
        </>
      )
}

export default SignUP
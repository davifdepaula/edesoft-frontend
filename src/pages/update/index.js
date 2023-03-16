import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { SignUpContainer } from '../sign-up/style'

function Update() {
  const {id} = useParams()
  console.log(id)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  function onUpdate(e){
    e.preventDefault()
    const url = process.env.REACT_APP_API_URL
    axios.put(`${url}`+'/'+`${id}`, {name: {name, lastName}, userName, email, phone, password})
        .then(response => {
            alert('Cadastro atualizado com sucesso')
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
                    Atualização de Cadastro
                </h1>
                <form onSubmit={onUpdate}>
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
                    <button type='submit'>Atualizar</button>
                </form>
                <Link to ='/'> Home page </Link>
            </div>
        </SignUpContainer>
    </>
  )
}

export default Update
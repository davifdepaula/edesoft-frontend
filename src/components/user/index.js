import React from 'react'
import axios from 'axios'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'

function User(props) {
  const {id, name, lastName, userName, email, phone, setUpdate} = props
  const navigate = useNavigate()

  const handleDelete = (id) => {
    const url = process.env.REACT_APP_API_URL
    console.log(id)
    console.log(`${url}`+'/'+`${id}`)
    axios.delete(`${url}`+'/'+`${id}`)
      .then(response => {
        setUpdate(true)
        alert('Usuário deletado com sucesso')})
      .catch(error => console.log(error.response.data.message))
  }

  const handleUpdate = (id) => {
    
  }
  return (
    <Container>
      <div><ion-icon name="person-outline"></ion-icon></div>
      <div>
        <h3>Nome: {name} {lastName}</h3>
        <div>Nome de usuario: {userName}</div>
        <div>E-mail: {email}</div>
        <div>Telefone: {phone}</div> 
      </div>
      <div className='buttons'>
        <span onClick={() => navigate(`/atualizar/${id}`)}><ion-icon name="pencil-outline"></ion-icon></span>
        <span onClick={() => handleDelete(id)}><ion-icon name="trash-bin-outline"></ion-icon></span>  
      </div>     
    </Container>
  )
}

export default User
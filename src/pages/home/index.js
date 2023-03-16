import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import User from '../../components/user/index.js'
import { Container, Title } from './style.js'

function Home() {
    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL
        axios.get(url)
            .then(response => {
                setUsers([...response.data])
                setUpdate(false)
            })
            .catch(error => console.log(error))
    }, [update])

  return (
    <>  
        <Title>
            <div onClick={() => navigate('/cadastro')}>
                <span>
                <ion-icon name="person-add-outline"></ion-icon>
                {' '}
                </span>
                <span>
                Cadastrar novo usuário
                </span>
            </div>
        </Title>
        <Container>
            {users?.map(user => {
                return (
                    <div>
                        <User 
                        key={user.id}
                        id={user.id}
                        name = {user.name.firstname}
                        lastName = {user.name.lastname}
                        userName = {user.username}
                        email = {user.email}
                        phone = {user.phone}
                        setUpdate = {setUpdate}
                        />
                    </div>
                )
            })}
        </Container>
    </>
  )
}

export default Home
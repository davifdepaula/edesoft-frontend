import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/authContext'
import { Container, Box, InOut } from './style.js'

function Home() {
    const {token, setToken, message, 
        setMessage, config} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    }, [])

    useEffect(() => {
        const url = process.env.REACT_APP_API_URL
        axios.get(`${url}home`, config)
            .then(response => {
                console.log(response.data)
                setMessage(response.data.msg)
            })
            .catch(error => console.log(error))
    }, [])

    
  return (
    <>
        <Container>
            <div>
                <h1>
                    <span>Olá, {message} </span> 
                    <span className='exit' onClick={() => {
                        setToken('')
                        navigate('/')}}> <ion-icon name="exit-outline"></ion-icon> </span>
                </h1>
            </div>
        </Container>
    </>
  )
}

export default Home
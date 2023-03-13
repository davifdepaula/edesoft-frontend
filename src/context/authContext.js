import React, {useState, createContext} from "react"
const UserContext = createContext()

function UserProvider({ children }){
    const [message, setMessage] = useState("")
    const [token, setToken] = useState()

    const config = {
        headers: {
            authorization:`Bearer ${token}`
        }
    }

    return (
        <UserContext.Provider 
        value = {{message, setMessage,
            token, setToken, config}}>
            {children}
        </UserContext.Provider>

    )
}

export {UserContext, UserProvider}
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { UserProvider } from "../../context/authContext";
import ResetStyle from "../../resetstyle"
import Home from "../../pages/home";
import SignUP from "../../pages/sign-up";
import Update from "../../pages/update";
import GlobalStyle  from "./style"

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/cadastro' element = {<SignUP />} />
          <Route path='/atualizar/:id' element = {<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

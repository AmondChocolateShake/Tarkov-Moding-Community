import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from '../../components/login/Login'
import SignUp from '../../components/register/SignUp'
import MainPageForm from '../../components/common/mainPageForm'
import Dev from '../../components/dev/dev'


//리액트 프로젝트 엔트리 포인트
const Main:React.FC=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/main' element={<MainPageForm/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main;
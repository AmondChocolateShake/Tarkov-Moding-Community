import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from '../../components/login/login'
import SignUp from '../../components/register/SignUp'
import MainPageForm from '../../components/common/mainPageForm'
import Dev from '../../components/dev/dev'
import { Provider } from 'react-redux'
import store from '../../redux/store'

//리액트 프로젝트 엔트리 포인트
const Main:React.FC=()=>{
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path='/main' element={<MainPageForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default Main;

import './App.css'
import { useState,createContext } from 'react'
import LoginPage from './pages/auth/LoginPage'
import { OTP } from './pages/auth/OTP'
import Reset from './pages/auth/Reset'
export const RecoveryContext = createContext();
function App() {
  
  function NavigationComponent(){
    if(page=="login"){return<LoginPage/>}
    if(page=="otp"){return <OTP/>}
    if(page=="reset"){return <Reset/>}
  }  

  const [page, setPage] = useState('login')
  const [email,setEmail] = useState()
  const [otp,setOtp] = useState()

  return (
   <>
     <RecoveryContext.Provider value={{page,setPage,email,setEmail,otp,setOtp}}>
       <NavigationComponent/>
     </RecoveryContext.Provider>
   </>
  )

}
export default App

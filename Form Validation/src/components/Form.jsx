import { useState } from 'react';
import '../style.css'
const Form = () => {
    const [userName,setUserName] = useState ('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState ('')

    const [invalidUserName,setInvalidUserName] = useState('')
    const [invaildEmail,setInvalidEmail] = useState('')
    const [invalidPassword,setInvalidPassword] = useState('')
    const[invalidConfirmPassword,setInvalidConfirmPassword] = useState ('')
    
    const[userColor,setUserColor] = useState('')
    const[emailColor,setEmailColor] = useState('')
    const[passwordColor,setPasswordColor] = useState('')
    const [confirmPasswordColor,setConfirmPasswordColor] = useState ('')

    const validdate = e => {
        e.preventDefault()
        if (userName.length>8){
            setInvalidUserName('')
            setUserColor('green')
        }else {
            setInvalidUserName('UserName must be 8 letters long')
            setUserColor('green')
        }if (email.includes('@gmail')) {
            setInvalidEmail('')
            setEmailColor('green')
        }else{
            setEmailColor('red')
            setInvalidEmail('Email should have @gmail')
        }if (password.length>8){
            setPassword('')
            setPasswordColor('green')
        }else {
            setInvalidPassword('Password should be 8 letters long')
            setPasswordColor('red')
        }
        if (password !== '' && password === confirmPassword) {  
            setInvalidConfirmPassword('');
            setConfirmPasswordColor('green');
        }else {
            setInvalidConfirmPassword ("Password didn't match")
            setConfirmPassword('red')
        }
        
    }

  return (
    <>
       <div className="card">
        <div className="card-image">
            <form >
                <input type='text' placeholder='User Name' style={{borderColor:userColor}} value={userName}
                 onChange={e => setUserName(e.target.value)}/>
                 <p className='error'>{invalidUserName}</p>
                 <input type='Email' placeholder='Email'style={{borderColor:emailColor}} value={email}
                 onChange={e => setEmail(e.target.value)}/>
                 <p className='error'>{invaildEmail}</p>
                 <input type='Password' placeholder=' Password' style={{borderColor:passwordColor}} value={password}
                 onChange={e => setPassword(e.target.value)}/>
                 <p className="error">{invalidPassword}</p>
                 <input type='Password' placeholder=' Confirm Password' style={{borderColor:setConfirmPasswordColor}} value={confirmPassword}
                 onChange={e => setConfirmPassword(e.target.value)}/>
                 <p className="error">{invalidConfirmPassword}</p>
                <button className="submit-btn" onClick={validdate}>Submit</button>
            </form>
        </div>
        </div> 
    </>
  )
}

export default Form;
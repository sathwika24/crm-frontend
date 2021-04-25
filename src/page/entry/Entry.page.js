import React, {useState} from 'react'
import {Jumbotron} from 'react-bootstrap'
import { Login } from '../../components/login/Login';
import { Passwordreset } from '../../components/login/Passwordreset';
import './entry.style.css';


export const Entry = () => {

const [email,setemail] = useState('')
const [password,setpassword] = useState('')
const [formload,setFormload] = useState('login')

const handleOnChange = e =>{
    const {name,value} = e.target;

    switch(name){
        case 'email':
            setemail(value);
            break;

            case 'password':
                setpassword(value);
                break;

            default: 
            break;
    }
    console.log(name,value)
}
const handleOnSubmit = e => {
    e.preventDefault()
    if(!email || !password){
        alert("fill up the form!")
    }
    // to call api to submit the form
    console.log(email,password);
} 
const handleOnResetSubmit = e => {
    e.preventDefault()
    if(!email){
        alert("please enter the email")
    }
}



const formSwitcher = formType =>{
    setFormload(formType)
}



    return (
        <div className="entry-page bg-info">
        
        <div>
        <Jumbotron className="form-box">
            {formload === 'login'  && <Login handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password} />}
       {formload === 'reset'  &&  <Passwordreset handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}/>
    }
</Jumbotron>
        </div>
        </div>
    )
}

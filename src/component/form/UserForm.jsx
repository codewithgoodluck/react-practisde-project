import React, {useState}from 'react'
import { Col, Container,Form,Row, Button} from 'react-bootstrap';
import DisplayUser from './DisplayUser'

const UserForm = () => {

const [changeEmail, setEmail]=useState(false)

    const emailOnchangeHandler=((event)=>{
       setEmail(event.value.target)

       console.log(event.value.target)
    })




    return (
        <div className="container">
            

            <form>
  <label for="fname">First name:</label><br/>
  <input onChange={emailOnchangeHandler} type="text" id="fname" name="fname"/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname"/>
</form>
            

            {/* <DisplayUser></DisplayUser>    */}
        </div>
    )
}

export default UserForm

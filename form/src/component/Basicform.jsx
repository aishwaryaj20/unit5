import { useState } from "react"
import React from "react";
import './Basicform.css';

export const Basicform = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("")
const [allEntry, setAllEntry] = useState([])


const submitForm = (e) =>
{

    e.preventDefault();
 const newEntry = {email:email, password:password}

 setAllEntry([... allEntry, newEntry]);
// console.log(allEntry)  //save prev data also 
}
    return (
  <>
  


  <form action="" onSubmit={submitForm} id="card">
<div>
    <label htmlFor="email">Email</label>
<br></br>
    <input type="text" name="email" value={email} id="email" 
    onChange={(e) => setEmail(e.target.value)}
    
 /><br></br>

  
</div>


<div>
    <label htmlFor="password">password</label>
    <br></br><br></br>
    <input type="text" name="password"  value={password} id="password"   
     onChange={(e) => setPassword(e.target.value)}/>

  
</div>

<button id="btn" type="submit">Submit</button>

  </form>


  <div className="table">

      {
          allEntry.map((curElem) =>
          {
              return (
           
                <div className="show">
              <table> <tr>
    <th>Email</th>
    <th>Password</th>
   
  </tr>
  <tr>
                    <td>{ curElem.email}</td>
                    <td>{curElem.password}</td></tr>
                    </table>
                    </div>
              )

               })
      }

 
  </div>
  </>
    )
}
export default Basicform;
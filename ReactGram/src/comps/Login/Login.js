import React,{ useState } from 'react';
import { useHistory } from "react-router";
import { auth } from '../../firebase/config';
import './Login.css';

const Field = ({ children }) =>
  <React.Fragment>
    {children}
    <br />
  </React.Fragment>;

const Input = ({ value, onChange, ...props }) =>
  <input
    {...props}
    value={value}
    onChange={event => onChange(event.target.value)}
  />;

const Login= ()=> {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [user,setUser]=useState(null);
const history = useHistory();

const onSubmitHandler = (e)=>{
  e.preventDefault();
  auth.signInWithEmailAndPassword(email,password)
    .then((authUser)=>{
      setUser(authUser);
      history.push('/gallery')
    })
    .catch((error)=> alert(error.message));
}

return (
    <div className="log">
    <h2>Welcome to ReactGram</h2>
    <form>
      <div className="input-cont">
        <Field>
          <Input type="email" placeholder="Email" value={email} onChange={setEmail} />
      </Field>
      </div>
      <div className="input-cont">
        <Field>
          <Input type="password" placeholder="Password" value={password} onChange={setPassword} />
      </Field>
      </div>
      <div className="clear"></div>
      <input type="button" value="Sign In" onClick={onSubmitHandler} />  
    </form>
  </div> 
)
}

export default Login

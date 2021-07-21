import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
 
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('/auth/login', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.data.token, response.data.data.message);
      sessionStorage.setItem('token', response.data.data.token);
      console.log(response)
      props.history.push('/todos');
    }).catch(error => {
      setLoading(false);
      console.log("error :", error)
      if (error) setError(error);
      else setError("Something went wrong. Please try again later.");
    });
  }
 
  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;
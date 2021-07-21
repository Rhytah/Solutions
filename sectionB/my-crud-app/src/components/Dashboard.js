import React, { useState } from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import axios from 'axios';
function Dashboard(props) {
  const user = getUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  const handleTodosFetch = () => {
    setError(null);
    setLoading(true);
    axios.get('/todos').then(response => {
      setLoading(false);
    //   setUserSession(response.data.token, response.data.user);
      console.log(response)
    //   props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      console.log("error :", error)
      if (error) setError(error);
      else setError("Something went wrong. Please try again later.");
    });
  }
 
  return (
    <div>

      Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;
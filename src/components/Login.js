import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [account, setAccount] = React.useState({ username: '', password: '' });
  const { username, password } = account;

  const handleChange = function (e) {
    setAccount({ ...account, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault(); // prevent default form submit
    if (username === 'admin' && password === 'letmein') {
      alert('Login successful');
      navigate('/employee', { state: account });
    } else {
      alert('Your username or password is incorrect');
    }
  }


  return (
    <div className="Login">
      <h1>Log in to your account</h1>
      <form>
        <div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input onChange={handleChange} value={username} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={handleChange} value={password} name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>

  )
}

export default Login
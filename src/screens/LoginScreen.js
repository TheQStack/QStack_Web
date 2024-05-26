import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div>
      <h2>Login Screen</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoginScreen;
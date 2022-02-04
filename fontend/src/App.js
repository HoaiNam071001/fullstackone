import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonList from './cpn';


function App() {

  //const user = getuser();
  // axios.get('https://jsonplaceholder.typicode.com/users')
  // .then(function (response) {
  //   // handle success
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });
  
  return (
    <div className="App">
      <PersonList/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hoài Nam
        </a>
      </header>
     
    </div>
  );
}
export default App;


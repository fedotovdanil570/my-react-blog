/* import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
 */

 import React from 'react';
 import Profile from './components/profile'
 import NewsTread from './components/news-thread'
 import Headerd from './components/header'
 import './style/style.css'

 class App extends React.Component{
   render(){
     return(
       <div className="container">

        <div className="row justify-content-around">

          {/*<div className="col-md-12 box header">
            <div className="row shadow-sm">
              <div className="col bg-white">
                Here must be menubar
                <AuthorizationForm/>
                
              </div>
            </div>
            
                </div>*/}
          <Headerd />

          <div className="col-md-4 box">

            <div className="row shadow-sm">
              <div className="col bg-white">
                <Profile myProfile='My name is Daniil'/>
              </div>
            </div>

          </div>
          
          <div className="col-md-8 bg-white box">
            <div className="row shadow-sm">
              <div className="col">
                {/*<h1 className="text-center">My Blog</h1>*/}
                <NewsTread />
              </div>
            </div>
            <div className="row shadow-sm">
              <div className="col">
                {/*<h1 className="text-center">My Blog</h1>*/}
                <NewsTread />
              </div>
            </div>            
          </div>
          
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
       </div>

     );
   }
 }

 export default App;
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LogIn from './components/auth/Login';
import SignIn from './components/auth/SignIn';
import FormExample from './components/auth/Register';
import Main from './components/test/Main';
import YouTubeForm from './components/codevolution/youtubeform/YouTubeForm';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        {/* <Home /> */}
        {/* <LogIn/> */}
        {/* <SignIn/>  */}
         {/* <FormExample/>  */}
         {/* <Main /> */}
         <YouTubeForm/>
         

      </div>
    </div>
     
  );
}

export default App;

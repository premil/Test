import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LogIn from './components/auth/Login';
import SignIn from './components/auth/SignIn';
import FormExample from './components/auth/Register';
import Main from './components/test/Main';
import YouTubeForm from './components/codevolution/youtubeform/YouTubeForm';
import OldYouTubeForm from './components/codevolution/youtubeform/OldYouTubeForm';
import Landingpage from './pages/LandingPage';
import FormikContainer from './components/formik/FormikContainer';


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


        {/* <YouTubeForm /> */}
        <Router>
          <Switch>
            <Route
              exact
              path={"/"}
              component={Landingpage}
            />

            <Route
              path={"/youtubeform"}
              component={YouTubeForm}
            />

            <Route
              path={"/oldyoutubeform"}
              component={OldYouTubeForm}
            />

            <Route
              path={"/formikcontainer"}
              component={FormikContainer}
            />

          </Switch>
        </Router>

      </div>
    </div>

  );
}

export default App;

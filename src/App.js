import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About_us from './Pages/About_us/About_us';
import AuthProvider from './Pages/Context/AuthProvider';
import Details from './Pages/Details/Details';
import Doctors from './Pages/Doctors/Doctors';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Not_Found from './Pages/Not_Found/Not_Found';
import Private_Route from './Pages/Private_Route/Private_Route';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Private_Route path="/details/:detailsId">
          <Details></Details>
        </Private_Route>
        <Route path="/doctor">
          <Doctors></Doctors>
        </Route>
        <Route path="/about">
          <About_us></About_us>
        </Route>
        <Route path="*">
          <Not_Found></Not_Found>
        </Route>
      </Switch>
     <Footer></Footer>
     </BrowserRouter>
     
     </AuthProvider>
    </div>
  );
}

export default App;

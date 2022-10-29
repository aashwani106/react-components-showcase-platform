import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import AddComponent from "./components/AddComponent";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ListComponent from "./components/ListComponent";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>

        <Header />
        <Routes>
          <Route element={<Homepage></Homepage>} path="/" />

          <Route element={<Login></Login>} path="login" />
          <Route element={<Signup />} path="signup" />
          <Route element={<AddComponent />} path="addcomponent" />
          <Route element={<ListComponent />} path="listcomponent" />
          <Route element={<Contact />} path="contact" />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

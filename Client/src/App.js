import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

import Cards from './components/cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About/About.jsx"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
const URL = 'http://localhost:3001/rickandmorty/login/';
//import characters from './data.js';

function App() {
   const location=useLocation();
   const navigate=useNavigate();
   
   const[characters, setCharacters]=useState([]);
   const [access, setAccess]=useState(false);

  async function login(userData) {
      try {
         const { email, password } = userData;
         const {data}=await axios(URL + `?email=${email}&password=${password}`);

         const { acces } = data;
         setAccess(acces);
         access && navigate('/home');
      
      } catch (error) {
         console.log(error.message);
      }
      
   }
   /*const login=(userData)=>{
      if(userData.email===email&&userData.password===password){
         setAccess(true);
         navigate("/home")
      }
   }*/

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   async function onSearch(id) {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

const onClose= (id) => {
   
   let newArray=characters.filter(char=>{
      return char.id!==id
   });
   setCharacters(newArray);
   
}

   return (
      <div className='App' style={{pading:"25px"}}>
         {
            location.pathname!=='/'
            ? <NavBar onSearch={onSearch}/>
            :null
         }
         
         <hr/>
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/detail/:detailId" element={<Detail/>} />
            <Route path="/Favorites" element={<Favorites/>}/>
         </Routes>
       </div>
   );
}

export default App;

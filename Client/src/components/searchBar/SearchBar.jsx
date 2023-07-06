import { useState } from "react";
import styles from "./SearchBar.module.css";


export default function SearchBar(props) {

   const [id, setId]=useState("");
   
   const hadleChange= e =>{
      const {value}=e.target;
      
      setId(value);
   }

   return (
      <div className={styles.container}>         
            <input onChange={hadleChange}
               type="search" name="search" id="search"/>
            <button onClick={()=>props.onSearch(id)}> Agregar</button> 
      </div>
   );
}

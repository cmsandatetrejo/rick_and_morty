import React from "react";
import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>   
         <div classname={styles.dataContainer}>
            <h2>Nombre {props.name}</h2>
            <h2>Status {props.status}</h2>
            <h4>Especie {props.species}</h4>
            <h4>Género {props.gender}</h4>
            <h4>Origen {props.origin}</h4>
         </div>
         
         <img className={styles.image} src={props.image} alt={props.name} /> 
      </div>
   );
}

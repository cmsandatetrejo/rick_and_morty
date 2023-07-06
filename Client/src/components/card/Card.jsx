import React from "react";
import styles from "./Card.module.css";
import {Link} from "react-router-dom";
import {addFav, removeFav} from '../../redux/actions';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';

function Card({onClose, id, name, status, species, gender, 
               origin, image, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav]=useState(false);

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         {
            isFav
             ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={styles.buttonContainer}>
            <button onClick={()=>onClose(id)}>X</button>
         </div>   
         <Link to={`/Detail/${id}`}>
            <div className={styles.dataContainer}>
               <h2>Nombre {name}</h2>
               <h2>Status {status}</h2>
               <h4>Especie {species}</h4>
               <h4>Género {gender}</h4>
               <h4>Origen {origin}</h4>
            </div>
            
            <img className={styles.image} src={image} alt={name} /> 
         </Link>
      </div>

   );
}

const mapStateToProps=(state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps=(dispatch)=>{
   return {
      addFav: (character) =>{dispatch(addFav(character))},
      removeFav:(id)=>{dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
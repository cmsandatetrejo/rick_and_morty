import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

export default function Detail(props){
    
    const {detailId }=useParams();
    const [character, setCharacter]=useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);

    return (
        <div>
            <Link to="/home">
                <button>Go Back</button>
            </Link>    
            <h1>Detail</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name}/>
            {character.origin && <h3>{character.origin.name}</h3>}
            
        </div>
    )
   
}
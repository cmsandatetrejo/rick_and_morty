
import Card from '../card/Card.jsx';

export default function Cards(props) {
   const {characters}=props;

   return (
   <div style={{display:"flex", justifyContent:'space-between'}}>
      {characters.map(character => (
         <Card 
            key={character.id}
            name={character.name} 
            status={character.status} 
            species={character.species}
            gender={character.gender}
            origin={character.origin.name} 
            image={character.image} 
        />
        ))}  
   </div>
   );
}

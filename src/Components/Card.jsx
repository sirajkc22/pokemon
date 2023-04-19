import React from "react";
import Card from 'react-bootstrap/Card';
const Cards = ({ pokemon, loading,infoPokemon}) => {
  
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                           
                            <Card   key={item.id} onClick={()=>infoPokemon(item)}>
                            <img  className="card_img" src={item.sprites.front_default} alt=""/>
      <Card.Body>
        <Card.Title>{item.id}</Card.Title>
        <Card.Text>
        {item.name}
        </Card.Text>
       
      </Card.Body>
    </Card>
                        </>
                    )
                })
        }

        </>
    )
}
export default Cards;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";

export default function CharacterCard(props) {
  const [character, setCharacter] = useState();
  const id = props.match.params.id;
  console.log(id)
  
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/0`)
      .then((res) => {
        setCharacter(res.data.result)
      }).catch((err) => {
        console.log(err)
      })
  }, [character]);

  const { name, image, status, species } = character;
  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  )
}



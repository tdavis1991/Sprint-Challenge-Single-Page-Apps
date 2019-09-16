import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function CharacterList() {
  const CustomDiv = styled.div`
    border: 1px solid black;
    margin: 10px;
    width: 45%;
    padding: 5px;
  `
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        setCharacter(res.data.results)
        console.log(res.data.results)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  const characters = character.map((list, index) => {
    return (
      <CustomDiv key={index}>
        <h3>{list.name}</h3>
        <img src ={list.image} />
        <p>{list.status}</p>
        <p>{list.species}</p>
      </CustomDiv>
    )
  })

  return <div className= "character-container">{characters}</div>;
}

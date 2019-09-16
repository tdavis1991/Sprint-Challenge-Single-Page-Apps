import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function LocationsList() {
    const CustomDiv = styled.div`
    border: 1px solid black;
    margin: 10px;
    width: 45%;
    padding: 5px;
  `
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
            .then((res) => {
            setLocation(res.data.results)
            console.log(res.data)
            }).catch((err) => {
            console.log(err)
            })
    }, [])

    const locations = location.map((list, index) => {
        return (
            <CustomDiv key={index}>
                <h3>{list.name}</h3>
                <p>{list.type}</p>
                <p>{list.dimension}</p>
            </CustomDiv>
        )
    })

    return <div className= "character-container">{locations}</div>;
}

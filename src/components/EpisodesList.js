import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function EpisodesList() {
    const CustomDiv = styled.div`
        border: 1px solid black;
        margin: 10px;
        width: 45%;
        padding: 5px;
    `

    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
            .then((res) => {
                setEpisode(res.data.results)
                console.log(res.data.results)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const episodes = episode.map((list, index) => {
        return (
                <CustomDiv key={index}>
                    <h3>{list.name}</h3>
                    <p>{list.air_date}</p>
                    <p>{list.episode}</p>
                </CustomDiv>
        )
    })

    return <div className= "character-container">{episodes}</div>
}
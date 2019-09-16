import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import LocationList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList.js";




export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/characters/:id" component={CharacterCard} />
      <Route path="/location" component={LocationList} />
      <Route path="/episodes"  component={EpisodesList} />
      {/* <TabNav /> */}
    </main>
  );
}

import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

    return (
        <div className="nav-container">
            <Link style={{margin: "30px", fontSize: "2rem"}} to="/">
                Home
            </Link>
            <Link style={{margin: "30px", fontSize: "2rem"}} to="/characters">
                Characters
            </Link>
            <Link style={{margin: "30px", fontSize: "2rem"}} to="/location">
                Locations
            </Link>
            <Link style={{margin: "30px", fontSize: "2rem"}} to="/episodes">
                Episodes
            </Link>
        </div>
    )
};

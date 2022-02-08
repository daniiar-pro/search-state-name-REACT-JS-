import React from "react";

const ListItem = (props) => {
    const {name, capital, abbr}=props
    return (
        <li>
            <h2>State name is {name} </h2>
            <h3> Capital is {capital} </h3>
            <p> Appbreviation {abbr} </p>
        </li>
    )
}
export default ListItem;
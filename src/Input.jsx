import React, { Component } from 'react';

const Input = (props) => {
   
    return <div>
        <label htmlFor="search">Search for state: </label>
        <input type="text"  id='search' placeholder='enter state name' onChange={props.handleChange} value={props.value} />
    </div>;
  
}
export default Input;
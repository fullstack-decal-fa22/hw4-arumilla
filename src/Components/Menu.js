import React from 'react';
import Color from './Color';

const Menu = (props) => { 
  return (
    <div className="colorOptions">
        <Color color="red" handleClick={() => props.createPost("red")}></Color>
        <Color color="pink" handleClick={() => props.createPost("pink")}></Color>
        <Color color="blue" handleClick={() => props.createPost("blue")}></Color>
        <Color color="green" handleClick={() => props.createPost("green")}></Color>
    </div>
  );
}

export default Menu;
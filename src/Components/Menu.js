import React from 'react';
/* Add any imports you think you might need here! */

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
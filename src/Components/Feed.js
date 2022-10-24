import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [blocks, setBlocks] = useState([])
    const posts = blocks.map((item, key) => <Block key={key} color={item}/>);

    return (
        <div>
            <Menu createPost={
                (color) => setBlocks((prev) => [color, ...prev])
            }/>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;
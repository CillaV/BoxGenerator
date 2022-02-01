import React from 'react';

const Display = (props) => {

    const  { boxList }  = props;

    return (
        <div>
            <h1>My Boxes</h1>
            {boxList.map((box, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'inline-block',
                            margin: '10px',
                            height: box.boxSize + 'px',
                            width: box.boxSize + 'px',
                            backgroundColor: box.boxColor
                        }}
                    >
                    </div>
                ))}
        </div>
    );
};

export default Display;
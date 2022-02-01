
import React, {useState} from 'react';
// import '../App.css'

const Form = (props) => {

// curly braces -- not brackets
const { boxList, setBoxList } = props;

    // // color
    const [ boxColor, setBoxColor ] = useState("");
    // size
    const [ boxSize, setBoxSize ] = useState("");
    // array
    // const [ boxList, setBoxList ] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault();

        setBoxList([...boxList, {boxColor, boxSize}])

        // resets the inputs for boxColor and boxSize
        setBoxColor("")
        setBoxSize("")


    }

    return (
        
        <div>
            
            <form onSubmit={submitHandler}>
                <p>
                    <label>Color: </label>
                    <input onChange={ (e) => setBoxColor(e.target.value)} type="text" value={boxColor} placeholder='Pick a color, any color.'/>
                </p>

                {/* added bonus */}
                {boxColor.length > 0 && boxColor.length < 3 ? <p>Must be at least 3 characters.</p> : null}

                <p>
                    <label>Size: </label>
                    <input  onChange={ (e) => setBoxSize(e.target.value)} value={boxSize} type="number" min="1" placeholder="Pick a number."  />
                </p>

                {/* added bonus */}
                {boxSize.length > 0 && boxSize < 1 ? <p>Please enter a number.</p> : null}


                <button>Create Box</button>

                {/* added bonus */}
                {/* create where button is disabled until form is filled out */}

            </form>


            {/* <div>
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
            </div> */}

        </div>
    );
};

export default Form;
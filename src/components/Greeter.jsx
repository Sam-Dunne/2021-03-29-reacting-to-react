import React from 'react';

const Greeter = props => {

   

    return (
        <>
            <h2>
                {props.salutation} I'm {props.name}
            </h2>
           
        </>
    );
}

export default Greeter;
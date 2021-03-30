import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter'


const App = () => {
    // useState hook for username initially set to empty string
    const [username, setUsername] = useState('');
    // func called onChange of input element which updates the state of setUsername and thus username
    const getUsername = e => setUsername(e.target.value);

     // useState hook for "loaded" initially set to false
    const [loaded, setLoaded] = useState(false);
    //  changes "loaded" from false to true
    const loadNow = () => {
        setLoaded(true);
    }

    // useEffect:  This hook will set up a timer, that after 4 seconds, 
    // will toggle the loaded state if the button hasn't been clicked yet.
    useEffect(() => {
        setTimeout(() => {
            loadNow()
        }, 4000);
    }, [loaded]);

    // conditional render:  if "loaded" is falsey display page loading, else render 3 Greeters, input, and para
    if (loaded === false) {
        return (
            <div className="container d-flex flex-column align-items-center bg-light h-100" style={{ minHeight: '100vh' }}>
                <h1 className="text-center mt-5">Webpage loading...</h1>
                {/* button click toggles the "loaded" state from false to true */}
                <button onClick={loadNow} className="mx-auto btn-lg mt-4 btn btn-danger">Do it NOWWW!</button>
                <img className="img-thumbnail shadow-lg mt-3" style={{ maxHeight: "65vh", width: '65vh' }} src="https://image.winudf.com/v2/image/bmphYWguYXJub2xkLmdldHRvdGhlY2hvcHBlcl9zY3JlZW5fMF8zeXNmNmNsYQ/screen-0.jpg?fakeurl=1&type=.jpg" alt="Arnie's O-Face" />
            </div>);
    }
    return (
        <>
            {/* sends 3 Greeter components to be rendered by index.js, passing in props to Greeter.jsx */}
            <Greeter salutation='Yo, yo, yo, ' name='Sam' />
            <Greeter salutation='Hi there' name='Matt Landers' />
            <Greeter salutation='What it is, what it do? ' name='a pimp named Slickback. You gotta say the whole thang...like A Tribe Called Quest' />
            {/* Controlled React Input: changes to <input> update state and username*/}
            <input type="text" value={username} onChange={getUsername} />
            {/* values of input field are added to paragraph as state is updated */}
            <p>You are logging in as: {username}</p>
        </>
    )
};

export default App;
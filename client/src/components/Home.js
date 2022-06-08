import React, { useState, useEffect } from 'react'

function Home() {
    const [show, setShow] = useState(true)

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false)
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    // If show is false the component will return null and stop here
    if (!show) {

        return null;
    }
    return (
        <div className="page">
            <header className="App-header">
                <p>
                    Welcome, warrior.
                </p>
            </header>
        </div>
    )
}

export default Home
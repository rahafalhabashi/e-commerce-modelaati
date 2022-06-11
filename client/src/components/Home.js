import React, { useState, useEffect } from 'react'
import ProductsList from './ProductsList';

function Home({cart, products}) {
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
        return <ProductsList cart={cart} products={products} />

        // return null; 
    }
    return (
        <div className="page">
            <header className="App-header">
                <p>
                    Welcome, warrior.
                </p>
            </header>

            <div className='App-header'>

            </div>
        </div>
    )
}

export default Home
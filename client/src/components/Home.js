import React, { useState, useEffect } from 'react'
import ProductsList from './ProductsList';

function Home({user, cart, setCart, products}) {
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
        return <ProductsList cart={cart} products={products} setCart={setCart} />

        // return null; 
    }
    // console.log(user.name)
    return (
        <div className="page" align="center">
            <header >
                <p className="welcome">
                Welcome, Warrior.
                </p>
            </header>

            {/* <div className='App-header'>

            </div> */}
        </div>
    )
}

export default Home
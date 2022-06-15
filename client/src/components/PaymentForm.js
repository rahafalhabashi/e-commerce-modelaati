import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "c4f0ff",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {color: "purple"},
            "::placeholder": {color: "#87bbfd"}
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 1000,
                    id
                })
                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }
            }
            catch (error) {
                console.log("Error", error)
            }
        }
        else {
            console.log(error)
        }
    }

    return (
        <div>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">

                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button className='form-button' align='right'>Pay</button>
                </form>
                :
                <div>
                    <h2>We hope you enjoy your new order!</h2>
                </div>
        }
        </div>
    )
}

export default PaymentForm
import React from 'react';

import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton =({price})=>{
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51JHMrHSJyHH2EBLokU5CrVbXkpHmWE65g5klWL3wTR3fZobXyc5mPxnAumXA0sxmu5Jsr80Y1nmRZeC1CmmUQS0x000VpVV233';


    const onToken =token =>{
        console.log(token);
        alert('payment Sucessfully')
    }

    return (

        <StripeCheckout
        
        
        label='Pay Now'
        name='CRP Clothing'
        billingAddress
        shippingAddress
        image='https://drive.google.com/file/d/14wvo2gPlQdL7ARfldGpwC5N_nd3qWecq/view?usp=sharing'
        description={`your Total is INR${price}`}
        amout ={priceForStripe}
        panelLabel ='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
        
        );
};


export default StripeCheckoutButton;
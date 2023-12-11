import React, { useEffect, useRef } from 'react';

function TransactionHistory() {
        
    const  paypal = useRef();
    useEffect(()=> {
        window.paypal.Buttons({
            createOrder:(data,actions, err)=>{
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: 'cool looking table',
                            amout: {
                       currency_code: "US",
                       value: 650.00
                            }
                        }
                    ]
                })
            },
            onApprove: async(data , actions)=> {
                const order = await actions.order.capture();
                console.log(order)
            },
            onError: (err) =>{
                console.log(err)
            }
        })
        .render(paypal.current)
    }, []);

      return (
        <div>
        <div> ref={paypal}</div>
        </div>
      );
    
}

export default TransactionHistory;

import React from 'react';
import Heroinelist from '../Heroine-list/Heroinelist';
import "./Cart.css"

const Cart = (props) => {


    const { cart } = props;

    let total = 0;

    const HeroineName = [];


    let count = 0;
    for (const heroine of cart) {


        if (HeroineName.indexOf(heroine.name) !== -1) {

        }
        else {
            HeroineName.push(heroine.name);
            total = total + parseInt(heroine.salary);
            count++;
        }
    }




    return (
        <div className="cart">
            <h4> <span className="title-cart">Heroine Added:</span> {count} </h4>
            <h6> <span className="title-cart">Total Cost:</span> ${total}</h6>
            <h6> <span className="title-cart">List Of Added Heroine:</span> </h6>
            {
                HeroineName.map(heroine =>

                    <Heroinelist key={heroine} heroine={heroine}></Heroinelist>

                )
            }

        </div>
    );
};

export default Cart;
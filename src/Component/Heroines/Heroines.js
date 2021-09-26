import React, { useEffect, useState } from 'react';
import HeroineInfo from '../HeroineInfo/HeroineInfo';
import Cart from '../Cart/Cart';
import "./Heroines.css"

const Heroines = () => {

    const [heroines, setHeroines] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('/package.json')
            .then(res => res.json())
            .then(data => setHeroines(data))
    }, [])

    const eventhandler = (heroine) => {
        const newCart = [...cart, heroine];
        setCart(newCart)
    }
    return (
        <div className="main">
            <div className="heroine-info">
                {
                    heroines.map(heroine => <HeroineInfo
                        key={heroine.name}
                        eventhandler={eventhandler}
                        heroine={heroine}
                    ></HeroineInfo>)
                }
            </div>
            <div className="heroine-cost">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Heroines;
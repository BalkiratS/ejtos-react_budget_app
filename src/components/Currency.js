import React from 'react'
//import { AppContext } from '../context/AppContext';

const Currency = () => {
    return (
        <div>
            <select className="custom-select" id="currencySelect">
                    <option defaultValue>Currency</option>
                    <option value="Dollar" name="dollar">$ Dollar</option>
                    <option value="Pound" name="pound">£ Pound</option>
                    <option value="Euro" name="euro">Euro</option>
                    <option value="Ruppee" name="ruppee">Ruppee</option>
                  </select>
        </div>
    )
}

export default Currency;
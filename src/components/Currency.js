import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const currChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-info'>
            <span>Currency </span>
            <select className="custom-select" style={{backgroundColor: 'lightblue', width: '100px', marginLeft: '15px'}} onChange={currChange}>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound" selected>£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="rupee">₹ Rupee</option>
                  </select>
        </div>
    )
}

export default Currency;
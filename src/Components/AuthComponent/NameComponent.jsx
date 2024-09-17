import { useState } from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import { useApp } from '../../Context';

const NameComponent = ({ handleNameComponentClose }) => {
    const user = useApp();
    const [text, setText] = useState(null);

    const handleClick = async (e) => {
        e.preventDefault();
        await user.appUpdateName(text);
        handleNameComponentClose();
    }
    return (
        <>
            <div className='create-popup-screen'>
                <div className='containerAuth-wrapper'>
                    <div className='name-input-popup'>
                        <form action="#">
                            <h1>Enter Full Name</h1>
                            <input type="text" placeholder="Full Name" value={text} onChange={(e) => setText(e.target.value)} required />
                            <button onClick={handleClick}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

NameComponent.propTypes = {
    handleNameComponentClose: PropTypes.func
};

export default NameComponent
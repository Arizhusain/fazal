import React, { useState } from 'react'

const SizeBox = ({ item, size, onSizeSelect }) => {
    return (
        <>
            <li>
                <button className='size-placeholder-button' style={{ backgroundColor: (size === item) ? '#bb4d4d' : 'white' }} onClick={() => onSizeSelect(item)}>
                    <div className='size-placeholder' style={{ color: (size === item) ? 'white' : 'black' }}>
                        {item}
                    </div>
                </button>
            </li>
        </>
    )
}

export default SizeBox
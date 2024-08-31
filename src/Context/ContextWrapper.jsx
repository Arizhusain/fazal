import React, { useState } from 'react'
import { AppContext } from '.'

const ContextWrapper = ({ children }) => {
    const initialState = {
        addressData: []
    }
    const [data, setData] = useState(initialState);
    return (
        <AppContext.Provider value={{ data, setData }} >
            {children}
        </AppContext.Provider>
    )
}

export default ContextWrapper
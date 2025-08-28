import  { useState, useEffect } from 'react'

export default function useBase64Encode(defaultValue = '') {
    const [value, setValue] = useState(btoa(defaultValue))

    const encodeValue = (e) => {
        if (e) {
            // btoa() Encodes String to Base64
            setValue(btoa(e.target.value))
        }
    }

    const decodeValue = (e) => {
        if (e) {
            // atob() Encodes Base64 to String
            setValue(atob(e.target.value))
        }
    }
    return [value, encodeValue]
}


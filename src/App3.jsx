import React, { useCallback, useState, useEffect, useRef } from 'react'

const App3 = () => {
    const [len, setLen] = useState(8)
    const [num, setNum] = useState(false)
    const [char, setChar] = useState(false)
    const [password, setPassword] = useState("")
    const passwordRef = useRef(null)

    const generatePassword = useCallback(() => {
        const lower = "abcdefghijklmnopqrstuvwxyz"
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const numbers = "0123456789"
        const symbols = "!@#$%^&*()_+[]{}|;:,.<>?`~"

        let characters = lower + upper
        if (num) characters += numbers
        if (char) characters += symbols

        let pass = ""
        for (let i = 0; i < len; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            pass += characters[randomIndex]
        }

        setPassword(pass)
    }, [len, num, char])

    // useEffect to generate password when len, num or char changes
    useEffect(() => {
        generatePassword()
    }, [len, num, char])

    return (
        <div className='w-full max-w-md mx-auto px-4 py-8 bg-grey-300 text-orange-500'>
            <div className='flex'>
                <input
                    type="text"
                    value={password}
                    ref={passwordRef}
                    readOnly
                    placeholder='Generated Password'
                    className='w-full px-4 py-2 rounded-md bg-grey-800 text-orange-500'
                />
                <button className='px-4 py-2 bg-slate-400 rounded-md text-white'
                    onClick={() => {
                        window.navigator.clipboard.writeText(password)
                        passwordRef.current.select();
                          
                    }}
                >Copy</button>
            </div>
            <div>
                <input type="range"
                    min={8}
                    max={100}
                    className='cursor-pointer'
                    value={len}
                    onChange={(e) => setLen(e.target.value)}
                />
                <span className='text-orange-500'>Length: {len}</span>
            </div>
            <div>
                <input type="checkbox"
                    checked={num}
                    onChange={(e) => setNum(!num)}
                    className='cursor-pointer'
                />
                <span className='text-orange-500'>Include Numbers</span>
            </div>
            <div>
                <input type="checkbox"
                    checked={char}
                    onChange={(e) => {
                        setChar(e.target.checked)
                    }}
                    className='cursor-pointer'
                />
                <span className='text-orange-500'>Include Characters</span>
            </div>
        </div>
    )
}

export default App3
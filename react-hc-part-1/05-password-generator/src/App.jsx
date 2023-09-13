import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber ] = useState('false'); 
  const [CharAllowed, setCharAllowed] = useState('false');
  const [passowrd, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''; 
    let Str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    
    if(numberAllowed) Str += '0123456789'; 
    if(CharAllowed) Str += '!@#$%^&*(){}[]_+=';
    
    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * Str.length + 1); 
      pass += Str.charAt(char); 
    }

    setPassword(pass); 

  }, [length, numberAllowed, CharAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, CharAllowed, passwordGenerator]) 

  // ref hook
  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3); // for more optimization
    window.navigator.clipboard.writeText(passowrd)
  }, [passowrd])

  return (

    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
      px-4 py-2 my-8 text-orange-500 bg-gray-800'>

        <h1 className='text-white text-center'>Password generator</h1>

        <div className='flex shadow rounded-xl overflow-hidden mb-4'>

          <input 
            type="text" 
            value={passowrd} 
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button  
          onClick={copyPassword}
          className='ouline-none bg-blue-600 text-white px-3 py-1 shrink-0'>
            COPY
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={CharAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>

      </div>
    </>

  )

}

export default App
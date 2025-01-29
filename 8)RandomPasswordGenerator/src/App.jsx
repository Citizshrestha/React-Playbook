import { useState, useCallback, useEffect, useRef  } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numberAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*()~';

    
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])
  
  return (
          <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700">
          <h1 className="text-white text-center">Password Generator</h1>
         <div className="flex  shadow rounded-lg overflow-hidden mb-4">
            <input className="outline-none w-full py-2 px-3 m-2 rounded"
             type="text"
             value={password}
            placeholder="Password"
            readOnly 
            ref={passwordRef}
            />
           <button
           onClick={copyPasswordToClipboard } 
           className="text-black bg-violet-600 px-3  outline-0 shrink-0 py-0.5 rounded-lg active:scale-90">Copys</button> 
         </div>
         <div className="flex text-sm gap-x-1">
              <div className="flex items-center gap-x-.5">
                <input
                 min={8}
                 max={100}
                 value={length}
                 type="range"
                 className="cursor-pointer "
                 onChange={(e) => setLength(e.target.value)}
                 />
                 <label>
                    Length: {length}
                 </label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox"
                defaultChecked={numberAllow}
                id="numberInput"
                onChange={()=>{
                  setNumberAllow((prev)=> !prev);
                }} />
                <label>Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox"
                defaultChecked={charAllow}
                id="numberInput"
                onChange={()=>{
                  setCharAllow((prev)=> !prev);
                }} />
                <label>Special Chars</label>
              </div>
          
         </div>
      </div>
   
  );
};

export default App;

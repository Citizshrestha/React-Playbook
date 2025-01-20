import { useState } from "react"

const App = () => {
  const [color, setColor] = useState('cyan')
  return (
    <div style={{backgroundColor: color}} className=" text-white h-screen w-full relative   ">
       <div className="colorList h-20 w-[55%] rounded-3xl absolute bottom-[5%] left-[25%] " style={{backgroundColor:"slategray"}}>
        <div className="colors flex items-center justify-between  ">
           <button
           onClick={()=>setColor('red')}
           className="text-black text-2xl px-4 py-2 m-4 rounded-2xl " style={{backgroundColor:"red"}}>
            Red
           </button>
           <button
           onClick={()=>setColor('green')}
           className="text-black text-2xl px-4 py-2 m-4 rounded-2xl " style={{backgroundColor:"green"}}>
             Green
           </button>
           <button
           onClick={()=> setColor('blue')}
           className="text-black text-2xl px-4 py-2 m-4 rounded-2xl " style={{backgroundColor:"blue"}}>
             Blue
           </button>
           <button
           onClick={()=> setColor('yellow')}       
           className="text-black text-2xl px-4 py-2 m-4 rounded-2xl " style={{backgroundColor:"yellow"}}>
             Yellow
           </button>
           <button
           onClick={()=> setColor('orange')}       
           className="text-black text-2xl px-4 py-2 m-4 rounded-2xl " style={{backgroundColor:"orange"}}>
             Orange
           </button>
           <button
           onClick={()=> setColor('purple')}       
           className="text-black text-2xl px-4 py-2 m-4 rounded-2xl " style={{backgroundColor:"purple"}}>
             Purple
           </button>
        </div>
       </div>
    </div>
  )
}

export default App
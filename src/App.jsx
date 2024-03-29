import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('black');
 
  
  return (
    <div id='bg' style={{backgroundColor : color}} className=' flex  flex-wrap content-end justify-center h-screen w-full bg-green-400'>
      <div className='flex flex-wrap content-center justify-center  h-19 w-9/12 mb-10 p-3 rounded-lg bg-white'>

<button  onClick={()=> setColor('red')} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-red-400 bg-red-600 text-yellow-50' >Red</button>
<button  onClick={()=> setColor('yellow')}  className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-yellow-300 bg-yellow-400 text-yellow-50' >Yellow</button>
<button  onClick={()=> setColor('blue')}  className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-blue-400 bg-blue-800 text-yellow-50' >Blue</button>
<button  onClick={()=> setColor('orange')} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-orange-400 bg-orange-500 text-yellow-50' >Orange</button>
<button onClick={()=> setColor('green')}  className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-green-400 bg-green-800 text-yellow-50' >Green</button>
<button  onClick={()=> setColor('purple')} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-purple-400 bg-purple-600 text-yellow-50' >Purple</button>
<button  onClick={()=> setColor('cyan')} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-cyan-300 bg-cyan-400 text-yellow-50' >Cyan</button>

   </div>
  </div>
  
  )
}

export default App

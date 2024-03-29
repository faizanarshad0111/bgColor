import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('black');
 
  
  return (
    <div id='bg' style={{backgroundColor : color}} className=' flex  flex-wrap content-end justify-center h-screen w-full bg-green-400'>
      <div className='flex flex-wrap content-center justify-center  h-16 w-9/12 mb-4 rounded-lg bg-white'>

<button  onClick={()=> setColor('red')} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-red-500 bg-red-900 text-yellow-50' >Red</button>
<button  onClick={()=> setColor('yellow')}  className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-yellow-500 bg-yellow-900 text-yellow-50' >Yellow</button>
<button  onClick={()=> setColor('blue')}  className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-blue-500 bg-blue-900 text-yellow-50' >Blue</button>
<button  onClick={()=> setColor('orange')} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-orange-500 bg-orange-900 text-yellow-50' >Orange</button>
<button onClick={()=> setColor('green')}  className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-green-500 bg-green-900 text-yellow-50' >Green</button>
<button  onClick={()=> setColor('purple')} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-purple-500 bg-purple-900 text-yellow-50' >Purple</button>
<button  onClick={()=> setColor('cyan')} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-cyan-500 bg-cyan-900 text-yellow-50' >Cyan</button>


{/*  Method 2 with onclick function with id of main element
<button onClick={()=>{ document.querySelector('#bg').style.backgroundColor = 'red'}} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-red-500 bg-red-900 text-yellow-50' >Red</button>
<button onClick={()=>{ document.querySelector('#bg').style.backgroundColor = 'yellow'}} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-yellow-500 bg-yellow-900 text-yellow-50' >Yellow</button>
<button onClick={()=>{ document.querySelector('#bg').style.backgroundColor = 'blue'}} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-blue-500 bg-blue-900 text-yellow-50' >Blue</button>
<button onClick={()=>{ document.querySelector('#bg').style.backgroundColor = 'orange'}} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-orange-500 bg-orange-900 text-yellow-50' >Orange</button>
<button onClick={()=>{ document.querySelector('#bg').style.backgroundColor = 'green'}} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-green-500 bg-green-900 text-yellow-50' >Green</button>
<button onClick={()=>{ document.querySelector('#bg').style.backgroundColor = 'purple'}} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-purple-500 bg-purple-900 text-yellow-50' >Purple</button>
<button onClick={()=>{ document.querySelector('#bg').style.backgroundColor = 'cyan'}} className=' text-lg px-9 py-2 rounded-xl m-1 font-bold hover:bg-cyan-500 bg-cyan-900 text-yellow-50' >Cyan</button> */}


   </div>
  </div>
  
  )
}

export default App

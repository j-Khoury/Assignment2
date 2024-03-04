import React, { useEffect, useState } from 'react'

export default function SearchBar() {
 

  // hooks functions built in with react ;
  // useState
  const count = 0;
  const setCount = () => count++;
  // const [constName, function] = useState(defaultValue)
  // const [count, setCount] = useState(0);

  
 const [style, setStyle] = useState({
   padding: '3px',
   backgroundColor: 'black' 
 })

  // useEffect
  // * when redering (onReload, onUpdate) it's work
  // * startign after install all the design
  useEffect(() => {
    console.log("hello")
  }, [])
  
  console.log("hello 2")


  return (
    <div>
      
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>  

        <div>
            <input style={style} type="text" placeholder='enter your name..' />
        </div>
        <div>
            <input type="checkbox" name="check" id="check" />
            <span style={{color: 'green', textWeight: 900}}>
                Only show products in stock
            </span>
            <button onClick={()=> setStyle({
              padding: '3px',
            backgroundColor: 'red' 
            })}>
              check</button>
        </div>
    </div>
  )
}

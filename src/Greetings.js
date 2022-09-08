import React, { useState } from 'react'

const Greetings = () => {
    const [changedtext, SetChangedtext] = useState(false)
    
    const ChangeTextHandeler = () => {
        SetChangedtext(true)
    }

  return (
   <div>
        <h2>Hello World</h2>
        {!changedtext && <p>It's good to see you</p>} 
       {changedtext && <p>Changed!</p>}
        <button type='button' onClick={ChangeTextHandeler}>Change Text</button>
   </div>
  )
}

export default Greetings
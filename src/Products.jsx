import React, { useState } from 'react'

function Products({naam, data}) {
   const [a, b]= useState(true);
  return (
    <div>
      <h1>{naam}</h1>
      <h2>{data.age}</h2>
      <h4>{a === false ? "hello" : "hey"}</h4>
      <button onClick={()=>b(!a)}>Change</button>
    </div>
  )
}

export default Products

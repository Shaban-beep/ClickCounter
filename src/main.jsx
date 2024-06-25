import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom React !</h1>
//     </div>
//   )
// }
// const anotherElem = (
  // <a href="https://google.com" target='_target'>Visit google</a>
// )
// const ReactElement = {
//   type: 'a',
//   prop: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
// const anotherUser = "chai aur react"
// const ReactElement = (  // ye react element banany ka tarika he
//   'a',
//   {href: 'https://google.com',target: '_blank' },
//   'click me to visit google'
  // anotherUser,
  // anotherElem
// )
// const anotherElem = (
//   <a href="https://google.com" target='_target'>Visit google</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

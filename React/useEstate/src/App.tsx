import { useState } from "react"

  export default function App() {
    const[texto,setTexto]=useState(' ')
    return (
      <>
      <input type="text" value={texto} onChange={(e)=>setTexto(e.target.value)}/>
      <button onClick={() => alert(texto)}>mostrar texto</button>
      <p>
        el texto es {texto}
      </p>

      </>
    )
  }

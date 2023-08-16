import React from 'react'
import { useState } from 'react'
import './Card.css'

export const Card = () => {


    const [cancion, setCancion] = useState({
      name: '',
      artist: '',
      cliente: ''
      
  })



  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      if(cancion.name.length > 2 && cancion.artist.length > 5){
          setShow(true)
          setError(false)
      } else {
          setError(true)
          setShow(false)
      }
  }

  console.log(cancion)
return (
  <form className="formulario" onSubmit={handleSubmit}>
      <div>
        <label >Nombre de la Canción: </label> <br/>
        <input type="text" onChange={(e) => setCancion({...cancion, name: e.target.value})}/>
      </div>
     <div>
        <label >Cantante o Agrupación: </label> <br/>
        <input type="text" onBlur={(e) => setCancion({...cancion, artist: e.target.value})}/>
     </div>
     <div>
        <label >Tu nombre es: </label> <br/>
        <input type="text" onBlur={(e) => setCancion({...cancion, cliente: e.target.value})}/>
     </div>

    <button>Enviar</button>

      {error && <h6 className='error' >Por favor chequea que la información sea correcta</h6>}

      {show ? <>
          
          <p className='ook'>
            <h3>Hola {cancion.cliente}!</h3>
            en minutos reproduciremos tu cancion: <br/> {cancion.name}</p>
          
          
      </>
      : null
      }

  </form>
)


}

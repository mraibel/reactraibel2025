import React from 'react'
import PostIt from './PostIt'

export default function ListaPostIt({ lista, setPostIts }) {

  const eliminarPostIt = (id) => {
    setPostIts((prev) => {
      return prev.filter((postit) => postit.id !== id)
    })
  }

  return (
    <section>
      <ul className='row lista-post-it'>
        {
          lista.map((postit, index) => {
            return <PostIt key={index} postit={postit} eliminarPostIt={eliminarPostIt} />
          })
        }
      </ul>
    </section>
  )
}

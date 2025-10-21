import React, { useRef } from 'react'

export default function Input({ setPostIts }) {

    const inputTitulo = useRef()
    const inputDescripcion = useRef()

    const agregarPostIt = () => {
        const inputTituloTexto = inputTitulo.current.value
        const inputDescripcionTexto = inputDescripcion.current.value

        setPostIts((prevPostIts) => {
            const nuevoPostIt = { titulo: inputTituloTexto, descripcion: inputDescripcionTexto }
            inputTitulo.current.value = ''
            inputDescripcion.current.value = ''
            return [...prevPostIts, nuevoPostIt]
        })
    }

    return (
        <section className='my-3 d-flex gap-2'>
            <input ref={inputTitulo} className='form-control' type="text" placeholder='Título' />
            <input ref={inputDescripcion} className='form-control' type="text" placeholder='Descripción' />
            <button className='btn btn-dark' onClick={agregarPostIt}>Agregar</button>
        </section>
    )
}

import React, { Fragment } from 'react'

export default function PostIt({ postit, eliminarPostIt }) {
    return (
        <li className="col-xs-12 post-it">
            <div>
                <i className='bi bi-trash' onClick={() => eliminarPostIt(postit.id)}></i>
                <h2>{postit.titulo}</h2>
                <p>{postit.descripcion}</p>
            </div>
        </li>
    )
}

import React, { Component } from 'react'
import NoteCard from '../NoteCard'
import './estilo.css'

class NoteList extends Component {
    render() {
        return (
            <ul className='note-list'>
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className='note-list_item' key={index}>
                            <NoteCard titulo={ nota.titulo } text={ nota.texto } />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NoteList
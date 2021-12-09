import React, { Component } from 'react'
import NoteCard from '../NoteCard/NoteCard'
import './estilo.css'

class NoteList extends Component {
    render() {
        return (
            <ul className='note-list'>
                {Array.of('Trabalho', 'Trabalho', 'Estudo').map((categoria, index) => {
                    return (
                        <li className='note-list_item' key={index}>
                            <div>{ categoria }</div>
                            <NoteCard />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NoteList
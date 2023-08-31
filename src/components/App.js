import React, {useState} from 'react';
import {Note} from './Note';

// Реализовать интерфейс заметок
// По кнопке + заметки должны добавляться
// Поле ввода должно очищаться после добавления
// Заметки должны хранится в стейте компонента
// Note - компонент одной заметки
// Заметки могут быть с одинаковыми названиями
// Заметки должны удалятся по клику на Note
// Заметки должны быть отсортированы по алфавиту
// Количество заметок должно быть подсчитано в header

export const App = () => {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('')
    let nextKeyId = 0;
    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const addNote = () => {
        setNotes([...notes, input].sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0))
        setInput('');
    }

    const deleteNote = (index) => {
        setNotes(notes.filter((el, ind) => ind !== index))
    }
    return (
        <>
            <div className="header">Notes list, total {notes.length}</div>
            <div className="container">

                <div className="btn" onClick={addNote}>
                    +
                </div>
                <input
                    type="text"
                    onChange={handleInput}
                    value={input}
                    className="textInput"
                    autoFocus
                />
                {notes.map((note, index) => {
                    const key = `note-${nextKeyId++}`;
                    return <Note onClick={() => deleteNote(index)} key={key} item={note}></Note>
                })}
            </div>
        </>
    );
};


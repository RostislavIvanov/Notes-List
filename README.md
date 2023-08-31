# Тестовое задание 
## Техническое задание
Стек: React, JavaScript
<ul>
<li>Реализовать интерфейс заметок</li>
<li>По кнопке `+` заметки должны добавляться</li>
<li>Поле ввода должно очищаться после добавления</li>
<li>Заметки должны хранится в стейте компонента</li>
<li>Note - компонент одной заметки</li>
<li>Заметки могут быть с одинаковыми названиями</li>
<li>Заметки должны удалятся по клику на Note</li>
<li>Заметки должны быть отсортированы по алфавиту</li>
<li>Количество заметок должно быть подсчитано в header</li>
</ul>

## Разворачивание
1. Склонировать репозиторий
2. Выполнить `npm install` в консоли в корневой директории репозитория
3.  Стартовать проект с помощью `npm start`

## Разработка
1. Сначала создал стейт для инпута
```javascript
    const [input, setInput] = useState('')
```
2. Сделал его управляемым
```javascript
    const handleInput = (event) => {
        setInput(event.target.value)
    }

    <input type="text" onChange={handleInput} value={input} className="textInput" autoFocus />
```
3. Сделал стейт для заметок и добавил фукнцию добавления заметки со встроенной сортировкой в алфавитном порядке
```javascript
    const [notes, setNotes] = useState([]);

    const addNote = () => {
        setNotes([...notes, input].sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0))
        setInput('');
    }
```
4. Добавил функционал добавления заметки
```javascript
    <div className="btn" onClick={addNote}>
        +
    </div>
```
5. Добавил список заметок, который рендерится с помощью метода массива `map`
```javascript
    {notes.map((note, index) => {
        const key = `note-${nextKeyId++}`;
        return <Note onClick={() => deleteNote(index)} key={key} item={note}></Note>
    })}
```
6. Функционал удаления заметки по нажатию на неё
```javascript
     const deleteNote = (index) => {
            setNotes(notes.filter((el, ind) => ind !== index))
     }
```
7. Подсчет заметок сделал с помощью длины массива notes
```javascript
    <div className="header">Notes list, total {notes.length}</div>
```
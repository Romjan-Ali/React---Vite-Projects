import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import NoteList from './components/NoteList';
import {nanoid} from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      Date: '15/04/2021'
    },
    {
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		},
  ]);

  
  const [searchText, setSearchText] = useState('');
  
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('notesData')
    );
    if(savedNotes){
      setNotes(savedNotes);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'notesData', 
      JSON.stringify(notes)
    );
  }, [notes]);
    
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => (
      note.id !== id
    ));
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={ setDarkMode } />
        <Search handleSearchNote={ setSearchText } />
        <NoteList
          notes={ 
            notes.filter((note) => (
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )) 
          }
          handleAddNote={ addNote }
          handleDeleteNote={ deleteNote }
        />
      </div>
    </div>
  );
};

export default App;

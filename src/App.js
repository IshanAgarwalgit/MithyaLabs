import { useState } from 'react';
import './App.css';
import AddEdit from './Components/AddEdit.js';

function App() {

	const initialFormState = { id: null, name: '', age: '', gender: '' }

	// Setting state
	const [ users, setUsers ] = useState([])
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  return (
    <div className="App">
      <AddEdit/>
    </div>
  );
}

export default App;

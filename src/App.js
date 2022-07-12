import { useState } from 'react'
import './App.css'
import './Table/Table.css'

import { Button } from './Button/Button'
import { Table } from './Table/table'

function App() {

  const [ usersArray, setUsersArray ] = useState(() => [])

  function loadData(text){
    fetch('https://jsonplaceholder.typicode.com/todos/')  .then(response => response.json())
    .then(json => {
      setUsersArray(json)
      console.log(usersArray)
    })
  }

  return (
    <div>
      <div className="App">
        <h1>Guests List</h1>
        
        <Button func={() => loadData('Bla')} text='Load data' />

        <Table id='users_table' users={usersArray}></Table>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Task/Task-1';
import FormHandling from './Task/Task-2';
import ConditionalRendering from './Task/Task-3';
import ListRendering from './Task/Task-4';
import FetchUsers from './Task/Task-6';
import SearchBar from './Task/task-7';
import CrudApp from './Task/Task-8';
import ToDoList from './Task/Task-8';
import FetchAPI from './Task/Task-9';
import SearchUsers from './Task/Task-10';
import CrudComplete from './Task/Task-11';

function App() {
  let Name = "Snehal";

  return (
   <div>
      {/* <h2>Welcome {Name}</h2> */}
      {/* <FetchData/>
      <Counter/>
      <FormHandling/>
      <ConditionalRendering/>
      <ListRendering/> */}
      {/* <FetchUsers/> */}
      {/* <SearchBar/> */}
      {/* <CrudApp/> */}
      {/* <ToDoList/> */}
      {/* <FetchAPI/> */}
      {/* <SearchUsers/> */}
      <CrudComplete/>



   </div>
  )
}

export default App

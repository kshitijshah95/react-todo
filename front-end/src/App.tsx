import {useState, useEffect} from 'react';

import Container from '@material-ui/core/Container';
import TodoList from './components/TodoList';
import { TodoItemInterface } from './interfaces';

const data = [
  {
    id: 0,
    value: 'Task 1',
    status: 'Completed'
  },
  {
    id: 1,
    value: 'Task 2',
    status: 'Incomplete'
  },
  {
    id: 2,
    value: 'Task 3',
    status: 'Incomplete'
  },
  {
    id: 3,
    value: 'Task 4',
    status: 'Incomplete'
  },{
    id: 4,
    value: 'Task 5',
    status: 'Incomplete'
  }
]

const App = () => {
  const [todoList, setTodoList] = useState(data);

  const addTodoItem = (todoItem: TodoItemInterface) =>{
    // Post new Item
    console.log('Posting new Item...');
    
    setTodoList([...todoList, todoItem]);
  }

  const updateTodoItem = (todoItem: TodoItemInterface) => {    
    // Patch updated Item
    console.log('Patching updated Item...');
    
    const tempTodoList = todoList.map((item: TodoItemInterface) => {
      if(item.id === todoItem.id) return todoItem; 
      return item;
    })
    setTodoList(tempTodoList)
  }

  const deleteTodoItem = (todoItem: TodoItemInterface) => {
    // Delete Item
    console.log('Deleteing Item...');
    
    const tempTodoList = todoList.filter((item: TodoItemInterface) => item.id !== todoItem.id)
    setTodoList(tempTodoList);
  }

  return (
        <Container maxWidth="sm" style={{marginTop: '50px'}}>
          <TodoList todoList={todoList} updateTodoItem={updateTodoItem} deleteTodoItem={deleteTodoItem} addTodoItem={addTodoItem}/>
        </Container>
  );
}

export default App;

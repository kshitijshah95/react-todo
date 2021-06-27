import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import AddTodoItem from './AddTodoItem';
import TodoItem from './TodoItem';
import { TodoItemInterface } from '../interfaces';


const TodoList = ({todoList, updateTodoItem, deleteTodoItem, addTodoItem}: any) => {
    const renderedTodoItem = todoList.map((item: TodoItemInterface) : any => {
        return <TodoItem key={item.id} todoItem={item} updateTodoItem={updateTodoItem} deleteTodoItem={deleteTodoItem}/>
    })
    return (
        <Card>
            <CardHeader style={{textAlign: 'center', marginTop: '20px'}} title="To-Do List"/>
            <CardContent>
                <List id="todo-list-container" style={{maxHeight: '285px', overflowY: 'auto'}}>
                    {renderedTodoItem}
                </List>
                <AddTodoItem addTodoItem={addTodoItem}/>
            </CardContent>
    </Card>)
}

export default TodoList;
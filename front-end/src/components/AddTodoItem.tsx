import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import {v4 as uuidv4} from 'uuid';

const AddTodoItem = ({addTodoItem}: any) => {
    const [inputText, setInputText] = useState('');
    
    const handleAddTaskItem = (e: any) =>{
        e.preventDefault();

        const myuuid = uuidv4();
        // Add Task to data
        addTodoItem({id: myuuid, value:inputText, status: 'Incomplete'});
        setInputText('');
    }
    

    return (
        <List>
        <ListItem>
            <ListItemText><TextField label="Add Todo" fullWidth value={inputText} onChange={(e: any)=> setInputText(e.target.value)} onKeyPress={(e) => {
                if(e.key === 'Enter') handleAddTaskItem(e) 
                else return;
                }}/></ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={handleAddTaskItem} edge="end" aria-label="Delete">
                    <AddIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </List>
        )
}

export default AddTodoItem;
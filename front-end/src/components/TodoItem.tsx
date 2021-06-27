import { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
// import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

const TodoItem = ({todoItem, updateTodoItem, deleteTodoItem}: any) => {
    const [item, setItem] = useState(todoItem);
    const [checked, setChecked] = useState(todoItem.status === 'Completed'? true: false);

    const toggleStatus = (e: any, status: string) => {
        setChecked(e.target.checked);
        if(checked) setItem({...item, status: 'Completed'});
        else setItem({...item, status: 'Incomplete'});
    }

    const handleDelete = () => {
        deleteTodoItem(item);
    }

    useEffect(() => {
        updateTodoItem(item);
    }, [item])

    return (
        <ListItem>
            <ListItemIcon>
            <Checkbox onClick={(e) => toggleStatus(e, item.status)} checked={checked}/>
            </ListItemIcon>
            <ListItemText>{item.value}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={handleDelete} edge="end" aria-label="Delete">
                    <ClearIcon color="error"/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        )
}

export default TodoItem;
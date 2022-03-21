import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoDeleted, todoChecked } from '../../store/todosSlice'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

import './TodosLists.scss';

const StyledTab = styled(Tab)({
  fontFamily: 'Playfair Display',
  color: '#3A3845',
  '&.Mui-selected': {
    color: '#3A3845',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
});

export const TodosList = () => {
  let todos = useSelector(state => state.todos);
  const show = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [condition, setCondition] = useState('all');

  if(condition === 'active') {
    todos = todos.filter(todo => todo.checked === false);
  }

  if(condition === 'done') {
    todos = todos.filter(todo => todo.checked === true);
  }

  const onToggleChange = (event, newValue) => {
    setCondition(newValue);
  }

  const onDeleteTodoClicked = (id) => {
    dispatch(
      todoDeleted(id)
    )
  }

  const onTodoChecked = (id) => {
    dispatch(
      todoChecked(id)
    )
  }

  return (
    <div>
    {show[0] && <Tabs
      value={condition}
      onChange={onToggleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
      TabIndicatorProps={{style: {background:'#3A3845'}}}
      >
      <StyledTab value="all" label="All" />
      <StyledTab value="active" label="Active" />
      <StyledTab value="done" label="Done" />
    </Tabs>}
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#F7CCAC' }}>
      {todos.map(todo => (
        <ListItem
          key={todo.id}
          secondaryAction={
          <IconButton
            onClick={() => onDeleteTodoClicked(todo.id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemText
              onClick={() => onTodoChecked(todo.id)}
              sx={{ textDecoration: todo.checked ? 'line-through' : '' }}
              primary={todo.title}
              primaryTypographyProps={{ fontSize: '18px', fontFamily: 'Playfair Display' }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </div>
  )
}
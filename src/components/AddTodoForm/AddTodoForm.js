import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { todoAdded } from '../../store/todosSlice'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import './AddTodoForm.scss';

const StyledField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#3A3845',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#3A3845',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F7CCAC',
    },
    '&:hover fieldset': {
      borderColor: '#826F66',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3A3845',
    },
  },
});

export const AddTodoForm = () => {
  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)

  const onSaveTodoClicked = () => {
    if (title.length > 0) {
      dispatch(
        todoAdded({
          id: nanoid(),
          title,
          checked: false,
        })
      )

      setTitle('');
    }
  }

  return (

      <Box
        component='form'
        noValidate
        autoComplete='off'
        className='form'
      >
        <StyledField
          id='outlined-name'
          label='Print Todo'
          value={title}
          onChange={onTitleChanged}
          InputLabelProps={{ style: { fontFamily: 'Playfair Display', color: '#3A3845' } }}
        />
        <Button sx={{ color: '#3A3845', fontFamily: 'Playfair Display' }} variant="text" onClick={onSaveTodoClicked}>Save Todo</Button>
      </Box>
  )
}

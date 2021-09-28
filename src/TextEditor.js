import React, { useState,useEffect } from 'react'
import './TextEditor.css'
import { useGlobal } from 'reactn'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'


function Transition(props) {
  return <Slide direction="up" {...props} />
}

const TextEditor = () => {
  const [ open,setOpen ] = useGlobal('spicker')
  const handleClose = () => { setOpen(false) }
  const handleOpen = () => { setOpen(true) }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={'app-bar'}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <Icon>close</Icon>
          </IconButton>
          <Typography variant="h6" color="inherit" className={'flex'}>
            Spickzettel
          </Typography>
        </Toolbar>
      </AppBar>
      <Textarea/>
    </Dialog>
  )
}


const Textarea = (props) => {
  const [list,setList] = useState(
     JSON.parse(localStorage.getItem('spicker')) || []
  )
  const [input,setInput] = useState('')
  const removeFromList = (value) => {
    setList(list.filter(el => el !== value))
  }
  const addToList = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      const l = [...list,e.target.value]
      setList(l)
      setInput('')
    }
   }

  useEffect(() => {
    localStorage.setItem('spicker', JSON.stringify(list))
  }, [list])


  return (
   <div style={{paddingTop:55}}>
    <TextField
     id="outlined-search"
     label="Zum Spickzettel hinzufügen"
     margin="dense"
     variant="outlined"
     onKeyDown={addToList}
     onChange={(e) => setInput(e.target.value)}
     value={input}
     fullWidth
     />

    <List dense>
     {list.map((text,i) => (
       <ListItem key={'spicker-'+i} button>
         <ListItemText primary={text} />
         <ListItemSecondaryAction>
          <IconButton onClick={removeFromList.bind(this,text)}><Icon>close</Icon></IconButton>
         </ListItemSecondaryAction>
       </ListItem>
     ))}
    </List>

    </div>
  )
}


export default TextEditor

import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItemSecondaryAction } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import moment from "moment"


const NoteList = ({notes}) => {
    return notes.length ? (
        <List>
        {
                notes.map(note => {
                  return(
                    <ListItem button key={note.id}>
                    <ListItemText primary={note.title} secondary={moment(note.id).format("MMM Do YY")}/>
                    <ListItemSecondaryAction>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  )
                })
                }
    </List>
        
    ) : (
        <Typography align="center" variant="h6">
            No notes yet
        </Typography>
    )
    
}

export default NoteList
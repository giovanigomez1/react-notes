import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItemSecondaryAction } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import moment from "moment"
import {Link} from 'react-router-dom'


const NoteList = ({notes, deleteNote}) => {
  console.log(notes)
    return notes.length ? (
      <List>
        {
          notes.map((note) => {
            return(
              <ListItem button component={Link} to={`/view/${note.id}`} key={note.id}>
                <ListItemText primary={note.title} secondary={moment(note.id).format("MMM Do YY")}/>
                  <ListItemSecondaryAction>
                    <IconButton onClick={()=>deleteNote(note.id)}>
                      <DeleteIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
      </List>
        
    ) : (
        <Typography align="center" variant="h6">
            No notes yet...
        </Typography>
    )
}


export default NoteList
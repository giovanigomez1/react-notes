import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';


const NotesForm = ({ title, description, updateValue, saveNote }) =>{
    return(
        <Fragment>
            <Grid item xs={12}>
                <TextField type='text' label="Title" margin="normal" fullWidth title={title}
                 onChange={updateValue("title")} value={title}/>
            </Grid>
            <Grid item xs={12}>
                <TextField multiline rows="4" margin="normal" fullWidth 
                placeholder='Start talking notes from your heart' onChange={updateValue("description")} value={description}/>
            </Grid>
            <Fab color='secondary' className="editIcon" onClick={saveNote}>
                <Icon>edit_icon</Icon>
            </Fab>
        </Fragment>
    )
}

export default NotesForm
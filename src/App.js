import React, {Component, Fragment} from 'react';
import axios from 'axios'
// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NotesForm from './NotesForm';
import NoteList from './NoteList'
import {Link, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Container from '@material-ui/core/Container';
import Note from './Note'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
      notes: []
    }
  }

  componentDidMount(){
    axios.get('./notes.json').then(response => {
      if(response.status === 200 && response.data){
        
        this.setState({
          notes: response.data
        })
      }
    })
    .catch(err => console.log(err)) 
  }

updateValue = field => e =>{
  console.log(e.target.value)
  console.log()
  this.setState({
    [field]: e.target.value
  })
}

saveNote = (e) =>{
  if(this.state.title && this.state.description){
    this.setState( state => {
      return{
        notes: [
          ...state.notes, 
          {
            id: Date.now(),
            title: state.title, 
            description: state.description
          }
        ], title:"",description:""
      }
     })
    }
  }

  deleteNote = (id) =>{
    console.log(id)
    this.setState({
      notes: this.state.notes.filter(note =>  note.id !== id
      )
    })
  }

render(){
    return (
      <Fragment>
        <Container maxWidth="lg">
        <Typography align="center" variant="h2" gutterBottom>
          Hello world
        </Typography>
  
        <Grid container justify='center' spacing={2}>
          <Grid item xs={4}>
            <NoteList notes={this.state.notes} deleteNote={this.deleteNote}/>
          </Grid>
          <Grid item xs={8}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/addNote" render={()=>(
              <NotesForm title={this.state.title} description={this.state.description}
              updateValue={this.updateValue} saveNote={this.saveNote}/>
            )}
            />
            <Route path='/view/:id'
            render={props =>  {
              const note = this.state.notes.filter(note => note.id === parseInt(props.match.params.id) )[0]
              return note ? <Note note = {note} /> : <Redirect to="/" />
            }}
            />
            
          </Grid>
        </Grid>
          <Fab color="primary" className="addIcon" component={Link} to="/addNote">
            <AddIcon />
          </Fab>      
        </Container>  
      </Fragment>
    );  
  }
}
export default App;

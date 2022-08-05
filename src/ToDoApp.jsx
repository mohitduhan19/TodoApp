import React, { useState } from 'react'
import ToDoItems from './ToDoItems';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Box from '@material-ui/core/Box';

const ToDoApp =()=>{

    const [additem,setItem]=useState('');

    const [itemAdded,displayItem]=useState([]);

    const enterItem=(event)=>{
        setItem(event.target.value);
    }
    const display=()=>{
        displayItem((olditems)=>{
            return [...olditems,additem];
        }
        );
        setItem('');
    }
    const deleteItem=(id)=>{
        displayItem((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                return index!==id;
            });

        });

    }
    
    return(
        <>
        <Paper  elevation={3} style={{padding:"20px",paddingTop:"1px",minHeight:"100vh",margin:"0px"}}>
        <h1 
        style={{backgroundColor:"#7e57c2",
        color:"white",
        fontSize:"30px",
        textAlign:"center",
        padding:"20px",
        fontFamily:"sans-serif"}}
        >Notepad App</h1><br/>
        <Box display="flex" justifyContent="center">
        
        <TextField id="standard-basic" label="Enter Note"  onChange={enterItem} value={additem}/>    
        &nbsp;&nbsp;

        <Fab  style={{backgroundColor:"#7e57c2",color:"white"}} aria-label="add" onClick={display} >
        <NoteAddIcon />
        </Fab>

        </Box>
        <br/>
        <ol >
        {itemAdded.map((itemval,index)=>{
            return (<ToDoItems 
            key={index}
            id={index}
            onDelete={deleteItem}
            addedItem={itemval} />)
        })}
        </ol>
        
        </Paper>
        </>
    )
}
export default ToDoApp;
import React , { useState }from 'react'
import ReactDOM from 'react-dom'
import CheckIcon from '@material-ui/icons/Check';

import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Box from '@material-ui/core/Box';



const ToDoItems =(props)=>{
   
    const [editBool,setEditBool]=useState("false");

    const [line,setLine]=useState(false);

    const onEdit =()=>{
        setEditBool("true");
    }
    const onLine =()=>{
        setLine(true);
    }




    return(
        <>
        <Paper elevation={2} style={{padding:"30px"}}>
       
        
         <Box display="flex" p={1} >
        <Box p={1} flexGrow={1} >
         <span contentEditable={editBool} 
        
         
         style={{textDecoration: line ? "line-through" : "none",fontSize:"20px",padding:"10px"}}>{props.addedItem}</span>
        </Box>

        <Box p={1} >
        <Fab color="success" aria-label="complete" onClick={onLine} style={{backgroundColor:"#5cb85c",color:"white"}}>
          <CheckIcon />
         </Fab>
        </Box>
        
        <Box p={1} >
        <Fab color="primary" aria-label="edit" onClick={onEdit} style={{marginLeft:"5px"}}>
          <EditIcon />
         </Fab>
        </Box>
        

        <Box p={1} >
        <Fab  color="secondary" aria-label="delete" onClick={()=>{
             props.onDelete(props.id);
         }}  style={{marginLeft:"5px"}}>
          <DeleteForeverIcon />
         </Fab>
        </Box>

        </Box>
        

         

         
         
         </Paper>
         <br/>
        </>
    );
}
export default ToDoItems;
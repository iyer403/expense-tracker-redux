import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function ListItem({expense}) {

  return (
        <ListGroup  variant="flush">
         
             <ListGroup.Item className='d-flex justify-content-between' ><span>{expense.name}</span> : <span >{expense.price}</span></ListGroup.Item>
        
         
         
        </ListGroup>
      );
    }
    
  
 

export default ListItem
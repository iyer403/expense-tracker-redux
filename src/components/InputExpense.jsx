import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addExpenseAction } from '../store/slices/expense-slice';

function InputExpense() {
  const dispatch = useDispatch();
  const [price,setPrice] = useState();
  const [expenseName,setExpenseName] = useState();

  function submit(e) {
    e.preventDefault();
   
    dispatch(addExpenseAction({price, name:expenseName}));
  }
  return (
   
     
<>
   
    <div style={{border:"1px solid rgba(0,0,0,0.4)",borderRadius:"0.75rem"}}  className="container-sm pt-4 pb-2 px-5 bg-white  w-50 mx-auto mb-4">

<form onSubmit={submit} action="">
      <InputGroup  className="mb-3 w-100">
      <Form.Control onChange={(e)=>setExpenseName(e.target.value)}
          placeholder="Eg.Apple"
        
        
        />
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text >0.00</InputGroup.Text>
        <Form.Control className='me-4 ' aria-label="Dollar amount (with dot and two decimal places)" onChange={(e)=>setPrice(e.target.value)}  />
        <Button className='me-4 ' type='submit'   variant="outline-secondary" id="button-addon2">
          Add Expense
        </Button>
      </InputGroup>
      </form>
      </div>
      </>
  );
}

 

export default InputExpense
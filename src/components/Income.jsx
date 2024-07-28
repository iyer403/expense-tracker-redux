import React from 'react'
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from '../store/slices/expense-slice';

function Income() {
  const dispatch = useDispatch()
  const income = useSelector(store => store.EXPENSE.income)
 
  return (
    <>
       <InputGroup className="container-sm w-50 mx-auto mt-4 mb-4  fw-bold">
   
    <Form.Label className='me-4 '    htmlFor="inputIncome">Income</Form.Label>
    <Form.Control
   
      type="number"
      id="inputIncome"
      placeholder="Ex: 3000"
      defaultValue={income}
      onChange={(e)=> {
        dispatch(setIncomeAction(Number.parseFloat(e.target.value)))
      }}
      aria-describedby="passwordHelpBlock"
    />
 </InputGroup>
    </>
  )
}

export default Income
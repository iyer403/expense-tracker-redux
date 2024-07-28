import React from 'react'

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function Total() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector(store => store.EXPENSE.income);
  


  const totalExpense = expenseList.reduce((acc,expense) => {
    return Number(acc) + Number.parseFloat( expense.price);
    },0);

    const remainingMoney = income - totalExpense
      return (
        <ListGroup>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start container-sm pt-4 pb-2 px-5 bg-white  w-50 mx-auto mb-4"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Total Expenses :</div>
            
            </div>
            <Badge bg="primary" pill>
              {totalExpense}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start container-sm pt-4 pb-2 px-5 bg-white  w-50 mx-auto mb-4"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Remaining Money :</div>
             
            </div>
            <Badge bg="danger" pill>
              {remainingMoney}
            </Badge>
          </ListGroup.Item>
     
        </ListGroup>
      );
    }
    

export default Total
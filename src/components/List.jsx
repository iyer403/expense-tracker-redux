import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux';


function List() {
  const expenseList = useSelector(store => store.EXPENSE.expenseList)

  return (
    <div style={{border:"1px solid rgba(0,0,0,0.4)",borderRadius:"0.75rem",overflowY:"scroll",maxHeight:"200px",color:"black"}} className="container-sm p-3  bg-white  w-50 mx-auto mb-4">
  
    {expenseList.map((expense,index)=>(
       <ListItem key={index}
    expense ={expense}/>
    ))}
   </div>
  )
}

export default List
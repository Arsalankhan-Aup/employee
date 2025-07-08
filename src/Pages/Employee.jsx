import { useState } from "react";
import InitialData from "../Data";
import EmployeeList from "../Components/EmployeeList";
import EmployeeForm from "../Components/EmployeeForm";
import { Link } from "react-router-dom";
import { data } from "react-router-dom";
export default function Employee() {
   const[employees,setEmployees] = useState(InitialData)
   const[editEmployee,setEditEmployee]= useState(null)

   const AddorUpdatEmploye = (employ)=>{
    if (employ.id) {
        setEmployees(employees.map(e=>{
            e.id === employ.id ? employ : e
        }))
    }
    else{
        const newEmploy = {
            ...employ, id: Date.now()
        }
        setEmployees([...employees,newEmploy])
    }
   }
    
    
    const EditEmployee = (emp) =>{
        setEditEmployee(emp)
    }
   
   const DeletEmployee=(id)=>{
    setEmployees(employees.filter(e=>
        e.id!==id
    ))
   }
   

   return(
    <div>
         <div className='p-4 bg-gray-300 '>
      <nav className='space-x-4'>
        <Link to="/Overview" className='text-blue-600'>Overview</Link>
        <Link to="/Employee" className='text-blue-600'>Employee</Link>
      
      </nav>
    </div>
        <EmployeeForm
        existing={editEmployee}
        onSubmit={AddorUpdatEmploye}
        />
         <EmployeeList
         deletEployee={DeletEmployee}
         Edit={EditEmployee}
        employee={employees}/>
    </div>
   )


}


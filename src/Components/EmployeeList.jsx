import { Link } from "react-router-dom";

export default function EmployeeList({employee,deletEployee,Edit}) {
    return(
       <div className="my-5 ml-2">
        <h2 className="font-bold">Employee List</h2>
        <ul className="font-semibold">
           {employee.map(emp=>(
            <li className="shadow p py-2 justify-between items-center flex" key={emp.id}>
                <div>
                    <p>{emp.name}</p>
                    <p className="text-gray-500 text-sm">{emp.email}</p>
                </div>
                <div className="space-x-2 mr-3">
                    <button
                    onClick={()=> Edit(emp)} className="bg-gray-400 text-white py-1 px-3">Edit</button>
                    <button onClick={()=>deletEployee(emp.id)}
                    className="bg-red-500 text-white py-1 px-2">Delete</button>
                </div>
            </li>
           ))}
        </ul>
       </div>
    )
}
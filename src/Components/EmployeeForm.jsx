import { useEffect, useState } from "react"

export default function EmployeeForm({onSubmit,existing}) {
   const[name,setName] = useState("")
   const[email,setEmail] = useState("")


   useEffect(()=>{
    if (existing) {
      setName(existing.name)
      setEmail(existing.email)
    }
   },[existing])


   const handleSubmit= (e)=>{
    e.preventDefault()
    onSubmit({id : existing?. id, name, email})
    setName("")
    setEmail("")

   }

  

    return(
   <div className="mt-4 ml-4">
     <form className="space-x-2" onSubmit={handleSubmit}>
       <input placeholder="name"
       className="text-gray-700 bg-gray-100 shadow  pl-1 rounded py-1"
      value={name}
      onChange={(e)=> setName(e.target.value)} 
      />
      <input placeholder="email"
      value={email}
       className=" text-gray-700 bg-gray-100 pl-1 rounded py-1 shadow"
      onChange={(e)=> setEmail(e.target.value)} />

      <button className="bg-blue-400 text-sm text-white rounded px-2 py-2">{existing ? "add" : "Update"}</button>
   
     </form>
     </div>
    )
}
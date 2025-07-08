
import './App.css'
import { Link } from 'react-router-dom'
function App() {
 

  return (
    <div className='p-4 bg-gray-300 '>
      <nav className='space-x-4'>
        <Link to="/Overview" className='text-blue-600'>Overview</Link>
        <Link to="/Employee" className='text-blue-600'>Employee</Link>
      
      </nav>
    </div>
  )
}

export default App

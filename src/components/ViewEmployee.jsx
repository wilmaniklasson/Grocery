import {  deleteEmployee, getEmployees } from '../data/crud'
import { useStore } from '../data/store.js'
import { useState } from 'react'


const ViewEmployee = ({ employee }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const setEmployees = useStore(state => state.setEmployees)
        const handleDelete = async () => {
        setIsLoading(true)
		await deleteEmployee(employee.key)
		const employeesFromDb = await getEmployees()
		setEmployees(employeesFromDb)
		setIsLoading(false)
        }

        

	return (
		<section className="row border-bottom alternate">
                <div className="flex-grow"> {employee.name} - {employee.occupation}st </div>
                <button disabled={isLoading} onClick={handleDelete} className="delete-btn"> Radera</button>
		</section>
	)
}

export default ViewEmployee



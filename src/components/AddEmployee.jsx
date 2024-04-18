import { useState } from 'react'
import { useStore } from '../data/store.js'
import { addEmployee, getEmployees } from '../data/crud.js'

const AddEmployee = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState('')
	const [occupation, setOccupation] = useState('')
	const setEmployees = useStore(state => state.setEmployees)

	const handleSubmit = async (event) => {
        setIsLoading(true)
		event.preventDefault()
		const newEmployee = { name: name, occupation: occupation }
		try {
			await addEmployee(newEmployee)
			setName('')
			setOccupation('')
			setEmployees(await getEmployees())
		} catch {
			alert('Failed to add employee')

		} finally {
			setIsLoading(false)
		}
	}

	return (
		<section>
			<form className="form">
			<section className="column">
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					 placeholder='Lägg till en vara...'/>
			</section>

			<section className="column">
				<input type="number"
					value={occupation}
					onChange={e => setOccupation(e.target.value)}
					placeholder='Antal'/>
			</section>

			<button
				disabled={isLoading}
				onClick={handleSubmit} type="submit" 
				className='submit-btn'> Lägg till </button>
			</form>
		</section>
	)
}

export default AddEmployee

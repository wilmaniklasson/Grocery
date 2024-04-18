
import { getEmployees } from '../data/crud.js'
import { useStore } from '../data/store.js'
import ViewEmployee from './ViewEmployee.jsx'

const Employees = () => {
	const { employees, setEmployees } = useStore(state => ({
		employees: state.employees,
		setEmployees: state.setEmployees
	}))

	const handleGetEmployees = async () => {
		setEmployees(await getEmployees())
	}

	return (
		<div>
		
			<div>
				<button onClick={handleGetEmployees}
				className='get-employees-btn'> Hämta listan</button>
			</div>
			<div className='list-conatiner' >
			{employees.map(e => (
				<ViewEmployee key={e.key} employee={e} />
			))}

			</div>
			
		</div>
	)
}
export default Employees;

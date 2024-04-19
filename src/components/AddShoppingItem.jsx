import { useState } from 'react'
import { useStore } from '../data/store.js'
import { addShoppingItem, getShoppingItems } from '../data/crud.js'

const AddShoppingItem = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState('')
	const [quantity, setQuantity] = useState('')
	const setShoppingItems = useStore(state => state.setShoppingItems)

	const handleSubmit = async (event) => {
        setIsLoading(true)
		event.preventDefault()
		const newShoppingItem = { name: name, quantity: quantity }
		try {
			await addShoppingItem(newShoppingItem)
			setName('')
			setQuantity('')
			setShoppingItems(await getShoppingItems())
		} catch {
			alert('Failed to add shoppingItem')

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
					value={quantity}
					onChange={e => setQuantity(e.target.value)}
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

export default AddShoppingItem

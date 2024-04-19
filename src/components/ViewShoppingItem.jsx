import {  deleteShoppingItem, getShoppingItems } from '../data/crud.js'
import { useStore } from '../data/store.js'
import { useState } from 'react'


const ViewShoppingItem = ({ shoppingItem }) => {
    const [isLoading, setIsLoading] = useState(false)
    const setShoppingItems = useStore(state => state.setShoppingItems)
        const handleDelete = async () => {
        setIsLoading(true)
		await deleteShoppingItem(shoppingItem.key)
		const shoppingItemsFromDb = await getShoppingItems()
		setShoppingItems(shoppingItemsFromDb)
		setIsLoading(false)
        }

        

	return (
		<section className="row border-bottom alternate">
                <div className="flex-grow"> {shoppingItem.name} - {shoppingItem.quantity}st </div>
                <button disabled={isLoading} onClick={handleDelete} className="delete-btn"> Radera</button>
		</section>
	)
}

export default ViewShoppingItem



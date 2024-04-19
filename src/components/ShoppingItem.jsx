
import { getShoppingItems } from '../data/crud.js'
import { useStore } from '../data/store.js'
import ViewShoppingItem from './ViewShoppingItem.jsx'

const ShoppingItem = () => {
	const { shoppingItems, setShoppingItems } = useStore(state => ({
        shoppingItems: state.shoppingItems,
        setShoppingItems: state.setShoppingItems
    }))

	const handleGetShoppingItems = async () => {
		setShoppingItems(await getShoppingItems())
	}

	return (
		<div>
		
			<div>
				<button onClick={handleGetShoppingItems}
				className='get-shopping-items-btn'> Hämta listan</button>
			</div>
			<div className='list-conatiner' >
			{shoppingItems.map(e => (
				<ViewShoppingItem key={e.key} shoppingItem={e} />
			))}

			</div>
			
		</div>
	)
}
export default ShoppingItem;

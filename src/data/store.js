import { create } from 'zustand'
import AddShoppingItem from '../components/AddShoppingItem'

// set, create
const useStore = create(set => ({
    shoppingItems: [], // Ändra från shoppingItem till shoppingItems

    setShoppingItems: newShoppingItems => set(state => ({
        shoppingItems: newShoppingItems // Ändra till shoppingItems
    })),

    addShoppingItem: shoppingItem => set(state => ({
        shoppingItems: [...state.shoppingItems, shoppingItem]
    })),
    deleteShoppingItem: shoppingItem => set(state => ({
        shoppingItems: state.shoppingItems.filter(e => e.key !== shoppingItem.key)
    }))
}))

export { useStore }


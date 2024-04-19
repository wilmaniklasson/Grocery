

import { collection, getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore/lite'
import { db } from './fire.js'


const collectionName = 'shoppingItems'
const collectionRef = collection(db, collectionName)


async function getShoppingItems() {
	// Skapa en referens till collection "shoppingItems" i databasen
	const shoppingItemCollection = collection(db, collectionName)

	// Hämta alla dokument i collection "shoppingItems"
	const shoppingItemSnapshot = await getDocs(shoppingItemCollection)
	// console.log('getShoppingItems: snapshot is', shoppingItemSnapshot)


	const shoppingItemList = shoppingItemSnapshot.docs.map(doc => withKey(doc))
	return shoppingItemList
}

// Use this if you don't have an id in the objects themselves
function withKey(doc) {
	let o = doc.data()
	o.key = doc.id  // "id" is the document reference
	return o
}

async function addShoppingItem(employee) {
	// referens till collection 'shoppingItems'
	await addDoc(collectionRef, employee)
}

async function deleteShoppingItem(key) {
	const docRef = doc(collectionRef, key)
	// console.log('deleteShoppingItem: ', docRef);
	deleteDoc(docRef)
}



export { getShoppingItems, addShoppingItem, deleteShoppingItem}

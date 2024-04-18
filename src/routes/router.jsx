import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import LandingPage from './LandingPage.jsx';
import List from './List.jsx';

const router = createHashRouter([
	{
		
		path: "/",

		element: <Root />,

		children: [
			{
                path: '/',
                element: <LandingPage />
            },

			{
				path: '/Lista',
				element: <List />
			}
			
		]
	},
	
]);

export { router }
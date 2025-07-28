	import { initAOS } from './aos'
	import { useEffect } from 'react'
	import { createBrowserRouter, RouterProvider } from 'react-router-dom'
	import Layout from './Layout/Layout'
	import FirstPage from './Pages/FirstPage'
	import SecondPage from './Pages/SecondPage'
	import ThirdPages from './Pages/ThirdPages'
	import FourthPage from './Pages/FourthPage'
	import useDarkSide from './config/useDarkMode'
	import UserById from './Pages/UserById'

	const App = () => {
		const [theme, toggleTheme] = useDarkSide()
		useEffect(() => {
			initAOS()
		}, [])
		const router = createBrowserRouter([
			{
				path: '/',
				element: <Layout />,
				children: [
					{ index: true, element: <FirstPage /> },
					{ path: 'second', element: <SecondPage /> },
					{ path: 'third', element: <ThirdPages /> },
					{ path: 'fourth', element: <FourthPage /> },
					{ path: 'user/:id', element: <UserById /> },
				],
			},
		])

		return (
			<div className='dark:bg-black bg-white h-[100vh] dark:text-white text-black'>
				<RouterProvider router={router} />
			</div>
		)
	}

	export default App

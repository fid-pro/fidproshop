
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard'
import Docs from './pages/Docs'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Sales from './pages/Sales'
import Seller from './pages/Seller'
import Sale from './pages/Sale';

function App() {

	return (
		<>

			<BrowserRouter>
				<SideBar />
				<div className='p-4 sm:ml-64 min-h-screen dark:bg-gray-900 text-white'>
					<Routes >
						<Route path="/" element={<Dashboard />} />
						<Route path="/sellers" element={<Seller />} />
						<Route path="/products" element={<Products />} />
						<Route path="/sales" element={<Sales />} />
						<Route path="/docs" element={<Docs />} />
						<Route path="/sale" element={<Sale />} />
						<Route element={<NotFound />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App

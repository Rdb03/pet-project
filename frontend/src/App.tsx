import { Container } from '@mui/material'
import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
import { Route, Routes } from 'react-router-dom'
import AboutUsPage from './features/AboutUsPage/AboutUsPage.tsx'
import Register from './features/users/Register.tsx'
import Login from './features/users/Login.tsx'
import NoFound from './components/NoFound/NoFound.tsx'
import './App.css'
import HomePage from './features/HomePage/HomePage.tsx'

const App = () => (
	<>
		<header>
			<Header />
		</header>
		<main>
			<Container maxWidth='xl' sx={{ marginTop: '50px' }}>
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<HomePage />} />
					<Route path='/about-us' element={<AboutUsPage />} />
					<Route path='*' element={<NoFound />} />
				</Routes>
			</Container>
		</main>
		<footer>
			<Footer />
		</footer>
	</>
)

export default App

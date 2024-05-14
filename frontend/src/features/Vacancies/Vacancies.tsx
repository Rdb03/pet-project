import './Vacancies.css'
import { Button } from '@mui/material'
import company from './images/company.png'

const Vacancies = () => {
	return (
		<div className='vacancies-block'>
			<h2 className='vacancies-title'>Latest vacancies</h2>
			<div className='vacancies-cards'>
				<div className='vacancies-card'>
					<img src={company} alt='card-logo' />
					<h6 className='card-title'>Менеджер по продажам услуг</h6>
					<p className='card-text'>Satcom, Бишкек</p>
					<p className='card-salary'>от 25 000 до 35 000</p>
				</div>
			</div>
			<Button sx={{
				width: '100%',
				height: '70px',
				borderRadius: '30px',
				textTransform: 'lowercase',
				fontSize: '20px',
				marginTop: '20px'
			}} variant='contained' className='seen-btn'>see more</Button>
		</div>
	)
}

export default Vacancies

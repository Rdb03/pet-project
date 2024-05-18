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
					<h6 className='card-title'>Service Sales Manager</h6>
					<p className='card-text'>Satcom, Washington</p>
					<p className='card-salary'>5 000 to 7 000</p>
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

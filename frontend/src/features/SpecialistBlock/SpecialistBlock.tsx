import { Button } from '@mui/material'
import SpecialistImg from './images/specialist.jpg'
import './SpecialistBlock.css'

const SpecialistBlock = () => {
	return (
		<div className='specialist-block'>
			<img className='specialist-img' src={SpecialistImg} alt='specialistImg' />
			<div className='row'>
				<h1>
					How to choose a specialist?
				</h1>
				<Button sx={{
					backgroundColor: 'transparent',
					color: '#1870c9',
					fontWeight: 'bold',
					border: '1px solid #1870c9',
					borderRadius: '10px',
					marginTop: '20px'
				}}>Read more</Button>
			</div>
		</div>
	)
}

export default SpecialistBlock
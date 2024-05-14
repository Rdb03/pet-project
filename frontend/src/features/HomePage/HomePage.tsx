import './HomePage.css'
import MainBlock from '../../components/MainBlock/MainBlock.tsx'
import SpecialistBlock from '../SpecialistBlock/SpecialistBlock.tsx'
import Vacancies from '../Vacancies/Vacancies.tsx'

const HomePage = () => {
	return (
		<>
			<MainBlock />
			<Vacancies />
			<SpecialistBlock />
		</>
	)
}

export default HomePage
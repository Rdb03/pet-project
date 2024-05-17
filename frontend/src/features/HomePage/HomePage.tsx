import './HomePage.css'
import MainBlock from '../../components/MainBlock/MainBlock.tsx'
import SpecialistBlock from '../SpecialistBlock/SpecialistBlock.tsx'
import Vacancies from '../Vacancies/Vacancies.tsx'

const HomePage = () => {
	return (
		<>
			<MainBlock title={'Work your dream job'}
			           card1={'Looking for a job? We have vacancies in Kyrgyzstan for you!\n' +
				           '\t\t\t\t\t\tJoin us and find your perfect position!'}
			           card2={'Looking for a job abroad? We have openings!\n' +
				           '\t\t\t\t\t\tJoin and find your international opportunity!'}
			           button={true}
			           titleCard1={'Vacancies in Kyrgyzstan'}
			           titleCard2={'Vacancies abroad'}
			/>
			<Vacancies />
			<SpecialistBlock />
		</>
	)
}

export default HomePage
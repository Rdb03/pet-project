import MainBlock from '../../components/MainBlock/MainBlock.tsx'
import './AboutUsPage.css'
import bro1 from './staff-Image/bro1.jpg'
import bro2 from './staff-Image/bro2.jpg'
import bro3 from './staff-Image/bro3.jpg'
import bro4 from './staff-Image/bro4.jpg'
import bro5 from './staff-Image/bro5.jpg'

const aboutUsPage = () => {
	return (
		<>
			<MainBlock title='About Us'
			           card1={'Our specialists have a wide range of experience and professional skills in the field of recruitment, which guarantees high efficiency and quality of work'}
			           card2={'Our recruitment solutions can help you save time and resources on sourcing and screening candidates, making your hiring process more efficient and convenient'}
			           titleCard1={'High qualification'} titleCard2={'Time and resources'} />
			<div className='aboutUs-text-block'>
				<div>
					<h1>About us</h1>
					<p>Time Work” Ltd. is your reliable partner in the field of employment both abroad and within the country.
						We are proud of our achievements in successful employment of specialists within the country and are pleased
						to
						announce our innovative project, which will facilitate job search for all stakeholders.</p>
				</div>
				<div>
					<h3>Our mission</h3>
					<p>Our mission is to create an environment where every person can find the right job and every employer can
						find
						the perfect candidate. We strive to simplify and improve the employment process for both job seekers and
						employers,
						by creating innovative solutions that meet the current needs of the labor market.</p>
				</div>
				<div>
					<h3>Our innovative project</h3>
					<p>This year we are pleased to introduce you our new project, which is designed to facilitate your domestic
						job
						search. Our online platform will provide a wide selection of job vacancies from verified employers, as well
						as
						tools
						for efficient job search and application.</p>
				</div>
				<div>
					<h3>Contact us</h3>
					<p>Contact us today to learn more about our innovative project and start utilizing our services for successful
						employment. We are ready to help you achieve your professional goals and provide quality human resources
						support. Sincerely, Bereke Work LLP.</p>
				</div>
			</div>
			<div className='ourValues-block'>
				<h2>Our values</h2>
				<div className='ourValues-cards'>
					<div className='ourValues-card'>
						<h6 className='ourValues-card-title'>
							Professionalism
						</h6>
						<span className='icon user-icon'></span>
						<p>
							We strive for excellence in all aspects of our work to provide our clients and partners with the best
							possible results
						</p>
					</div>
					<div className='ourValues-card'>
						<h6 className='ourValues-card-title'>
							Help
						</h6>
						<span className='icon search-icon' />
						<p>
							Helping companies find ideal candidates and professionals find jobs that match their skills and ambitions
						</p>
					</div>
					<div className='ourValues-card'>
						<h6 className='ourValues-card-title'>
							Quality
						</h6>
						<span className='icon star-icon' />
						<p>
							We strive for high quality in everything we do to meet the needs and expectations of our customers and
							partners
						</p>
					</div>
				</div>
			</div>
			<div className='benefit-block'>
				<h6 className='benefit-title'>Among the advantages</h6>
				<div className='benefit-block-cards'>
					<div className='benefit-block-card'>
						<span className='icon icon-benefit key-icon'></span>
						<div>
							<h6 className='card-title'>For applicants</h6>
							<p>For job seekers, our platform will offer a convenient and easy way to find the right job, as well as
								the ability to create a profile and upload a resume.</p>
						</div>
					</div>
					<div className='benefit-block-card'>
						<span className='icon icon-benefit clock-icon'></span>
						<div>
							<h6 className='card-title'>For employers</h6>
							<p>For employers, we will provide access to quality candidates and tools to manage the vacancy and
								the hiring process.</p>
						</div>
					</div>
				</div>
			</div>
			<div className='ourStaff-block'>
				<h6 className='ourStaff-title'>Our staff</h6>
				<div className='ourStaff-block-content'>
					<div className='staff-div'>
						<img className='staff-image' src={bro1} alt='' />
						<h6>Kate Preston</h6>
						<p>Chief <br /> recruiter</p>
					</div>
					<div className='staff-div'>
						<img className='staff-image' src={bro2} alt='' />
						<h6>Jon Jones</h6>
						<p>Business Development <br /> Director</p>
					</div>
					<div className='staff-div'>
						<img className='staff-image' src={bro3} alt='' />
						<h6>Danny Abadie</h6>
						<p>Recruitment <br /> manager</p>
					</div>
					<div className='staff-div'>
						<img className='staff-image' src={bro4} alt='' />
						<h6>Marcelo Aguiar</h6>
						<p>HR-specialist</p>
					</div>
					<div className='staff-div'>
						<img className='staff-image' src={bro5} alt='' />
						<h6>Juan Adams</h6>
						<p>Recruiter's <br />assistant</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default aboutUsPage
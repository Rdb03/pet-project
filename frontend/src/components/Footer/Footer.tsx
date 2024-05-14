import { Container } from '@mui/material'
import logo from './images/work-logo.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import './Footer.css'

const Footer = () => {
	return (
		<div className='footer'>
			<Container>
				<div className='footer-content'>
					<img className='footer-logo' src={logo} alt='logo' />
					<p>© 2022-2024. BerekeWork JSC, official website.</p>
					<div className='footer-icon-div'>
						<h6 className='footer-title'>
							We're on social media
						</h6>
						<nav className='footer-nav footer-icon-bottom'>
							<li className='footer-nav-item'>
								<a className='footer-nav-link'>
									<FacebookIcon />
								</a>
							</li>
							<li className='footer-nav-item'>
								<a href="/telegram" className='footer-nav-link'>
									<TelegramIcon />
								</a>
							</li>
							<li className='footer-nav-item'>
								<a className='footer-nav-link'>
									<InstagramIcon />
								</a>
							</li>
							<li className='footer-nav-item'>
								<a className='footer-nav-link'>
									<WhatsAppIcon />
								</a>
							</li>
						</nav>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Footer
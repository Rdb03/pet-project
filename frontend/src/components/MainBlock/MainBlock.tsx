import { Button, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

export interface MainBlockProps {
	title: string;
	button?: boolean;
	card1?: string;
	card2?: string;
	titleCard1?: string;
	titleCard2?: string;
}

const MainBlock: React.FC<MainBlockProps> = ({ title, button, card1, card2, titleCard1, titleCard2 }) => {
	return (
		<div className='main-block'>
			<Grid sx={{ textAlign: 'center', marginTop: '100px' }}>
				<h1 style={{
					textTransform: 'uppercase',
					fontSize: '60px',
					color: 'white'
				}}>{title}</h1>
				{button ? <Button sx={{
					textTransform: 'none',
					width: '100px',
					justifyContent: 'space-between'
				}} variant='contained'>
					Search <SearchIcon sx={{
					marginLeft: '5px'
				}} />
				</Button> : null}
			</Grid>
			<Grid sx={{
				display: 'flex',
				width: '100%',
				flexGrow: 'grow',
				justifyContent: 'space-evenly',
				marginTop: '30px'
			}}>
				{card1 ? <div className='search-cards'>
					<h6 className='search-cards-title'>{titleCard1}</h6>
					<p>
						{card1}
					</p>
				</div> : null}
				{card2 ? <div className='search-cards'>
					<h6 className='search-cards-title'>{titleCard2}</h6>
					<p>
						{card2}
					</p>
				</div> : null}
			</Grid>
		</div>
	)
}

export default MainBlock
import {Container, Grid} from '@mui/material';
import {Link, NavLink} from 'react-router-dom';
import {useAppSelector} from "../../app/hook.ts";
import {selectUser} from "../../features/users/usersSlice.ts";
import UserMenu from "../UserMenu/UserMenu.tsx";
import AnonymousMenu from "../AnonymusMenu/AnonymousMenu.tsx";
import './Header.css';
import logo from './images/work-logo.png';

const Header = () => {
    const user = useAppSelector(selectUser);

    return (
        <Grid sx={{
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
        }}>
            <Container style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Grid
                    item
                    component={Link} to={'/'}
                    sx={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}
                >
                    <a href="/">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                </Grid>
                <div>
                    <nav className="navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Main
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" className="nav-link">
                                    About us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/vacancies" className="nav-link">
                                    Vacancies
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                {user ? (
                    <UserMenu user={user}/>
                ) : (
                    <AnonymousMenu/>
                )}
            </Container>
        </Grid>
    );
};

export default Header;
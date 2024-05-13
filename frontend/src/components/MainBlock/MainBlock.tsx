import {Button, Grid} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MainBlock = () => {
    return (
        <div className="main-block">
            <Grid sx={{textAlign: "center", marginTop: "100px"}}>
                <h1 style={{
                    textTransform: "uppercase",
                    fontSize: "60px",
                    color: "white",
                }}>Get your dream job</h1>
                <Button sx={{
                    textTransform: 'none',
                    width: '100px',
                    justifyContent: 'space-between',
                }} variant="contained">
                    Search <SearchIcon sx={{
                    marginLeft: '5px',
                }}/>
                </Button>
            </Grid>
            <Grid sx={{
                display: "flex",
                width: "100%",
                flexGrow: "grow",
                justifyContent: "space-evenly",
                marginTop: "30px"
            }}>
                <div className="search-cards">
                    <h6 className="search-cards-title">Vacancies in Kyrgyzstan</h6>
                    <p>
                        Looking for a job? We have vacancies in Kyrgyzstan for you!
                        Join us and find your perfect position!
                    </p>
                </div>
                <div className="search-cards">
                    <h6 className="search-cards-title">Vacancies abroad</h6>
                    <p>
                        Looking for a job abroad? We have openings!
                        Join and find your international opportunity!
                    </p>
                </div>
            </Grid>
        </div>
    );
};

export default MainBlock;
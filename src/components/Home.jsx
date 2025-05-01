import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
export const Home = () => {
    const preventDefault = (event) => event.preventDefault();
    const CName = useSelector(state => state.customer.custDetails.custName);
    const navigate = useNavigate();
    const newOrd = () => {
        navigate('/newOrder')
    }
    const Ord = () => {
        navigate('/Orders')
    }
    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });

    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));

    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    }));

    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));



    return <div 
    
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/basisLabait.jpg"})`, height: "90vh" }}>
        <ImageSrc style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/basisLabait.jpg"})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image> <Typography component="span" variant="subtitle1" color="inherit" sx={(theme) => ({
            fontFamily: "cursive",
            position: 'relative', p: 4, pt: 2, pb: `calc(${theme.spacing(1)} + 6px)`,
        })}>
            <h1 style={{ fontSize: "xxx-large" }}>hello {CName}</h1>
            <h2 style={{ fontSize: "xx-large" }}>wellcome To Your Way To Perfect Building</h2>
            <span style={{}} onClick={newOrd}>new order</span><ImageMarked className="MuiImageMarked-root" />
            <span onClick={Ord}>my old orders</span>
            <ImageMarked className="MuiImageMarked-root" />
                 </Typography>  </Image>


    </div>
}






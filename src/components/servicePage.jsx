import { useDispatch, useSelector } from "react-redux";
import { getOrdersForEmpThunk } from "../redux/slices/getOrdersForEmpThunk";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { getOrderDetailsThunk } from "../redux/slices/getOrderDetailsThunk";
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import HandymanIcon from '@mui/icons-material/Handyman';
export const ServicePage = () => {


    const id = useSelector(state => state.customer.EID);
    const olds = useSelector(state => state.Orders.myOrders);
    const details = useSelector(state => state.Orders.orderDetail);
    const dispatch = useDispatch();

    //עבור כפתור תמונה...---------------------------------------------------------------------------------------------------------------
    const image =
    {
        url: process.env.PUBLIC_URL + "/pppp.jpg",
        title: 'to see your order details',
        width: '100%',
    };
    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.15,
            },
            '& .MuiImageMarked-root': {
                opacity: 0,
            },
            '& .MuiTypography-root': {
                // border: '4px solid currentColor',
            },
        },
    }));

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
    const theme = createTheme({
        typography: {
            fontFamily: [
                '"Segoe UI Symbol"',]
        },
    });
    //----------------------------------------------------------------------------------------------------------------------------
    const [hasDetails, setHasDetails] = useState([])
    const fetchDetails = (ordId) => {
        dispatch(getOrderDetailsThunk(ordId))
    }
    //מעדכן לאילו הזמנות יש פירוט משתנה כל פעם שמתקבל שינוי
    useEffect(() => {
        if (details[0]) {
            var updated = [];
                var c=hasDetails.length;
               for (let i = 0; i < c; i++) {
                updated.push(-1);    
               }
            details.map((d, ind) => {
                var orderId = d[0].orderId;
                olds.map((e, index) => {
                    if (e.orderId === orderId) {
                        updated[index] = ind;
                    }
                })
            })
            setHasDetails(updated)
        }

 }, [details])//,hasDetails
  //אתחול 
    useEffect(() => {
        console.log(id);
        dispatch(getOrdersForEmpThunk(id));
    }, [])
    useEffect(() => {
        var arr = [];
        if (olds.length > 0 && details.length == 0) {
            olds.map(o => {
                arr.push(-1)
            })
            console.log("arrrrrr------", arr);
            setHasDetails(arr);
        }
    }, [olds])
    return <div >
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} sx={{ direction: "rtl", overflow: "hidden" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" style={{ fontFamily: "cursive" }} >orderNum</TableCell>
                            <TableCell align="right" style={{ fontFamily: "cursive" }}>Date</TableCell>
                            <TableCell align="right" style={{ fontFamily: "cursive" }}>sent</TableCell>
                            <TableCell align="right" style={{ fontFamily: "cursive" }}>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {olds.map((row, index) => (
                            <TableRow key={row.orderId} >
                                <TableCell component="th" scope="row" sx={{ fontFamily: "cursive", fontSize: "large", width: "15%" }}> {row.orderId}</TableCell>
                                <TableCell align="right" sx={{ width: "15%", fontFamily: "cursive", fontSize: "large" }} >{row.orderDate}</TableCell>
                                <TableCell align="right" sx={{ width: "15%", fontFamily: "cursive" }}>
                                    {row.sent ? <><span style={{ fontSize: "xx-large" }}>✅</span><br /><span style={{ fontSize: "small" }}> המשלוח כבר בדרך אליך</span> </>
                                        : <><span style={{ fontSize: "xxx-large" }}>❎</span><br /><span sx={{ fontSize: "medium", fontFamily: "cursive" }}>  המשלוח עתיד להישלח ביום העסקים הבא</span> </>}</TableCell>
                                <TableCell align="right">
                                    {hasDetails[index] !== -1 &&
                                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', fontFamily: "cursive", fontSize: "large" }}>
                                            {details[hasDetails[index]]?.map(o =>
                                                <ListItem> <ListItemAvatar> <Avatar>  {o.prodPic} </Avatar> </ListItemAvatar>
                                                    <ListItemText primary={o.prodName} secondary={o.count} />
                                                </ListItem>)} </List>}
                                    {hasDetails[index] === -1 && <>
                                        <ImageButton focusRipple key={image.title} style={{ width: image.width, fontFamily: "cursive" }} onClick={() => fetchDetails(row.orderId)} >
                                            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                                            <ImageBackdrop className="MuiImageBackdrop-root" />
                                            <Image> <Typography component="span" variant="subtitle1" color="inherit" sx={(theme) => ({
                                                fontFamily: "cursive",
                                                position: 'relative', p: 4, pt: 2, pb: `calc(${theme.spacing(1)} + 6px)`,
                                            })}>
                                                {image.title}
                                                <ImageMarked className="MuiImageMarked-root" />
                                            </Typography>  </Image> </ImageButton>  </>}
                                </TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    </div>

}











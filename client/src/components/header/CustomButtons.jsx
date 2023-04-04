import { Box,Button, Typography ,styled} from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState,useContext } from "react";
import LoginDialog from "../login/LoginDialog";
import {DataContext} from '../../context/DataProvider'
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
     margin: '0 3% 0 auto',
     display: 'flex',
     '& > *': {
         marginRight: '40px !important',
         textDecoration: 'none',
         color: '#FFFFFF',
         fontSize: 14,
         alignItems: 'center',
         [theme.breakpoints.down('sm')]: {
             color: '#2874f0',
             alignItems: 'center',
             display: 'flex',
             flexDirection: 'column',
             marginTop: 10
         }
     },
     [theme.breakpoints.down('sm')]: {
         display: 'block'
     }
 }));
 const Container = styled(Box)(({ theme }) => ({
     display: 'flex',
     [theme.breakpoints.down('sm')]: {
         display: 'block'
     }
 }));
 const LoginButton = styled(Button)(({ theme }) => ({
     color: '#2874f0',
     background: '#FFFFFF',
     textTransform: 'none',
     fontWeight: 600,
     borderRadius: 2,
     padding: '5px 40px',
     height: 32,
     boxShadow: 'none',
     [theme.breakpoints.down('sm')]: {
         background: '#2874f0',
         color: '#FFFFFF'
     }
 }));
const CustomButton=()=>{
    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(DataContext);
    const openDialog=()=>{
        setOpen(true);
    }
     return(
    <Wrapper>
        {
            account?<Profile account={account} setAccount={setAccount}/>:
        <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
             }
        <Typography>(N0-1-products)</Typography>
        <Typography>Mores</Typography>
        <Container>
          <ShoppingCartCheckoutIcon/>
          <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
     )
}
export default CustomButton;
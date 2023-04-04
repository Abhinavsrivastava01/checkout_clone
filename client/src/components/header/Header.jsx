import {AppBar,Toolbar,Box,styled, Typography}from '@mui/material'
//components
import Search from './Search';
import CustomButtons from './CustomButtons';
const StyledHeader=styled(AppBar)`
background:#00CC00;
height:61px
`;
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
    
`;
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})
const CustomButtonWrapper = styled(Box)(({ theme }) => ({ 
     margin: '0 5% 0 auto', 
     [theme.breakpoints.down('sm')]: {
         display: 'none'
     }
 }));
const Header =()=>{
    const logoUrl= 'https://img.freepik.com/premium-vector/purchasing-…tion-web-design-infographics-more_676904-1791.jpg';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
     return(
         
          <StyledHeader>
               <Toolbar>
             <Component>
               <img src={logoUrl}alt="logo"style={{width:45}}/>
               <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Chkout&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
             </Component>
          <Search/>
              <CustomButtonWrapper>
              <CustomButtons/>
              </CustomButtonWrapper>
               </Toolbar>
          </StyledHeader>
     )
}
export default Header;

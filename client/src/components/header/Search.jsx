import { InputBase,styled } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search'
const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;
//const InputSearchBase = styled(InputBase)`
 // font-size: unset;
 // width: 100%;
 // padding-left: 20px;
//`;
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;
const Search=()=>{
     return(
          <SearchContainer>
                <InputBase
                placeholder="Chkout-product,brand"/>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
          </SearchContainer>
         
     )
}
export default Search;
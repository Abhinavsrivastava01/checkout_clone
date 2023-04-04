//import logo from './logo.svg';
import './App.css';
import DataProvider from './context/DataProvider'
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
function App() {
  return (
    <DataProvider >
    
      <Header/>
      <Box style={{marginTop:58}}>
      <Home/>
      </Box>
    </DataProvider>
  );
}
export default App;

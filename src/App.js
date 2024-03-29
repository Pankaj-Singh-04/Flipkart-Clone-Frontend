
import './App.css';
import { Box } from '@mui/material';

// components
import Header from './components/header/Header'
import Home from './components/home/Home'

import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './components/detials/DetailView';
import Cart from './components/cart/Cart';
function App() {
  return (
    <DataProvider >
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "60px" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

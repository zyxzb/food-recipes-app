import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { useState } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar'
import Recipes from './pages/Recipes';
import { ThemeProvider } from './context/ThemeContext';


function App() {
    
    return (
        <BrowserRouter>
        <ThemeProvider>
            <div className="App">
                <Navbar/>
                    <Routes>
                        <Route path='/' exact element={<Main/>}/>
                        <Route path='/recipes' element={<Recipes/>}/>
                    </Routes>
                <Footer/>
            </div>
        </ThemeProvider>   
        </BrowserRouter>
    );
}

export default App;

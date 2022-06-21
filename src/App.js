import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar'
import Recipes from './pages/Recipes';
import Settings from './pages/Settings';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                    <Routes>
                        {/* Main = Home */}
                        <Route path='/' element={<Main/>}/>
                        <Route path='/recipes' element={<Recipes/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

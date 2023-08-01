import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dash from './Compo/Dash';
import Add from './Compo/Add';
import List from './Compo/List';
import Edit from './Compo/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Dash /> } />
          <Route path='/add' element={ <Add /> } />
          <Route path='/list' element={ <List /> } />
          <Route path='/edit/:id' element={ <Edit /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

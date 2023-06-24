import Header from './components/header';
import './reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './GlobalStyle.css'
import PaginaPadrao from './components/PaginaPadrao/Padrao';
import { Footer } from './components/Footer/Footer';
import { Inicio } from './paginas/Inicio/Inicio';

function App() {
  return (

    <BrowserRouter>
      <Header></Header>
         < Routes>
             <Route index path='/' element={<Inicio/>}/>
              <Route path='/adicionar-novo' element={<Inicio/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

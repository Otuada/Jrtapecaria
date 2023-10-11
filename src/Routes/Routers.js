import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "../Paginas/Home/home"
import { Contato } from "../Paginas/Contato/contato"
import { Sobre } from "../Paginas/Sobre/sobre"
import { Portifolio } from "../Paginas/Portifolio/Portifolio"

export const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element ={<Home/>} />
                    <Route path={'/Contato'} element={<Contato/>} />
                    <Route path={'/Sobre'} element={<Sobre/>} />
                    <Route path={'/portifolio'} element={<Portifolio/>} />
                </Routes>     
            </BrowserRouter>
        </div>
    )}
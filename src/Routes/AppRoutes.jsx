import {Routes,Route} from "react-router-dom";
import { NotFound } from "../pages/notfound/Index";
import Login from "../pages/login/Index";
 import {Index as Cadastro} from "../pages/cadastro/Index";
import TipoDoacao from "../pages/tipodoacao/Index";
import Categoria from "../pages/categoria/Index";


export function AppRoutes() {
  return (
    <Routes>
          {/* <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/locaisafetados" element={<LocaisAfetados/>}/>
        <Route path="/fazerdoacao" element={<FazerDoacao/>}/>
        <Route path="/sobre" element={<Sobre/>}/> 
        <Route path="/inicio" element={<Cadastro/>}/>  */}
       <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/> 
         <Route path="/tipodoacao" element={<TipoDoacao/>}/> 
         <Route path="/categoria" element={<Categoria/>}/> 
        <Route path="/notfound" element={<NotFound/>}/>

    </Routes>

)
}


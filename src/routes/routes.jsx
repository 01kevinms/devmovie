import { Route, Routes } from 'react-router-dom'

import Detail from "../containers/Detail";
import Home from '../containers/home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import Defaultlayout from '../layout/Defaultlayout'

function Router() {
  return (
    <Routes>
      <Route element={<Defaultlayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/filmes' element={<Movies />} />
        <Route path='/series' element={<Series />} />
        <Route path='/detalhe/:id' element={<Detail />} />
        <Route path='*' element={<h1>Página não encontrada</h1>} /> {/* 👈 fallback */}
      </Route>
    </Routes>
  )
}
export default Router

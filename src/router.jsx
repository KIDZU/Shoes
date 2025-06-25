import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Main } from './Pages/Main/Main'



export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/:name?" element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

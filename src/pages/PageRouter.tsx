import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NotFoundPage from './NotFoundPage'
import MainPage from './MainPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

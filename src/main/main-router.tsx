import { Route, Routes } from 'react-router-dom';
import { HomeRoutes } from '../features/home/HomeRouter';


export const MainRouter = () => {
  return (
    <Routes>
        {/* JournalApp */}
        <Route path="/*" element={ <HomeRoutes /> } />
    </Routes>
  )
}

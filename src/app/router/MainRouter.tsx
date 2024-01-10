import { HomeRoutes } from 'app/features/home/router/HomeRouter';
import { Route, Routes } from 'react-router-dom';


export const MainRouter = () => {
  return (
    <Routes>

        {/* JournalApp */}
        <Route path="/*" element={ <HomeRoutes /> } />

    </Routes>
  )
}

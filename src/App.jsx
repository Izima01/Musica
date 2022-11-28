import './App.css';
import PageLayout from './Pages/PageLayout'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import Radio from './Pages/Radio'
import Videos from './Pages/Videos'
import { AppProvider } from './Context/GeneralContext';
import { Routes, Route } from 'react-router-dom'
import ChartDetails from './Pages/ChartDetails';


function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/radio' element={<Radio />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='album-details' element={<ChartDetails />} />
          </Route>
        </Routes>
        {/* <PageLayout /> */}
      </AppProvider>
    </div>
  )
}

export default App

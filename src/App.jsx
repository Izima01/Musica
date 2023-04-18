import './App.css';
import PageLayout from './Pages/PageLayout'
import Home from './Pages/Home'
import PlayList from './Pages/PlayList'
import Radio from './Pages/Radio'
import Videos from './Pages/Videos'
import { AppProvider } from './Context/GeneralContext';
import { Routes, Route } from 'react-router-dom'
import ChartDetails from './Pages/ChartDetails';
import MyCollection from './Components/MyCollection';
import MyLikes from './Components/MyLikes';


function App() {
  return (
    <div className="App fancyscroll">
      <AppProvider>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path='playlist' element={<PlayList />}>
              <Route index element={<MyCollection />} />
              <Route path='collections' element={<MyCollection />} />
              <Route path='likes' element={<MyLikes />} />
            </Route>
            <Route path='radio' element={<Radio />} />
            <Route path='videos' element={<Videos />} />
            <Route path='album-details'>
              <Route path=":id" element={<ChartDetails />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </AppProvider>
    </div>
  )
}

export default App

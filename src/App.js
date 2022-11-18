import Navbar from './navbar/navbar'
import Home from './home/home'
import Sidebar from './sidebar/sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddSource from './components/addSource'
import OneNewsDetails from './components/OneNewsDetails'
import AllSources from './components/AllSources'
import RightSidebar from './sidebar/rightSidebar'
import ShowByCategory from './components/ShowByCategory'
import NewsList from './components/NewsList'
import AllWebSources from './components/AllWebSources'
import AllRadioSources from './components/AllRadioSources'
import AllTvSources from './components/AllTvSources'
import ResponseTest from './test/response'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <RightSidebar />
        <Sidebar />
        <div id="page-wrap">
          <Routes>
          <Route path='/responsive' element={<ResponseTest />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/addSource' element={<AddSource />}></Route>
            <Route path='/allSources' element={<AllSources />}></Route>
            <Route path='/allWebSources' element={<AllWebSources />}></Route>
            <Route path='/allRadioSources' element={<AllRadioSources />}></Route>
            <Route path='/allTvSources' element={<AllTvSources />}></Route>
            <Route path='/newslist/:source/:category' element={<NewsList />}></Route>
              <Route path='/showDetails/:title' element={<OneNewsDetails />}></Route>
            <Route path='/category' element={<ShowByCategory />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

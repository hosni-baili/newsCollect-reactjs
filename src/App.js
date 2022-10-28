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
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <RightSidebar />
        <Sidebar />
        <div id="page-wrap">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/addSource' element={<AddSource />}></Route>
            <Route path='/allSources' element={<AllSources />}></Route>
            <Route path='/newslist/:source/:category' element={<NewsList />}></Route>
              <Route path='/showDetails/:title' element={<OneNewsDetails />}></Route>
            <Route path='/category/:cat' element={<ShowByCategory />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

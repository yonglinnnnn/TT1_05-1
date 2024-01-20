import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Test from './pages/test/Test';
import { useState } from 'react';
import Login from './pages/Login/Login';
function App() {
  const [chosenPage, setChosenPage] = useState('Login')
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<LoginForm/>}/> */}
        {/* <Route path='/' element={<Login chosenPage={chosenPage} setChosenPage={setChosenPage}/>}> */}
          <Route path='/' element={<Login chosenPage={chosenPage} setChosenPage={setChosenPage}/>}>
          <Route path='Chapter' element={<Test/>} />
          {/* <Route path='' element={<Sidebar/>} /> */}
          {/* <Route path='chapter' element={<SidebarChapter/>} />
          <Route path='card' element={<CardSection/>}/>
          <Route path='review' element={<Review/>}/> */}
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;

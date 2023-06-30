// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
   apikey=process.env.REACT_APP_NEWS_API
  state={progress:0}

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
            
            <Router> 
            <LoadingBar
              color='#f11946'
              height={4}
              progress={this.state.progress}

               />    
            <Navbar/>
            <Routes>
            <Route exact path="/" element={<Newscomponent setProgress={this.setProgress} key="general" apikey={this.apikey} pageSize={10} country ="in" category="general"/>}></Route>
            <Route exact path="/business" element={<Newscomponent  setProgress={this.setProgress}key="business" apikey={this.apikey} pageSize={10} country ="in" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<Newscomponent  setProgress={this.setProgress}key="entertainment" apikey={this.apikey} pageSize={10} country ="in" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<Newscomponent setProgress={this.setProgress} key="general" apikey={this.apikey} pageSize={10} country ="in" category="general"/>}></Route>
            <Route exact path="/health" element={<Newscomponent setProgress={this.setProgress}  key="health" apikey={this.apikey} pageSize={10} country ="in" category="health"/>}></Route>
            <Route exact path="/science" element={<Newscomponent setProgress={this.setProgress} key="science" apikey={this.apikey} pageSize={10} country ="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<Newscomponent setProgress={this.setProgress} key="sports" apikey={this.apikey} pageSize={10} country ="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<Newscomponent setProgress={this.setProgress} key="technology" apikey={this.apikey} pageSize={10} country ="in" category="technology"/>}></Route>
            </Routes>
            </Router>
            <Footer/>
      </div>
    )
  }
}

export default App






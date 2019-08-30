import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Device from './Device'
import Spinner from './Spinner'
import ProductDetail from './Product'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      device:"",
      deviceList:{},
      loadingData:false,
      noProduct:false,
  }
   
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.Home=this.Home.bind(this)
  }

handleClick(){
   this.setState({ loadingData:true })

   fetch("https://cellquick.ng/api/search/?device="+this.state.device)
   .then(response=>response.json())
   .then(data=>{

    this.setState({deviceList:data?data:[],loadingData:false,noProduct:data?false:true })
   
    this.Home()
 })
 

}

handleChange(event)
{
  let {value} =event.target
  this.setState({
  device:value
  })
  
}


Home(){
  let messageStyle={marginTop:'150px',color:'grey',fontWeight:'700',fontSize:'3em'}
  return (<div className="container-fluid">
    {
       this.state.deviceList.length ? <Device deviceList={this.state.deviceList}/>:!this.state.loadingData? 
       !this.state.noProduct?
       <center style={messageStyle}>A react app that searches for products from cellquick.ng APIs</center>:
       null :null
     
    }
    <center style={{marginTop:'200px',zIndex:'1000'}}>

    {this.state.loadingData?<h1><Spinner /></h1>:null}

    </center>

    <center style={messageStyle}>

    {this.state.noProduct?"Product does not exist":null}

    </center>
    </div>)
}

  


  render(){
    let props={
      handleClick:this.handleClick,
      handleChange:this.handleChange
    }
    return (
      <Router>
     
    <Navbar {...props}/>
    
    
    <Switch>
    <Route path="/" exact component={this.Home} /> 
    <Route path="/Product/:id" component={ProductDetail} /> 
    </Switch>
    </Router>
 
  )
  }
  
}



export default App;

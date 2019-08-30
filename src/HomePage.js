import React from "react"
import Spinner from './Spinner'
import Device from './Device'

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={deviceList:props.deviceList,loadingData:props.loadingData,noProduct:props.noProduct}
		console.log(props)
	}

	render()
	{
		return (<div className="container-fluid">
    {
       this.state.deviceList.length ? <Device deviceList={this.state.deviceList}/>: null 
     
    }
    <center style={{marginTop:'200px',zIndex:'1000'}}>{this.state.loadingData?<h1><Spinner /></h1>:null}</center>

    <center style={{marginTop:'200px'}}>{this.state.noProduct?<h2>Product does not exist</h2>:null}</center>
    </div>)
	}
}

export default Home
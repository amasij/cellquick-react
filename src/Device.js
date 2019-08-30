import React from "react"
import Devicecomponent from './Devicecomponent'

class Device extends React.Component
{



	render(){
		
	let devices=this.props.deviceList.map((device)=>{
		let property={
			key:device.id,
			id:device.id,
			name:device.name,
			image:device.image
		}
		return <Devicecomponent {...property}/>
	})
	
	return <div className="row">
	{devices}
	</div>
	}
		
		
}

export default Device
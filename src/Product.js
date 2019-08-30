import React from "react"
import ProductComponent from "./ProductComponent"

class ProductDetail extends React.Component
{
	
	constructor(props)
	{

		super(props)
		let id=this.props.match.params.id
		this.state={image:[],ram:[],sim:[],storage:[],color:[]}
		fetch("https://cellquick.ng/api/searchitem/?id="+id)
		.then(response=>response.json())
		.then(data=>{
		this.setState({image:data.image,ram:data.ram,sim:data.sim,color:data.color,storage:data.storage})  
		 })
	}
	
	render()
	{
		let params={
			images:this.state.image,
			colors:this.state.color,
			sims:this.state.sim,
			rams:this.state.ram,
			storages:this.state.storage,
		}
		
		return (<ProductComponent {...params} />)
	}
 
}

export default ProductDetail
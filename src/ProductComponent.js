import React from "react"
import DetailRow from './DetailRow'

function ProductComponent(props)
{
	let colors=props.colors.map(color=><DetailRow details={color} key={color} imageFile={false}/>)
	let rams=props.rams.map(ram=><DetailRow details={ram} key={ram} imageFile={false}/>)
	let sims=props.sims.map(sim=><DetailRow details={sim} key={sim} imageFile={false}/>)
	let storages=props.storages.map(storage=><DetailRow details={storage} key={storage} imageFile={false}/>)
	let images=props.images.map(images=><DetailRow details={images} key={images} imageFile={true}/>)
	return (<div className="container">

		<div className="row" style={{border:'1px solid #cecece'}}>
		<div className="col-sm-2" style={{padding:'3em'}}>
		<b>Colors</b>
		</div>
		<div className="col-sm-10">
		<div className="row">
		{colors}
		</div>
		</div>
		</div>

		<div className="row" style={{border:'1px solid #cecece'}}>
		<div className="col-sm-2" style={{padding:'3em'}}>
		<b>Rams</b>
		</div>
		<div className="col-sm-10">
		<div className="row">
		{rams}
		</div>
		</div>
		</div>

		<div className="row" style={{border:'1px solid #cecece'}}>
		<div className="col-sm-2" style={{padding:'3em'}}>
		<b>Sims</b>
		</div>
		<div className="col-sm-10">
		<div className="row">
		{sims}
		</div>
		</div>
		</div>

		<div className="row" style={{border:'1px solid #cecece'}}>
		<div className="col-sm-2" style={{padding:'3em'}}>
		<b>Storage</b>
		</div>
		<div className="col-sm-10">
		<div className="row">
		{storages}
		</div>
		</div>
		</div>

		<div className="row" style={{border:'1px solid #cecece'}}>
		<div className="col-sm-2" style={{padding:'3em',border:'1px solid #cecece'}}>
		<b>Images</b>
		</div>
		<div className="col-sm-10">
		<div className="row">
		{images}
		</div>
		</div>
		</div>
<br />
		</div>)
}

export default ProductComponent
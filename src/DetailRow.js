import React from "react"


function DetailRow(props)
{
	
	if(!props.imageFile)
	return (<div className="col-sm-3" style={{border:'1px solid #cecece',padding:'3em'}}>{props.details}</div>)
	else
	return (<div className="col-sm-4"><img src={props.details} alt="A Device" className="img-fluid" /></div>)
}

export default DetailRow
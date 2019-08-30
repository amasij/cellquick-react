import React from "react"
import {Link} from 'react-router-dom'

function Devicecomponent(props)
{
	return (
<div className="col-sm-3 product" >
<Link to={`/Product/${props.id}`}>

<img className="img-fluid" src={props.image} alt="imageaa"/>
<center>
<div>
<b style={{fontWeight:'700',fontSize:'1.2rem',color:'#495057'}}>{props.name}</b>
</div>
</center>
</Link>
</div>
		)
}

export default Devicecomponent
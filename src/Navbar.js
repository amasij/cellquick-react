import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props)
{
	return (
<div >
		

<nav className="mb-1 navbar navbar-expand-lg navbar-dark "style={{color: 'black'}} >

  <div className="row" style={{width:'100%'}}>

     <div className="col-sm-1">

         <a className="navbar-brand" href="../../"><img src="logo.png" alt="logo"/></a>

     </div>

     <div className="col-sm-1"></div>

     <div className="col-sm-5" style={{paddingTop:'30px'}}>

        <input 
        type="text" 
        className="form-control form-control-lg" 
        placeholder="Search products"  
        autoComplete="off" 
        onKeyUp={props.handleChange}/>
      </div>
           
  <div className="col-sm-2" >
  <div style={{paddingTop:'30px'}}>
  <Link to='/'>

  <button className="btn" style={{paddingLeft:'1.2rem',paddingRight:'1.2rem',color:'white'}} onClick={props.handleClick}>Search</button>
   
    </Link>
    </div>
    </div>
    <div className="col-sm-3"></div>
    </div> 
    </nav>
<hr />

</div>
)
}
export default Navbar
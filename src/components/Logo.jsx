import React from "react";
import mylogo from './mylogo.jpg'
const Logo=({width='100px'})=>{
    return(
        <>
        <img height={50} width={80} src={mylogo} alt="xyz"/>
        {/* <h1>Logo</h1> */}
        </>
    )
}
export default Logo
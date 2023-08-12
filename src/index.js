import React from "react";
import ReactDOM from "react-dom";
import './index.css';

var curDate = new Date();
curDate = curDate.getHours();
console.log(curDate);
var greeting = "";
var style = { }

if (curDate >= 1 && curDate > 12) {
    greeting = "Good Morning";
    style.color = "green";
}
else if (curDate >= 12 && curDate > 19){
    greeting = "Good Afternoon";
    style.color = "orange";
}else{
    greeting = "Good Night";
    style.color = "black";
}


var a = "https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/17467/ga_2.png";
var y = "http://jdtbus.in/JayDwarkadhishTravels/gallery/images/site/Banner%20Image%2007%207.jpg";
var x = "https://microsites-websitebuilder.s3.amazonaws.com/images/tulsitravels.in-gallery-4-1677753490.jpg";

var z = "https://www.vrundavantravel.com/";

ReactDOM.render(
    <>
        <h1 className="heading">Hello Sir, <span style={ style }>{greeting}</span></h1>
        <h1 className="heading">Book Tickets With Krupal</h1>
        
        <div className="imageStyle">
        <a href="http://www.tulsitravels.in/" target= "_blank"><img src={x} alt="Sample" /></a>
        <a href= "https://jdtbus.in/" target= "_blank"><img  src={y} alt="Sample" /></a>
        <a href= {z} target= "_krupal"><img src={a}  alt="Sample" /></a>
        </div>
        
       
        
    </>,

document.getElementById("root"));
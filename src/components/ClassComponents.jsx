import React from "react";

class Class1 extends React.Component{
    render(){
        return(
            <h3>I AM the FIRST CLASS COMPONENT AND <Class2></Class2></h3>
        )
    }
}

class Class2 extends React.Component{
    render(){
        return(
            <h3>I AM THE SECOND CLASS COMPONENT AND <FunctionalComponent></FunctionalComponent></h3>
        )
    }
}

function FunctionalComponent()
{
 return(
    <h4>I AM A FUNCTIONAL COMPONENT</h4>
 )
}

export default Class1;
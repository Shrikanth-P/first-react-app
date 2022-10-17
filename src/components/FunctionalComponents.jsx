import React from "react";
import '../styles/FunctionalStyle.css';

function Function1() {
    return(
        <h5>HI Function Component 1<Functional2></Functional2></h5>
    )
}
const Functional2=()=>{
    return(
        <div>
        <h6>ARROW FUNCTIONAL COMPONENT 1</h6>
        <table style={{width:'100'}}>
        <thead>
            <tr>
               <Functional3></Functional3>
            </tr>
        </thead>
    </table>
    </div>
    )
}
const Functional3=()=>{
    return(
        <React.Fragment>
        <td>SNO</td>&nbsp;
        <td>NAME</td>&nbsp;
        <td>AGE</td>&nbsp;
        <td>DESIGNATION</td>&nbsp;
        </React.Fragment>
    )
}
export default Function1;
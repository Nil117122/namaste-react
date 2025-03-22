import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutClass extends React.Component{
    
    constructor(){
        super();
    }

    componentDidMount(){
        console.log("Parent Component mounted");
    }
    render(){
        return (
                    <div>
                        <h1>About Us</h1>
                        <h3>This is Namaste React web series</h3>
                        <UserClass name={"Nilanjan Roy (class)"} location={"Kolkata class"}/>
                    </div>
                )
    }
}
// const About = ()=>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h3>This is Namaste React web series</h3>
//             <UserClass name={"Nilanjan Roy (class)"} location={"Kolkata class"}/>
//         </div>
//     )
// }

export default AboutClass;
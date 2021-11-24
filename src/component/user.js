
import React ,{ Component } from 'react';
import './user.css'


class User extends Component{
    constructor(){
        super()
          this.state={
              data:[],
              DataisLoaded:false
          };
    }
    Updatadata=()=>{
       fetch("https://reqres.in/api/users?page=1")
       .then((res)=>res.json())
       .then((json)=>{
           this.setState({
                   data:json.data,
                   DataisLoaded:true
               })
    console.log(json.data)
            })
    }
    render(){
     return (
     <div>
         <div className="navbar">
         <h1>Let's Grow more</h1>
          <button onClick={this.Updatadata} >Get users</button>
         </div>
         
         <section className="Data">
             {this.state.data.map(e=>{
                 return(
                    <div className="p1">
                    <img src={e.avatar} alt=""></img>
                    <p>{e.email}</p>
                    <p>{e.first_name+" "+e.last_name}</p>
                </div>
                 )
             })}
        </section>  

        </div>
      
    )

}

}

export default User
import React,{Component} from 'react';
import ChildComponent from './ChildComp';

class ParentClass extends Component{

   constructor(){
        super()

        this.state = {
        count:10,
        text:''
    }


        this.increment = this.increment.bind(this);   

    }


   increment(){
         console.log('before increment click',this.state.count);//0
         this.setState({count:this.state.count + 1},()=>{
             console.log('after increment click',this.state.count);
         }) ;  
    
    }


    decrement=()=>{
        this.setState({count:this.state.count - 1})
    }


    handleClick = (e) =>{
        //console.log(e);
        //console.log(e.target.value);
        this.setState({text:e.target.value})
    }
   
    render(){
        return(
            <div className="counter-div">
                <button 
                className="btn-cls"
                onClick={this.decrement}>Decrement</button>
                <span>{this.state.count}</span>
                <button
                className="btn-cls"
                onClick={this.increment}>Increment</button>

                <input onChange={this.handleClick}/>
                <p>{this.state.text}</p>

                <ChildComponent 
                count ={this.state.count}
                    handleIncrement ={this.increment}/> 

            </div>
        )
    } 

}

export default ParentClass;

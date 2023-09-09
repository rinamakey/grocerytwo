import {Component} from 'react';
import check from'./5.png';


export class TodoList extends Component{

state={
    userInput:"",
    groceryList:[]
}
changeUser(e){
    this.setState({userInput: e})
    console.log(e)
}
addItem(input){
    if(input===''){
        alert("Пожжалуйста введите текс!")
    }
    else{
    let listToDo = this.state.groceryList;
    listToDo.push(input);
    this.setState({groceryList:listToDo,userInput:''})
    console.log(listToDo)
}  }
deleteWord(event){
    const li = event.target;
    li.classList.toggle('delete');
}
deleteItem(){
    let listToDo=this.state.groceryList;
    listToDo=[];
    this.setState({groceryList: listToDo})
}

render(){
    return(
<div>
    <div className='conteiner'>
        <input type="text"
        placeholder='complete your to-do list'
        onChange={(e)=>{this.changeUser(e.target.value)}}
        value={this.state.userInput}/>
    </div>
    <div className='conteiner' >
        <button className="add " onClick={()=>this.addItem(this.state.userInput)}>ADD</button>
    </div>
   
        <ul>
        {this.state.groceryList.map((item,index)=><li onClick={this.deleteWord} key={index}><img src={check}width="40px"/>{item}</li>)}
        </ul>
        <div className='conteiner'>
        <button className="addtwo" onClick={() => this.deleteItem()}>DELETE</button>
        </div>
</div> 
)
}


}

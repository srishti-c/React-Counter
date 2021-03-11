import React from 'react';
import Counters from './components/counters'
import Navbar from './components/Navbar'

class App extends React.Component {

  state = {  
    counters : [{id : 0, value:1}, {id : 1, value:2}, {id : 2, value:4}, {id : 3, value:6}, ],
    count : 0,
}

handleDelete= (id) =>{
    const counter = this.state.counters.filter(count => count.id !== id)
    this.setState({counters : counter})
}

handleReset = () => {
    const counters = this.state.counters.map(counter => {
        counter.value = 0
        return counter
    }   
    );
    this.setState({counters : counters})
}

handleCounter=(counter)=>{
   const counters = [...this.state.counters];
   const index = counters.indexOf(counter);
 //  counters[index] = {...counter};
   counters[index].value++;

   this.setState({counters});
   
}

handleDecrement = (counter) => {
  console.log('counter', counter)
  const counters = [...this.state.counters];
  let index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({counters});
}

 render(){

  return (
    <div >
<Navbar NoCounters = {this.state.counters.filter( counter => counter.value !== 0).length}/>
<main className="container">
   <Counters 
      handleCounter= {this.handleCounter}
      handleReset = {this.handleReset}
      handleDelete = {this.handleDelete}
      handleDecrement = {this.handleDecrement}
      counters = {this.state.counters}
   />
</main>
</div>
  );
 }
}


export default App;

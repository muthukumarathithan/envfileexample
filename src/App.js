import React,{Component} from 'react';

class App extends Component {
  render() {
    return (      
        <div>
          {console.log(process.env.REACT_APP_NAME)
          }
          <h1>{process.env.REACT_APP_NAME}</h1>
        </div> 
    );
  }
}
 
export default App;



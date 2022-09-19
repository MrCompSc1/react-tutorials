import './App.css';
import React from 'react';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
      return ( 
          <div>
              <Heading />
              <p>Hello {this.props.name}</p> 
          </div>    
      );
  }
};

const Heading = () => {
  return (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's the subtitle</p>
    </div>
  );
};

const Hello = (
  <HelloMessage name="Stuart" />
)

function App() {
  return (
    Hello
  );
}

export default App;
import './App.css';
import React from 'react';

const Heading = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's the subtitle</p>
  </div>
);

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return ( 
        <div>
            <p>Hello {this.props.name}</p> 
        </div>    
    );
  }
};

class HelloPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return ( 
        <div>
            {Heading}
            <HelloMessage name="Stuart" />
        </div>    
    );
  }
};

function App() {
  return (
    <HelloPage />
  );
}

export default App;
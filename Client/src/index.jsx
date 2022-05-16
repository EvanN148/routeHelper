import  React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx'
//import useState from 'react';
//const [buttonMain, setButtonMain] = useState('New Route')

class App extends React.Component {

  componentDidMount() {
    fetch('/fetchRequest')
    .then(response => response.text())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <div className='navbar' >
          <h1 >Team Sheet</h1>
        </div>
        <Form />
        <div className='result' ></div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'))
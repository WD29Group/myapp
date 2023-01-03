import logo from './logo.svg';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <MessengerCustomerChat
          pageId="mark.wd29"
          appId="449264861753855"
        />,
    </div>
  );
}

export default App;
//mark.wd296449264861753855
//m.me/112254835081759


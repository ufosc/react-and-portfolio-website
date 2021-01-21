import logo from './logo.svg';
import './App.css';

function ExampleComponent(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello {props.name}, how are you today?
                </p>
            </header>
        </div>
    );
}

export default ExampleComponent;

import logo from './logo.svg';
import './App.css';
import ContactList from './Exercises 1,2 and 3/components/ContactList';
import Clock from './Exercises 4,5 and 6/components/Clock';
import ClockF from './Exercises 4,5 and 6/components/ClockF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Ejercicios de los modulos 1, 2 y 3 */}
        {/*<ContactList />*/}
        {/* Ejercicios de los modulos 4, 5 y 6 */}
        {/* 
        
        */}
        <Clock />
        <p>-----------------------------------</p>
        <ClockF name="Martín" lastName="San José"/>
      </header>
    </div>
  );
}

export default App;

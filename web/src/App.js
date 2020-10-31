import './App.css';
import Button from './components/Button/Button';
import Label from './components/Label/Label';
import TextField from './components/TextField/TextFIeld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button layout="defaultButton" label="Add" />
        <Button layout="largeButton" label="Create Project" />
        <Label type="bigTitle" text="Create a new project"/>
        <Label type="mediumTitle" text="To Do"/>
        <Label type="smallTitle" text="Project ABC"/>
        <TextField placeholder="Task"/>
      </header>
    </div>
  );
}

export default App;

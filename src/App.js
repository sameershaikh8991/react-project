
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name ="sameer"
function App() {
  return (
    <>
      <Navbar title="iText"/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;

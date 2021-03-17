import './App.css';
import Nkar from './logo192.png'
// import First from './Component/First/First';
// import Sec from './Component/Second/Section';
// import Foot from './Component/Third/Footer';
export function F1(props) {
  return (
    <>
      <p>{props.lastName}</p>
      <p>{props.age}</p>
    </>
  )
}

function App() {
const a = "text"

  return (
    <div className="App">
      {/* <First/>
      <Sec/>
      <Foot/> */}
      <F1 lastName="Asya" age="31" />
      <img src={Nkar} />
      {a}
    </div>
  );
}

export default App;

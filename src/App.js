

import './App.css';
import './Components/styles.css'
import DataStore from './Components/DataStore';
import RoutesComp from './Components/Pages/RoutesComp';
import './Components/styles.css'
function App() {
  return (
    <div className="App">
      <DataStore>
     <RoutesComp/>
     </DataStore> 
    </div>
  );
}

export default App;



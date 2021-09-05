import './App.scss';
import Template from './components/templates/main'
import Peserta from './components/pages/peserta'
import Materi from './components/pages/materi'
import Report from './components/pages/report'
import Tugas from './components/pages/tugas'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Template><Home /></Template>
          </Route>
          <Route path="/tugas-kuis">
            <Template><Tugas /></Template>
          </Route>
          <Route path="/materi-pembelajaran">
            <Template><Materi /></Template>
          </Route>
          <Route path="/report">
            <Template><Report /></Template>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function Home() {
  return <h2>Welcome</h2>;
}


export default App;

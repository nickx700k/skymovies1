import "./styles/App.css";
import "./styles/components.scss";
import "./styles/layout.scss";
import Layout from "./layouts/Layout";
import Provider from "./utilities/Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;

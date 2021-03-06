import Header from "./components/Header";
import Content from "./components/Content";
function App() {
  return (
    <div>
      <Header title="Analysis Tab" />
      <div className="container-fluid">
        <Content />
      </div>
    </div>
  );
}

export default App;

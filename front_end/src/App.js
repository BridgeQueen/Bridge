import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1 className="title">Welcome to Bridge Queen!</h1>
        <p className="info">lorem ipsum</p>
        <button className="btn">Explore Now</button>
      </div>
    </div>
  );
}

export default App;

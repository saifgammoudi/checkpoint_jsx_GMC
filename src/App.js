import './App.css';
import image from "./img.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="title red">checkpoint jsx </h1>
        <br />
        <img src={image} alt="img" />
        <br />
        <img src="/imageInPublic.jpg" alt="myimage" />
      </div>

      <video width="320" height="240" controls>
        <source src="/videosaif.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;

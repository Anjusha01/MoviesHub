import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';
import About from './About';

function App() {

  return (
    <>
    <p>
    Film, series of still photographs on film, projected in rapid succession onto a screen by means of light. Because of the optical phenomenon known as persistence of vision, this gives the illusion of actual, smooth, and continuous movement.

(Read Martin Scorsese’s Britannica essay on film preservation.)

A popular form of mass media, film is a remarkably effective medium for conveying drama and evoking emotion. The art of motion pictures is exceedingly complex, requiring contributions from nearly all the other arts as well as countless technical skills (for example, in sound recording, photography, and optics). Emerging at the end of the 19th century, this new art form became one of the most popular and influential media of the 20th century and beyond. See also "the history of film."
    </p>
    <About/>
    {/* <div className=" d-flex justify-content-center">
      <div className="d-flex justify-content-around p-3 m-3">
        <input type="text" className="rounded-pill" onChange={handleChange} />
        <button className='rounded-pill' onClick={handleSubmit}>Search</button>
      </div>
    </div>


      <div className='d-flex flex-wrap justify-content-center '>
      {data.map((item, index) => (
          <Link to={`/detail/${item.imdbID}`} key={index}>
            <Card className='m-1 border-0 shadow'>
              <Card.Img src={item.Poster} alt="Movie Poster" />
            </Card>
          </Link>
        ))}
    </div> */}
</>

  );
}

export default App;

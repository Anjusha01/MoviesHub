import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const movie = location.state?.results || [];

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {movie.map((item, index) => (
                
                <Link to={`/detail/${item.imdbID}`} key={index}>
                <Card className='m-1 border-0 shadow'>
                  <Card.Img src={item.Poster} alt="Movie Poster" />
                </Card>
                </Link>
            ))}
        </div>
    );
}

export default Search;

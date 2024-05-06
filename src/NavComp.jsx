import React, { useState } from 'react';
import { Navbar, Row, Col, Form, Button, Nav, NavItem } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NavComp() {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    let handleChange = (event) => {
        setTitle(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`);
            console.log(response.data.Search);
            navigate('/search', { state: { results: response.data.Search } });
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        }
    };

    return (
        <Navbar className='mx-3 p-3'>
            <NavLink to='/' className='text-reset text-decoration-none'>
                <Navbar.Brand className='fw-bolder fs-3 text-reset logo'>MoviesHub</Navbar.Brand>
            </NavLink>
            <Nav>
                <NavItem>
                    
                <NavLink to='/about' className='text-reset text-decoration-none'>About</NavLink>
                </NavItem>
            </Nav>
            <Form className='ms-auto' onSubmit={handleSubmit}>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}

export default NavComp;

import React, { useState, useEffect, useDebugValue } from 'react'
import { Routes, Route, useParams, Link,useNavigate  } from 'react-router-dom';
import { Row, Col, Image, Button, Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions';

import Loader from '../components/Loader.js'
import Message from '../components/Message.js'

// 
function ProductScreen({ match }) {

    const dispatch = useDispatch()
    const userId = useParams().id;
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    useEffect(() => {
        dispatch(listProductDetails(userId))
    }, [dispatch])
    const [qty,setQty] = useState(1)
    const navigate=useNavigate()
    const addToCartHandler = () => {
        navigate(`/cart/${userId}?qty=${qty}`)
    }
    return (
         <div>
            <Link to='/' className='btn btn-light my-3'>go back</Link>

            {loading ? <Loader />
                : error ? <Message variant='danger' >{error}</Message>
                    : <div>
                        <Row>
                            <Col md={6}>
                                <Image src={product.image} alt={product.name} fluid />
                            </Col>
                            <Col md={3}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {product.rating} from {product.numReviews}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Rs. {product.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {product.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Price:
                                                </Col>
                                                <Col>
                                                    <strong>Rs. {product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Status:
                                                </Col>
                                                <Col>
                                                    {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Qty</Col>
                                                        <Col xs='auto' className='my-1'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {

                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )}
                                        <ListGroup.Item>
                                                <Button
                                                    onClick={addToCartHandler}
                                                    className='btn-block'
                                                    disabled={product.countInStock === 0}
                                                    type='button'>
                                                    Add to Cart
                                                </Button>
                                            </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                        {product.name}
                    </div>
            }
        </div>
    )
}

export default ProductScreen
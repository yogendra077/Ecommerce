import React, { useState } from 'react'
import {  useNavigate, } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import FormContainer from '../components/FormContainer'



function ShippingScreen() {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [state, setState] = useState(shippingAddress.state)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  
  const dispatch = useDispatch()
  const navigate=useNavigate() 
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ city, address, postalCode, state }))
    console.log('submitted');
    navigate('/payment')
  }

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type='address'
            placeholder='Enter address'
            value={address ? address : ''}
            onChange={(e) => setAddress(e.target.value)}
          >
          </Form.Control>

          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type='city'
            placeholder='Enter city'
            value={city ? city : ''}
            onChange={(e) => setCity(e.target.value)}
          >
          </Form.Control>

          <Form.Label>PostalCode</Form.Label>
          <Form.Control
            required
            type='PostalCode'
            placeholder='Enter PostalCode'
            value={postalCode ? postalCode : ''}
            onChange={(e) => setPostalCode(e.target.value)}
          >
          </Form.Control>

          <Form.Label>State</Form.Label>
          <Form.Control
            required
            type='State'
            placeholder='Enter State'
            value={state ? state : ''}
            onChange={(e) => setState(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          save
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
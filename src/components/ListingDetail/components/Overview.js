import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import { Row, Col, Button, message } from 'antd'
import {
  StarOutlined,
  StarFilled,
  InteractionFilled,
  consoleSqlOutlined
} from '@ant-design/icons'
import { BASE_URL, TOKEN_KEY } from '../../../constants/constants'

import '../styles/Overview.css'
//TODO: change token 
const Overview = props => {
  //
  const { listingInfo, userId } = props
  const category = listingInfo.category
  const title = listingInfo.title
  const location = listingInfo.city_and_state
  const price = listingInfo.price
  const date = listingInfo.date
  const listingId = listingInfo.listing_id
  const sellerId = listingInfo.seller_id

  const [isSave, setIsSave] = useState([])
  const [isLogIn, setIsLogIn] = useState([])
  const [isSeller, setIsSeller] = useState([])

  const url = useEffect(() => {
    //initState()
    test()
  }, [])

  const test = () => {
    setIsSeller(false) //check if user is seller
    setIsSave(false) //check if this is saved by buyer
    setIsLogIn(true) //check if user is login
  }

  const initState = () => {
    //TODO: init isSave isLogIn isSeller
    if (sellerId === userId) {
      setIsSeller(true)
    } else {
      setIsSeller(false)
    }
  }

  const onSaveClick = () => {
    console.log('Save btn clicked')
    if (!isLogIn) {
      //TODO: link to login page
      console.log('Buyer save without login. Go to login page')
    } else {  
      saveListing(!isSave)
      //setIsSave(!isSave)
      console.log('negate save star')
      
    }
  }

  const saveListing = async save => {
    
    console.log("saveListing",save)
    const url = `${BASE_URL}/save`
    const request = save == true ? 'POST' : 'DELETE'
    const opt = {
      method: request,
      url: url,
      headers: {
        Authorization: `Bearer ${TOKEN_KEY}`
      },
      data: {
        user_id: userId,
        listing_id: listingId
      }
    }

    try {
      const response = await axios(opt)
      if (response.status === 200) {
        setIsSave(!isSave)
        console.log('Save/Unsave listing')
      }
    } catch (err) {
      const action = save ? "Save":"Unsave"
      message.error(`${action} listing failed`)
      console.log(`${action} listing failed: `, err.message)
    }
  }

  const onEditClick = () => {
    console.log('Edit btn clicked')
    console.log('Go to edit listing page')
    // TODO: route to edit listing page
  }

  return (
    <div>
      <Row>
        <Row className='catergries'>Catergries / {category}</Row>
        <Col xs={24} sm={24} md={16} lg={16} xl={24} xl={24} xxl={16}>
          <Row className='product-name'>{title}</Row>
          <Row className='date-location'>
            <div>
              Listed {moment(date, 'YYYYMMDD').fromNow()} in {location}
            </div>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8} className='btn'>
          {isSeller === false ? ( //isSeller for testing
            <Button
              size='large'
              className='star'
              icon={
                isSave === true ? ( //isSave for testing
                  <StarFilled style={{ color: 'black' }} />
                ) : (
                  <StarOutlined style={{ color: 'black' }} />
                )
              }
              onClick={onSaveClick}
            />
          ) : (
            <Button onClick={onEditClick}>Edit</Button>
          )}
        </Col>
      </Row>
      <Row className='price'>
        <div>${price}</div>
      </Row>
    </div>
  )
}

export default Overview

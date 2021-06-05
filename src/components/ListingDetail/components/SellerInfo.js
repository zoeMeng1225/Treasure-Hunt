import React, { useState } from 'react'
import { Modal, Row, Col, Button, Divider, Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import '../styles/SellerInfo.css'

const SellerInfo = props => {
  const { sellerName, address } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      <Row className='seller-section'>
        <div style={{ fontWeight: 'bold' }}>Seller Info</div>
        <Divider />
        <Col span={18}>
          <Row>
            <Col className='center'>
              <Avatar size={64} icon={<UserOutlined />} />
            </Col>
            <Col className='seller-info'>
              <Row style={{ fontWeight: 'bold' }}>{sellerName}</Row>
              <Row>Location: {address}</Row>
            </Col>
          </Row>
        </Col>
        <Col span={6}  align="right" >
          <Button
            className='contact-btn'
            type='primary'
            shape='round'
            onClick={showModal}
          >
            Send a message
          </Button>
          <Modal
            title="Here is seller's email"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p> johndoe@gmail.com</p>
          </Modal>
        </Col>
      </Row>
    </div>
  )
}

SellerInfo.propTypes = {}

export default SellerInfo

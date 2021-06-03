import React from "react"
import { Carousel } from "antd"
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import "../styles/Pictures.css"

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
}

const Pictures = props => {
  //const { pictureUrls } = props.pictureUrls
  return (
    <div>
      <Carousel
        className="carousel"
        autoplay
        // arrows
        // nextArrow={<ArrowRightOutlined />}
        // prevArrow={<ArrowLeftOutlined />}
        swipeToSlide={true}
      >
        <img
          src={
            "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          }
          className="picture"
          alt="no pictuire"
        />
        <img
          src={
            "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          }
          className="picture"
          alt="no pictuire"
        />
      </Carousel>
    </div>
  )
}

export default Pictures

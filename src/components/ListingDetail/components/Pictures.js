import React from "react";
import { Carousel } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "../styles/Pictures.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Pictures = (props) => {
  const { pictureUrls } = props;
  const urls = Object.values(pictureUrls)
  //console.log(Object.values(pictureUrls));


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
        {urls.map((url) => {
          return <img  src={url}  />;
        })}
      </Carousel>
    </div>
  );
};

export default Pictures;

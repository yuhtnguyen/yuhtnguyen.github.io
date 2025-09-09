import React, { useRef } from "react";
import { Typography, Button, Row, Col, Carousel } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Home = () => {
  const carouselRef = useRef(null);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/file/CV_ThuyNT_IT_SE.pdf";
    link.download = "CV_ThuyNT_IT_SE.pdf";
    link.click();
  };

  const goToSlide = (slideIndex) => {
    carouselRef.current?.goTo(slideIndex);
  };

  // Mỗi slide chứa hình ảnh + nội dung
  const slides = [
    {
      image: "/image/01.jpg",
      heading: "UI/UX Designer",
      subheading: "Designing Intuitive and Engaging User Experiences",
      description:
        "Focused on user-centered design with clean and accessible interfaces to improve user satisfaction. Figma, Ant Design, Responsive Design,...",
      buttonText: "View Projects",
      buttonLink: "https://github.com/yuhtnguyen",
    },
    {
      image: "/image/02.jpg",
      heading: "QA/QC Engineer",
      subheading: "Ensuring Quality Through Precise Testing",
      description:
        "Experienced in manual testing, writing test cases, and collaborating with development teams to deliver high-quality software. Manual Testing, Test Case Design, Bug Reporting, JIRA, Postman, SQL,...",
      buttonText: "Learn More",
      buttonLink: "https://linkedin.com/in/yuhtnguyen",
    },
  ];

  return (
    <div
      className="home-container"
      style={{
        marginTop: "-88px", // Đẩy lên để đè lên margin-top và padding của layout-content
        marginLeft: "-24px",
        marginRight: "-24px",
        marginBottom: "0px", // Giữ khoảng cách an toàn với footer
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Carousel full panel */}
      <Carousel
        ref={carouselRef}
        autoplay
        autoplaySpeed={5000}
        dots={false}
        effect="slide"
        dotPosition="bottom"
        swipeToSlide={true}
        touchMove={true}
        draggable={true}
        style={{
          position: "relative",
          marginTop: "0px", // Không cần margin vì đã điều chỉnh container
        }}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                minHeight: "calc(100vh - 100px)", // Tăng margin để tạo không gian cho dots
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #ffeef7 0%, #ffc1cc 100%)",
                padding: "35px 20px 35px 20px", // Cân bằng padding top và bottom
                "@media (max-width: 768px)": {
                  padding: "25px 10px 25px 10px", // Mobile cũng cân bằng
                  minHeight: "auto",
                },
              }}
            >
              <Row
                gutter={[40, 40]}
                align="middle"
                justify="center"
                style={{
                  maxWidth: "1400px", // Tăng từ 1200px lên 1400px
                  width: "100%",
                  background: "white",
                  borderRadius: "20px",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  minHeight: "500px", // Tăng từ 450px lên 500px
                  height: "auto",
                }}
              >
                {/* Nội dung bên trái */}
                <Col
                  xs={24}
                  md={12}
                  style={{
                    padding: "45px", // Tăng từ 35px lên 45px
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Title
                    level={2}
                    style={{
                      fontSize: "clamp(2rem, 3vw, 3rem)",
                      fontWeight: "bold",
                      color: "#2c3e50",
                      marginBottom: "16px",
                    }}
                  >
                    {slide.heading}
                  </Title>
                  <Title
                    level={4}
                    style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                      color: "#e91e63",
                      marginBottom: "24px",
                    }}
                  >
                    {slide.subheading}
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      color: "#555",
                      marginBottom: "32px",
                    }}
                  >
                    {slide.description}
                  </Paragraph>

                  <div
                    style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
                  >
                    <Button
                      type="primary"
                      size="large"
                      href={slide.buttonLink}
                      target="_blank"
                      style={{
                        height: "50px",
                        padding: "0 28px",
                        fontSize: "16px",
                        borderRadius: "25px",
                        background: "linear-gradient(45deg, #e91e63, #f06292)",
                        border: "none",
                        boxShadow: "0 6px 20px rgba(233,30,99,0.3)",
                      }}
                    >
                      {slide.buttonText}
                    </Button>

                    <Button
                      size="large"
                      icon={<DownloadOutlined />}
                      onClick={handleDownloadCV}
                      style={{
                        height: "50px",
                        padding: "0 28px",
                        fontSize: "16px",
                        borderRadius: "25px",
                        border: "2px solid #e91e63",
                        color: "#e91e63",
                        background: "white",
                        fontWeight: "600",
                      }}
                    >
                      Download CV
                    </Button>
                  </div>
                </Col>

                {/* Hình ảnh bên phải */}
                <Col
                  xs={24}
                  md={12}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "420px", // Tăng từ 380px lên 420px
                      overflow: "hidden",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.heading}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain", // Thay đổi từ "cover" thành "contain" để hiển thị toàn bộ ảnh
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Dots Navigation - Đặt trong phạm vi an toàn */}
      <div
        className="carousel-custom-dots"
        style={{
          position: "absolute",
          bottom: "35px", // Giảm từ 40px xuống 25px để cân bằng với padding
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1001,
          display: "flex",
          gap: "12px",
        }}
      >
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => goToSlide(dotIndex)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.8)",
              backgroundColor: "transparent",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(233, 30, 99, 0.8)";
              e.target.style.borderColor = "#e91e63";
              e.target.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.8)";
              e.target.style.transform = "scale(1)";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { useRef } from "react";
import { Typography, Button, Row, Col, Carousel } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

// Constants
const THEME_COLORS = {
  primary: "#e91e63",
  secondary: "#f06292",
  text: "#2c3e50",
  textMuted: "#555",
};

const SLIDE_DATA = [
  {
    images: ["/image/01.jpg", "/image/02.jpg", "/image/03.jpg"], // Mảng nhiều ảnh
    heading: "UI/UX Designer",
    subheading: "Designing Intuitive and Engaging User Experiences",
    description:
      "Focused on user-centered design with clean and accessible interfaces to improve user satisfaction. Figma, Ant Design, Responsive Design,...",
    buttonText: "View Projects",
    buttonLink: "https://github.com/yuhtnguyen",
  },
  {
    images: ["/image/02.jpg", "/image/01.jpg", "/image/avt.jpg"], // Mảng nhiều ảnh
    heading: "QA/QC Engineer",
    subheading: "Ensuring Quality Through Precise Testing",
    description:
      "Experienced in manual testing, writing test cases, and collaborating with development teams to deliver high-quality software. Manual Testing, Test Case Design, Bug Reporting, JIRA, Postman, SQL,...",
    buttonText: "Learn More",
    buttonLink: "https://linkedin.com/in/yuhtnguyen",
  },
];

const STYLES = {
  container: {
    marginTop: "-88px",
    marginLeft: "0", // Đổi từ -24px về 0 để cân bằng
    marginRight: "0", // Đổi từ -24px về 0 để cân bằng
    marginBottom: "0px",
    width: "100vw",
    overflow: "hidden",
  },
  carousel: {
    position: "relative",
    marginTop: "0px",
  },
  slideWrapper: {
    minHeight: "calc(100vh - 100px)",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #ffeef7 0%, #ffc1cc 100%)",
    padding: "35px", // Đổi từ "35px 20px" thành "35px" để trái/phải bằng nhau
  },
  panel: {
    maxWidth: "1400px",
    width: "100%",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
    overflow: "hidden",
    minHeight: "500px",
    height: "auto",
    margin: "0 auto", // Đảm bảo panel được căn giữa
  },
  contentCol: {
    padding: "45px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "clamp(2rem, 3vw, 3rem)",
    fontWeight: "bold",
    color: THEME_COLORS.text,
    marginBottom: "16px",
  },
  subheading: {
    fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
    color: THEME_COLORS.primary,
    marginBottom: "24px",
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: THEME_COLORS.textMuted,
    marginBottom: "32px",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  primaryButton: {
    height: "50px",
    padding: "0 28px",
    fontSize: "16px",
    borderRadius: "25px",
    background: `linear-gradient(45deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})`,
    border: "none",
    boxShadow: "0 6px 20px rgba(233,30,99,0.3)",
  },
  secondaryButton: {
    height: "50px",
    padding: "0 28px",
    fontSize: "16px",
    borderRadius: "25px",
    border: `2px solid ${THEME_COLORS.primary}`,
    color: THEME_COLORS.primary,
    background: "white",
    fontWeight: "600",
  },
  imageCol: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: "420px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr", // Cột 1 lớn hơn cột 2
    gridTemplateRows: "1fr 1fr", // 2 hàng
    gap: "10px", // Khoảng cách giữa các ảnh
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    padding: "10px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease, filter 0.3s ease",
    borderRadius: "12px",
    cursor: "pointer",
  },
  imageSpecial: {
    gridColumn: "1",
    gridRow: "span 2",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "35px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1001,
    display: "flex",
    gap: "12px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "2px solid rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
  },
};

const Home = () => {
  const carouselRef = useRef(null);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/file/CV_ThuyNT_IT_SE.pdf";
    link.download = "CV_ThuyNT_IT_SE.pdf";
    link.click();
  };

  const goToSlide = (slideIndex) => carouselRef.current?.goTo(slideIndex);

  const handleDotHover = (e, isEnter) => {
    if (isEnter) {
      e.target.style.backgroundColor = "rgba(233, 30, 99, 0.8)";
      e.target.style.borderColor = THEME_COLORS.primary;
      e.target.style.transform = "scale(1.2)";
    } else {
      e.target.style.backgroundColor = "transparent";
      e.target.style.borderColor = "rgba(255, 255, 255, 0.8)";
      e.target.style.transform = "scale(1)";
    }
  };

  const renderSlide = (slide, index) => (
    <div key={index}>
      <div style={STYLES.slideWrapper}>
        <Row
          gutter={[40, 40]}
          align="middle"
          justify="center"
          style={STYLES.panel}
        >
          <Col xs={24} md={12} style={STYLES.contentCol}>
            <Title level={2} style={STYLES.heading}>
              {slide.heading}
            </Title>
            <Title level={4} style={STYLES.subheading}>
              {slide.subheading}
            </Title>
            <Paragraph style={STYLES.description}>
              {slide.description}
            </Paragraph>
            <div style={STYLES.buttonContainer}>
              <Button
                type="primary"
                size="large"
                href={slide.buttonLink}
                target="_blank"
                style={STYLES.primaryButton}
              >
                {slide.buttonText}
              </Button>
              <Button
                size="large"
                icon={<DownloadOutlined />}
                onClick={handleDownloadCV}
                style={STYLES.secondaryButton}
              >
                Download CV
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12} style={STYLES.imageCol}>
            <div style={STYLES.imageContainer}>
              {slide.images.map((imageSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imageSrc}
                  alt={`${slide.heading} ${imgIndex + 1}`}
                  style={{
                    ...STYLES.image,
                    ...(imgIndex === 0 ? STYLES.imageSpecial : {}), // Ảnh đầu lớn hơn
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.filter = "brightness(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.filter = "brightness(1)";
                  }}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );

  const renderDots = () => (
    <div className="carousel-custom-dots" style={STYLES.dotsContainer}>
      {SLIDE_DATA.map((_, dotIndex) => (
        <button
          key={dotIndex}
          onClick={() => goToSlide(dotIndex)}
          style={STYLES.dot}
          onMouseEnter={(e) => handleDotHover(e, true)}
          onMouseLeave={(e) => handleDotHover(e, false)}
        />
      ))}
    </div>
  );

  return (
    <div className="home-container" style={STYLES.container}>
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
        style={STYLES.carousel}
      >
        {SLIDE_DATA.map(renderSlide)}
      </Carousel>
      {renderDots()}
    </div>
  );
};

export default Home;

import { useRef, useState } from "react";
import { Typography, Button, Row, Col, Carousel, Modal, List, Tag, Divider } from "antd";
import { DownloadOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// Constants
const THEME_COLORS = {
  primary: "#e91e63",
  secondary: "#f06292",
  text: "#2c3e50",
  textMuted: "#555",
};

const SLIDE_DATA = [
  {
    images: ["/image/07.jpg", "/image/08.jpg", "/image/09.jpg"],
    heading: "QA/QC Engineer",
    subheading: "Ensuring Quality Through Precise Testing",
    description:
      "Experienced in manual testing, writing test cases, and collaborating with development teams to deliver high-quality software. Manual Testing, Test Case Design, Bug Reporting, JIRA, Postman, SQL,...",
    buttonText: "Learn More",
    profileDetails: {
      title: "My QA/QC Engineering Experience",
      subtitle: "Quality Assurance & Software Testing Expertise",
      experience: "1+ year",
      specialization: "Manual Testing, API Testing, Bug Tracking",
      keySkills: ["Manual Testing", "Test Case Design", "JIRA", "Postman", "SQL", "Bug Reporting", "API Testing"],
      projects: [
        {
          name: "FPT Software - Software Tester Intern",
          period: "08/2023 – 11/2024",
          description: "Executed 500+ test cases, reported bugs via JIRA, performed API testing with Postman"
        },
        {
          name: "GCIF – Capstone Project Management System",
          period: "4/2025 – 8/2025",
          description: "QA Testing for thesis management system, ensured system stability and user experience"
        }
      ],
      achievements: [
        "Successfully executed 500+ test cases based on requirements",
        "Collaborated with development teams to verify fixes and ensure product quality",
        "Gained hands-on experience in the complete software testing lifecycle",
        "Researched requirements and wrote comprehensive test cases",
        "Performed API testing using Postman and basic SQL queries"
      ],
      expertise: [
        "Manual Testing Methodologies",
        "Test Case Design and Execution",
        "Bug Identification and Reporting",
        "API Testing with Postman",
        "Collaboration with Development Teams",
        "Quality Assurance Best Practices",
        "JIRA for Bug Tracking and Project Management"
      ],
      tools: ["JIRA", "Postman", "SQL", "Excel", "Test Management Tools"],
      strengths: [
        "Strong attention to detail and analytical thinking",
        "Excellent communication skills for cross-team collaboration",
        "Proactive approach to identifying potential issues",
        "Quick learner with ability to adapt to new technologies",
        "Commitment to delivering high-quality software products"
      ]
    }
  },
  {
    images: ["/image/01.jpg", "/image/02.jpg", "/image/03.jpg"],
    heading: "UI/UX Designer",
    subheading: "Designing Intuitive and Engaging User Experiences",
    description:
      "Focused on user-centered design with clean and accessible interfaces to improve user satisfaction. Figma, Ant Design, Responsive Design,...",
    buttonText: "Learn More",
    profileDetails: {
      title: "My UI/UX Design Experience",
      subtitle: "User-Centered Design & Interface Development",
      experience: "2+ years",
      specialization: "UI Design, UX Research, Prototyping",
      keySkills: ["Figma", "UI Design", "UX Design", "Prototyping", "User Research", "Responsive Design", "Design Systems"],
      projects: [
        {
          name: "GCIF – Capstone Project Management System",
          period: "4/2025 – 8/2025",
          description: "Designed UI wireframes and user flows in Figma, ensuring usability and accessibility"
        },
        {
          name: "BrainBox – E-learning Platform",
          period: "2024",
          description: "Designed wireframes and prototypes using Figma to streamline user experience"
        }
      ],
      achievements: [
        "Designed intuitive user interfaces that improved user satisfaction",
        "Created wireframes and prototypes that streamlined development process",
        "Ensured responsive design across different device sizes",
        "Collaborated effectively with development teams for design implementation",
        "Applied user-centered design principles to enhance usability"
      ],
      expertise: [
        "User Interface (UI) Design",
        "User Experience (UX) Research",
        "Wireframing and Prototyping",
        "Responsive Web Design",
        "Design System Creation",
        "User Flow and Journey Mapping",
        "Accessibility and Usability Testing"
      ],
      tools: ["Figma", "Ant Design", "Adobe Creative Suite", "Prototyping Tools", "Design Systems"],
      strengths: [
        "Strong visual design sense and attention to aesthetics",
        "Deep understanding of user-centered design principles",
        "Ability to translate complex requirements into intuitive interfaces",
        "Excellent collaboration skills with development teams",
        "Continuous learning of modern design trends and best practices"
      ]
    }
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/file/CV_ThuyNT.pdf";
    link.download = "CV_ThuyNT_TESTER.pdf";
    link.click();
  };

  const showJobModal = (profileDetails) => {
    setSelectedJob(profileDetails);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedJob(null);
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
                onClick={() => showJobModal(slide.profileDetails)}
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
      
      {/* Profile Details Modal */}
      <Modal
        title={
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <Title level={3} style={{ margin: 0, color: THEME_COLORS.primary }}>
              {selectedJob?.title}
            </Title>
            <Text style={{ color: THEME_COLORS.textMuted, fontSize: "16px" }}>
              {selectedJob?.subtitle}
            </Text>
          </div>
        }
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose} style={{ marginRight: "10px" }}>
            Close
          </Button>,
          <Button
            key="contact"
            type="primary"
            style={{
              background: `linear-gradient(45deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})`,
              border: "none",
            }}
            onClick={() => {
              // Chuyển đến trang Contact
              window.location.href = '/contact';
              handleModalClose();
            }}
          >
            Contact Me
          </Button>,
        ]}
        width={800}
        centered
        bodyStyle={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        {selectedJob && (
          <div>
            {/* Experience Overview */}
            <Row gutter={[16, 8]} style={{ marginBottom: "20px" }}>
              <Col span={12}>
                <Text strong>Experience: </Text>
                <Text style={{ color: THEME_COLORS.primary, fontWeight: "bold" }}>{selectedJob.experience}</Text>
              </Col>
              <Col span={12}>
                <Text strong>Specialization: </Text>
                <Text>{selectedJob.specialization}</Text>
              </Col>
            </Row>

            <Divider />

            {/* Key Skills */}
            <div style={{ marginBottom: "20px" }}>
              <Title level={5} style={{ color: THEME_COLORS.primary }}>Key Skills</Title>
              <div>
                {selectedJob.keySkills?.map((skill, index) => (
                  <Tag key={index} color="pink" style={{ margin: "4px" }}>
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>

            <Divider />

            {/* Projects */}
            <div style={{ marginBottom: "20px" }}>
              <Title level={5} style={{ color: THEME_COLORS.primary }}>Recent Projects</Title>
              {selectedJob.projects?.map((project, index) => (
                <div key={index} style={{ marginBottom: "15px", padding: "10px", background: "#f9f9f9", borderRadius: "8px" }}>
                  <Text strong style={{ color: THEME_COLORS.text }}>{project.name}</Text>
                  <br />
                  <Text style={{ color: THEME_COLORS.textMuted, fontSize: "12px" }}>{project.period}</Text>
                  <br />
                  <Text>{project.description}</Text>
                </div>
              ))}
            </div>

            <Divider />

            {/* Achievements */}
            <div style={{ marginBottom: "20px" }}>
              <Title level={5} style={{ color: THEME_COLORS.primary }}>Key Achievements</Title>
              <List
                size="small"
                dataSource={selectedJob.achievements}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircleOutlined style={{ color: THEME_COLORS.primary, marginRight: "8px" }} />
                    {item}
                  </List.Item>
                )}
              />
            </div>

            <Divider />

            {/* Expertise */}
            <div style={{ marginBottom: "20px" }}>
              <Title level={5} style={{ color: THEME_COLORS.primary }}>Areas of Expertise</Title>
              <List
                size="small"
                dataSource={selectedJob.expertise}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircleOutlined style={{ color: THEME_COLORS.secondary, marginRight: "8px" }} />
                    {item}
                  </List.Item>
                )}
              />
            </div>

            <Divider />

            {/* Tools & Technologies */}
            <div style={{ marginBottom: "20px" }}>
              <Title level={5} style={{ color: THEME_COLORS.primary }}>Tools & Technologies</Title>
              <div>
                {selectedJob.tools?.map((tool, index) => (
                  <Tag key={index} color="blue" style={{ margin: "4px" }}>
                    {tool}
                  </Tag>
                ))}
              </div>
            </div>

            <Divider />

            {/* Strengths */}
            <div>
              <Title level={5} style={{ color: THEME_COLORS.primary }}>Professional Strengths</Title>
              <List
                size="small"
                dataSource={selectedJob.strengths}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    {item}
                  </List.Item>
                )}
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Home;

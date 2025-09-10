import React from "react";
import { Typography, Row, Col, Card, Tag, Avatar } from "antd";
import { CodeOutlined, BugOutlined, ToolOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const About = () => {
  const programmingSkills = [
    "JavaScript",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "SQL",
    "Java",
  ];

  const qaSkills = [
    "Manual Testing",
    "Test Case Design",
    "Test Planning",
    "Bug Reporting",
    "JIRA",
    "Postman",
    "Selenium (Basic)",
    "API Testing",
    "Performance Testing",
  ];

  const toolSkills = [
    "GitHub",
    "Figma",
    "Motiff",
    "Vercel",
    "Agile/Scrum",
    "MS Office",
  ];

  const renderSkillGroup = (title, skills, icon, color) => (
    <Card
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {React.cloneElement(icon, { style: { color } })}
          <span style={{ color: "#2d3748" }}>{title}</span>
        </div>
      }
      style={{ marginBottom: "24px" }}
    >
      <div>
        {skills.map((skill) => (
          <Tag key={skill} className="skill-tag" color={color}>
            {skill}
          </Tag>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="page-container">
      <Title level={1} className="section-title" style={{ color: "#e91e63" }}>
        About Me
      </Title>

      <Row gutter={[32, 32]} align="middle">
        <Col
          xs={24}
          md={8} // Tăng từ 6 lên 8 để avatar có nhiều không gian hơn
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={{ xs: 200, sm: 240, md: 280, lg: 320, xl: 360 }} // Tăng kích thước avatar lớn hơn
            src="/image/avt.jpg"
            style={{
              border: "6px solid #df7e9eff", // Đổi border thành màu hồng
              display: "block",
              margin: "0 auto",
              boxShadow: "0 12px 35px rgba(233, 30, 99, 0.2)", // Shadow màu hồng nhạt
            }}
          />
        </Col>

        <Col xs={24} md={16}>
          <Title
            level={3}
            style={{
              color: "#f06292",
              fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
            }}
          >
            Hello! I'm Nguyen Thi Thuy
          </Title>
          <Paragraph
            className="responsive-text"
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "16px",
              color: "#4a5568", // Màu xám đậm dễ đọc
            }}
          >
            I'm an IT student with a strong foundation in Software Engineering,
            passionate about creating user-friendly web applications and
            ensuring software quality.
          </Paragraph>
          <Paragraph
            className="responsive-text"
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "16px",
              color: "#4a5568", // Màu xám đậm dễ đọc
            }}
          >
            With hands-on experience in frontend development, UI/UX design, and
            software testing, I bring a well-rounded perspective to building
            reliable and scalable digital solutions.
          </Paragraph>
          <Paragraph
            className="responsive-text"
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "16px",
              color: "#4a5568", // Màu xám đậm dễ đọc
            }}
          >
            My journey in tech started with curiosity about how technology
            works, driving me to explore modern web frameworks, testing tools,
            and design principles. I aim to continuously learn, grow, and
            contribute to innovative projects while collaborating in dynamic
            teams.
          </Paragraph>
        </Col>
      </Row>

      <Title
        level={3}
        style={{
          marginTop: "48px",
          marginBottom: "32px",
          color: "#f06292",
          textAlign: "center",
          fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
        }}
      >
        Skills & Expertise
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          {renderSkillGroup(
            "Programming",
            programmingSkills,
            <CodeOutlined />,
            "blue"
          )}
        </Col>
        <Col xs={24} md={8}>
          {renderSkillGroup(
            "Quality Assurance",
            qaSkills,
            <BugOutlined />,
            "green"
          )}
        </Col>
        <Col xs={24} md={8}>
          {renderSkillGroup(
            "Tools & Technologies",
            toolSkills,
            <ToolOutlined />,
            "orange"
          )}
        </Col>
      </Row>
    </div>
  );
};

export default About;

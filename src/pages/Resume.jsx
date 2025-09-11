import { Typography, Card, Row, Col, Space } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// Theme colors matching other pages
const THEME_COLORS = {
  primary: "#e91e63",
  secondary: "#f06292",
  text: "#2c3e50",
  textMuted: "#4a5568",
};

const Resume = () => {
  const experiences = [
    {
      title: "Software Tester Intern",
      company: "FPT Software",
      period: "",
      description: [
        "Gained hands-on experience in the software testing lifecycle",
        "Researched requirements and wrote comprehensive test cases",
        "Executed 500+ test cases based on requirements and reported bugs via JIRA",
        "Performed basic API testing using Postman",
        "Collaborated with developers to verify fixes and ensure product quality",
      ],
    },
    {
      title: "Frontend Developer, QA Tester & UI/UX Designer",
      company: "GCIF – Capstone Project Management System",
      period: "4/2025 – 8/2025",
      techStack: "React, Ant Design, Next.js",
      description: [
        "Built responsive user interfaces to manage thesis groups and defense results",
        "Designed UI wireframes and user flows in Figma, ensuring usability and accessibility",
        "Implemented Excel file import and data display with filtering and sorting",
        "Wrote and executed test cases, tracked and verified bugs to maintain system stability",
      ],
    },
    {
      title: "Frontend Developer, QA Tester & UI/UX Designer",
      company: "BrainBox – E-learning Platform",
      period: "",
      techStack: "Next.js, NestJS, Swagger, Figma",
      description: [
        "Developed responsive pages for course management and learning features",
        "Designed wireframes and prototypes using Figma to streamline user experience",
        "Conducted manual testing and ensured seamless integration between frontend and backend",
        "Collaborated with team to improve performance and UI consistency",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology",
      school: "FPT Quy Nhon University",
      period: "2021 - 2025",
      description:
        "GPA: 8.2/10. Specialized in Software Engineering and Quality Assurance. Gained comprehensive knowledge in web development, software testing, and UI/UX design through hands-on projects and internships.",
    },
  ];

  return (
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <Title
          level={1}
          className="section-title"
          style={{
            color: THEME_COLORS.primary,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            textShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          Resume
        </Title>
        <Paragraph
          style={{
            fontSize: "clamp(16px, 3vw, 18px)",
            marginBottom: "24px",
            color: THEME_COLORS.secondary,
            lineHeight: "1.6",
          }}
        >
          View my professional experience and background below
        </Paragraph>
      </div>

      <Row gutter={[32, 32]}>
        {/* Education & Contact Info */}
        <Col xs={24} lg={8}>
          <Title
            level={3}
            style={{ color: THEME_COLORS.primary, marginBottom: "16px" }}
          >
            Education
          </Title>
          {education.map((edu, index) => (
            <Card
              key={index}
              style={{
                marginBottom: "24px",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(233, 30, 99, 0.1)",
                border: "1px solid rgba(233, 30, 99, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(233, 30, 99, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(233, 30, 99, 0.1)";
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <Title level={4} style={{ marginBottom: "4px" }}>
                  {edu.degree}
                </Title>
                <Text strong style={{ color: THEME_COLORS.primary }}>
                  {edu.school}
                </Text>
                <Text style={{ float: "right", color: "#666" }}>
                  {edu.period}
                </Text>
              </div>
              <Text>{edu.description}</Text>
            </Card>
          ))}

          <Card
            title="Contact Information"
            style={{
              marginBottom: "24px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(233, 30, 99, 0.1)",
              border: "1px solid rgba(233, 30, 99, 0.1)",
            }}
          >
            <Space direction="vertical" size="middle">
              <div>
                <MailOutlined
                  style={{ marginRight: "8px", color: THEME_COLORS.primary }}
                />
                <Text>nguyenthithuy1022003@gmail.com</Text>
              </div>
              <div>
                <PhoneOutlined
                  style={{ marginRight: "8px", color: THEME_COLORS.primary }}
                />
                <Text>0366640761</Text>
              </div>
            </Space>
          </Card>

          <Card
            title="Skills Summary"
            style={{
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(233, 30, 99, 0.1)",
              border: "1px solid rgba(233, 30, 99, 0.1)",
            }}
          >
            <div style={{ marginBottom: "16px" }}>
              <Text strong>Frontend Development:</Text>
              <br />
              <Text>React</Text>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Text strong>Design & Testing:</Text>
              <br />
              <Text>Figma, UI/UX Design, Manual Testing, JIRA, Postman</Text>
            </div>
            <div>
              <Text strong>Development Tools:</Text>
              <br />
              <Text>Github, Clickup, Motiff, Figma,...</Text>
            </div>
          </Card>
        </Col>

        {/* Experience */}
        <Col xs={24} lg={16}>
          <Title level={3} style={{ color: THEME_COLORS.primary }}>
            Work Experience
          </Title>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              style={{
                marginBottom: "24px",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(233, 30, 99, 0.1)",
                border: "1px solid rgba(233, 30, 99, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(233, 30, 99, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(233, 30, 99, 0.1)";
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <Title level={4} style={{ marginBottom: "4px" }}>
                  {exp.title}
                </Title>
                <Text strong style={{ color: THEME_COLORS.primary }}>
                  {exp.company}
                </Text>
                <Text style={{ float: "right", color: "#666" }}>
                  {exp.period}
                </Text>
                {exp.techStack && (
                  <div style={{ marginTop: "8px" }}>
                    <Text strong>Tech Stack: </Text>
                    <Text style={{ color: THEME_COLORS.textMuted }}>
                      {exp.techStack}
                    </Text>
                  </div>
                )}
              </div>
              <ul style={{ paddingLeft: "20px" }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    <Text>{item}</Text>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Resume;

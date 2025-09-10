import { Typography, Button, Card, Row, Col, Space, Divider } from "antd";
import {
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Resume = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Nguyen_Thi_Thuy_CV.pdf";
    link.click();
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: [
        "Developed and maintained web applications using React, Node.js, and MongoDB",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "QA Engineer",
      company: "Quality Systems Ltd.",
      period: "2022 - 2023",
      description: [
        "Performed manual and automated testing for web and mobile applications",
        "Created comprehensive test plans and test cases",
        "Identified and reported software defects using bug tracking systems",
        "Collaborated with development teams to ensure quality standards",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2021 - 2022",
      description: [
        "Assisted in developing frontend components using React and JavaScript",
        "Participated in agile development processes and daily standups",
        "Learned and applied modern web development best practices",
        "Contributed to API integration and database design",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2018 - 2022",
      description:
        "Graduated with honors. Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
    },
  ];

  return (
    <div className="page-container">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <Title level={2} className="section-title">
          Resume
        </Title>
        <Paragraph style={{ fontSize: "16px", marginBottom: "24px" }}>
          Download my complete resume or view the summary below
        </Paragraph>
        <Button
          type="primary"
          size="large"
          icon={<DownloadOutlined />}
          onClick={handleDownloadCV}
        >
          Download Full Resume (PDF)
        </Button>
      </div>

      <Row gutter={[32, 32]}>
        {/* Contact Info */}
        <Col xs={24} lg={8}>
          <Card title="Contact Information" style={{ marginBottom: "24px" }}>
            <Space direction="vertical" size="middle">
              <div>
                <MailOutlined
                  style={{ marginRight: "8px", color: "#1677ff" }}
                />
                <Text>your.email@example.com</Text>
              </div>
              <div>
                <PhoneOutlined
                  style={{ marginRight: "8px", color: "#1677ff" }}
                />
                <Text>+84 123 456 789</Text>
              </div>
            </Space>
          </Card>

          <Card title="Skills Summary">
            <div style={{ marginBottom: "16px" }}>
              <Text strong>Programming:</Text>
              <br />
              <Text>JavaScript, TypeScript, React, Node.js, Python</Text>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Text strong>Databases:</Text>
              <br />
              <Text>MongoDB, PostgreSQL, MySQL</Text>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Text strong>Tools:</Text>
              <br />
              <Text>Git, Docker, AWS, Vercel, Jira</Text>
            </div>
            <div>
              <Text strong>Testing:</Text>
              <br />
              <Text>Jest, Cypress, Selenium, Manual Testing</Text>
            </div>
          </Card>
        </Col>

        {/* Experience & Education */}
        <Col xs={24} lg={16}>
          <Title level={3} style={{ color: "#1677ff" }}>
            Work Experience
          </Title>
          {experiences.map((exp, index) => (
            <Card key={index} style={{ marginBottom: "24px" }}>
              <div style={{ marginBottom: "16px" }}>
                <Title level={4} style={{ marginBottom: "4px" }}>
                  {exp.title}
                </Title>
                <Text strong style={{ color: "#1677ff" }}>
                  {exp.company}
                </Text>
                <Text style={{ float: "right", color: "#666" }}>
                  {exp.period}
                </Text>
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

          <Divider />

          <Title level={3} style={{ color: "#1677ff" }}>
            Education
          </Title>
          {education.map((edu, index) => (
            <Card key={index} style={{ marginBottom: "24px" }}>
              <div style={{ marginBottom: "16px" }}>
                <Title level={4} style={{ marginBottom: "4px" }}>
                  {edu.degree}
                </Title>
                <Text strong style={{ color: "#1677ff" }}>
                  {edu.school}
                </Text>
                <Text style={{ float: "right", color: "#666" }}>
                  {edu.period}
                </Text>
              </div>
              <Text>{edu.description}</Text>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Resume;

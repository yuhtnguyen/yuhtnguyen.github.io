import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Space,
  Form,
  Input,
  message,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

// Theme colors matching other pages
const THEME_COLORS = {
  primary: "#e91e63",
  secondary: "#f06292",
  text: "#2c3e50",
  textMuted: "#4a5568",
};

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    // Handle form submission - could integrate with email service
    message.success("Message sent successfully! I will get back to you soon.");
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <MailOutlined style={{ color: THEME_COLORS.primary }} />,
      title: "Email",
      content: "nguyenthithuy1022003@gmail.com",
      action: "mailto:nguyenthithuy1022003@gmail.com",
    },
    {
      icon: <PhoneOutlined style={{ color: THEME_COLORS.primary }} />,
      title: "Phone",
      content: "0366640761",
      action: "tel:0366640761",
    },
    {
      icon: <EnvironmentOutlined style={{ color: THEME_COLORS.primary }} />,
      title: "Location",
      content: "Quy Nhon, Binh Dinh, Vietnam",
      action: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubOutlined />,
      url: "https://github.com/yuhtnguyen",
      color: THEME_COLORS.text,
    },
    {
      name: "LinkedIn",
      icon: <LinkedinOutlined />,
      url: "https://www.linkedin.com/in/nguy%E1%BB%85n-th%C3%BAy-b61790383/",
      color: THEME_COLORS.primary,
    },
  ];

  return (
    <div className="page-container">
      <Title
        level={2}
        className="section-title"
        style={{
          color: THEME_COLORS.primary,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          textShadow: "0 2px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        Get In Touch
      </Title>

      <Paragraph
        style={{
          textAlign: "center",
          fontSize: "clamp(14px, 2.5vw, 16px)",
          marginBottom: "48px",
          padding: "0 16px",
          color: THEME_COLORS.secondary,
          lineHeight: "1.6",
        }}
      >
        I'm always open to discussing new opportunities, interesting projects,
        or just having a chat about technology. Feel free to reach out through
        any of the channels below!
      </Paragraph>

      <Row gutter={[32, 32]}>
        {/* Contact Information */}
        <Col xs={24} lg={10} xl={8}>
          <Title
            level={3}
            style={{
              color: THEME_COLORS.primary,
              marginBottom: "24px",
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            }}
          >
            Contact Information
          </Title>

          {contactInfo.map((info, index) => (
            <Card
              key={index}
              style={{
                marginBottom: "16px",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(233, 30, 99, 0.1)",
                border: "1px solid rgba(233, 30, 99, 0.1)",
                transition: "all 0.3s ease",
              }}
              hoverable={!!info.action}
              size="small"
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(18px, 4vw, 24px)",
                  }}
                >
                  {info.icon}
                </div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <Text
                    strong
                    style={{
                      display: "block",
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      color: THEME_COLORS.text,
                    }}
                  >
                    {info.title}
                  </Text>
                  {info.action ? (
                    <a
                      href={info.action}
                      style={{
                        color: THEME_COLORS.text,
                        fontSize: "clamp(12px, 2vw, 14px)",
                        wordBreak: "break-all",
                      }}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <Text
                      style={{
                        fontSize: "clamp(12px, 2vw, 14px)",
                        color: THEME_COLORS.text,
                      }}
                    >
                      {info.content}
                    </Text>
                  )}
                </div>
              </div>
            </Card>
          ))}

          <Title
            level={4}
            style={{
              color: THEME_COLORS.primary,
              marginTop: "32px",
              marginBottom: "16px",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            }}
          >
            Follow Me
          </Title>

          <Space size="middle" wrap style={{ justifyContent: "flex-start" }}>
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                type="primary"
                icon={social.icon}
                size="middle"
                href={social.url}
                target="_blank"
                style={{
                  backgroundColor: social.color,
                  borderColor: social.color,
                  fontSize: "clamp(12px, 2vw, 14px)",
                  padding: "8px 16px",
                  height: "auto",
                }}
              >
                {social.name}
              </Button>
            ))}
          </Space>
        </Col>

        {/* Contact Form */}
        <Col xs={24} lg={14} xl={16}>
          <Card
            title={
              <span
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  color: THEME_COLORS.text,
                }}
              >
                Send Me a Message
              </span>
            }
            style={{
              height: "fit-content",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(233, 30, 99, 0.1)",
              border: "1px solid rgba(233, 30, 99, 0.1)",
            }}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    label={
                      <span style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>
                        Your Name
                      </span>
                    }
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input placeholder="Enter your name" size="middle" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label={
                      <span style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>
                        Email Address
                      </span>
                    }
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input placeholder="Enter your email" size="middle" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="subject"
                label={
                  <span style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>
                    Subject
                  </span>
                }
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input placeholder="What is this about?" size="middle" />
              </Form.Item>

              <Form.Item
                name="message"
                label={
                  <span style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>
                    Message
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea
                  rows={6}
                  placeholder="Tell me about your project, question, or just say hello!"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  icon={<SendOutlined />}
                  block
                  style={{
                    height: "auto",
                    padding: "12px 24px",
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    background: `linear-gradient(45deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})`,
                    border: "none",
                    borderRadius: "25px",
                    boxShadow: "0 6px 20px rgba(233,30,99,0.3)",
                  }}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

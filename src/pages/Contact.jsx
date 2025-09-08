import React from 'react'
import { Typography, Row, Col, Card, Button, Space, Form, Input, message } from 'antd'
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  GithubOutlined, 
  LinkedinOutlined,
  SendOutlined
} from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

const Contact = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Form values:', values)
    message.success('Message sent successfully! I will get back to you soon.')
    form.resetFields()
  }

  const contactInfo = [
    {
      icon: <MailOutlined className="contact-icon" />,
      title: 'Email',
      content: 'your.email@example.com',
      action: 'mailto:your.email@example.com'
    },
    {
      icon: <PhoneOutlined className="contact-icon" />,
      title: 'Phone',
      content: '+84 123 456 789',
      action: 'tel:+84123456789'
    },
    {
      icon: <EnvironmentOutlined className="contact-icon" />,
      title: 'Location',
      content: 'Ho Chi Minh City, Vietnam',
      action: null
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GithubOutlined />,
      url: 'https://github.com/yuhtnguyen',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinOutlined />,
      url: 'https://linkedin.com/in/yuhtnguyen',
      color: '#0077b5'
    }
  ]

  return (
    <div className="page-container">
      <Title level={2} className="section-title">Get In Touch</Title>
      
      <Paragraph 
        style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(14px, 2.5vw, 16px)', 
          marginBottom: '48px',
          padding: '0 16px'
        }}
      >
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        Feel free to reach out through any of the channels below!
      </Paragraph>

      <Row gutter={[32, 32]}>
        {/* Contact Information */}
        <Col xs={24} lg={10} xl={8}>
          <Title 
            level={3} 
            style={{ 
              color: '#1677ff', 
              marginBottom: '24px',
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)'
            }}
          >
            Contact Information
          </Title>
          
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              style={{ marginBottom: '16px' }} 
              hoverable={!!info.action}
              size="small"
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{ fontSize: 'clamp(18px, 4vw, 24px)' }}>
                  {info.icon}
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Text 
                    strong 
                    style={{ 
                      display: 'block',
                      fontSize: 'clamp(14px, 2.5vw, 16px)'
                    }}
                  >
                    {info.title}
                  </Text>
                  {info.action ? (
                    <a 
                      href={info.action} 
                      style={{ 
                        color: '#1677ff',
                        fontSize: 'clamp(12px, 2vw, 14px)',
                        wordBreak: 'break-all'
                      }}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <Text style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>
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
              color: '#1677ff', 
              marginTop: '32px', 
              marginBottom: '16px',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)'
            }}
          >
            Follow Me
          </Title>
          
          <Space size="middle" wrap style={{ justifyContent: 'flex-start' }}>
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
                  fontSize: 'clamp(12px, 2vw, 14px)',
                  padding: '8px 16px',
                  height: 'auto'
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
              <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
                Send Me a Message
              </span>
            } 
            style={{ height: 'fit-content' }}
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
                    label={<span style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>Your Name</span>}
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input 
                      placeholder="Enter your name" 
                      size="middle"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label={<span style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>Email Address</span>}
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input 
                      placeholder="Enter your email" 
                      size="middle"
                    />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item
                name="subject"
                label={<span style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>Subject</span>}
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input 
                  placeholder="What is this about?" 
                  size="middle"
                />
              </Form.Item>
              
              <Form.Item
                name="message"
                label={<span style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>Message</span>}
                rules={[{ required: true, message: 'Please enter your message' }]}
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
                    height: 'auto',
                    padding: '12px 24px',
                    fontSize: 'clamp(14px, 2.5vw, 16px)'
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
  )
}

export default Contact

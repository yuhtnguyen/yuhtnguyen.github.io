import React from 'react'
import { Typography, Row, Col, Card, Tag, Avatar } from 'antd'
import { CodeOutlined, BugOutlined, ToolOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const About = () => {
  const programmingSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 
    'HTML5', 'CSS3', 'MongoDB', 'PostgreSQL', 'Express.js', 'Next.js'
  ]

  const qaSkills = [
    'Manual Testing', 'Automated Testing', 'Test Planning', 'Bug Reporting',
    'Selenium', 'Jest', 'Cypress', 'API Testing', 'Performance Testing'
  ]

  const toolSkills = [
    'Git', 'Docker', 'VS Code', 'Jira', 'Postman', 'Figma', 
    'AWS', 'Vercel', 'GitHub Actions', 'Linux'
  ]

  const renderSkillGroup = (title, skills, icon, color) => (
    <Card 
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {React.cloneElement(icon, { style: { color } })}
          {title}
        </div>
      }
      style={{ marginBottom: '24px' }}
    >
      <div>
        {skills.map(skill => (
          <Tag key={skill} className="skill-tag" color={color}>
            {skill}
          </Tag>
        ))}
      </div>
    </Card>
  )

  return (
    <div className="page-container">
      <Title level={2} className="section-title">About Me</Title>
      
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={8} style={{ textAlign: 'center' }}>
          <Avatar
            size={{ xs: 150, sm: 180, md: 200 }}
            src="/profile-photo.jpg"
            style={{ 
              marginBottom: '24px', 
              border: '4px solid #1677ff',
              display: 'block',
              margin: '0 auto 24px'
            }}
          />
        </Col>
        
        <Col xs={24} md={16}>
          <Title 
            level={3} 
            style={{ 
              color: '#1677ff',
              fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)'
            }}
          >
            Hello! I'm Nguyen Thi Thuy
          </Title>
          <Paragraph 
            className="responsive-text"
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.8',
              marginBottom: '16px'
            }}
          >
            I'm a passionate Full Stack Developer and QA Engineer with a strong background in 
            creating robust web applications and ensuring software quality. With experience in 
            both development and testing, I bring a unique perspective to building reliable, 
            user-friendly applications.
          </Paragraph>
          <Paragraph 
            className="responsive-text"
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.8',
              marginBottom: '16px'
            }}
          >
            My journey in tech started with a curiosity about how things work, which led me to 
            explore various programming languages and frameworks. I'm particularly passionate about 
            React ecosystem, modern JavaScript, and creating seamless user experiences.
          </Paragraph>
          <Paragraph 
            className="responsive-text"
            style={{ 
              fontSize: '16px', 
              lineHeight: '1.8',
              marginBottom: '16px'
            }}
          >
            When I'm not coding, I enjoy learning new technologies, contributing to open-source 
            projects, and sharing knowledge with the developer community.
          </Paragraph>
        </Col>
      </Row>

      <Title 
        level={3} 
        style={{ 
          marginTop: '48px', 
          marginBottom: '32px', 
          color: '#1677ff',
          textAlign: 'center',
          fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)'
        }}
      >
        Skills & Expertise
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          {renderSkillGroup(
            'Programming', 
            programmingSkills, 
            <CodeOutlined />, 
            'blue'
          )}
        </Col>
        <Col xs={24} md={8}>
          {renderSkillGroup(
            'Quality Assurance', 
            qaSkills, 
            <BugOutlined />, 
            'green'
          )}
        </Col>
        <Col xs={24} md={8}>
          {renderSkillGroup(
            'Tools & Technologies', 
            toolSkills, 
            <ToolOutlined />, 
            'orange'
          )}
        </Col>
      </Row>
    </div>
  )
}

export default About

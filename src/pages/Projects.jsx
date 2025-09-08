import React from 'react'
import { Typography, Row, Col, Card, Button, Tag, Space } from 'antd'
import { GithubOutlined, EyeOutlined, LinkOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { Meta } = Card

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      githubUrl: 'https://github.com/yuhtnguyen/ecommerce-platform',
      demoUrl: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/project2.jpg',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/yuhtnguyen/task-manager',
      demoUrl: 'https://task-manager-demo.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.',
      image: '/project3.jpg',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      githubUrl: 'https://github.com/yuhtnguyen/weather-dashboard',
      demoUrl: 'https://weather-dashboard-demo.vercel.app',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'This very portfolio website built with React, Ant Design, and deployed on Vercel. Features responsive design and modern UI/UX.',
      image: '/project4.jpg',
      technologies: ['React', 'Ant Design', 'Vite', 'Vercel'],
      githubUrl: 'https://github.com/yuhtnguyen/portfolio',
      demoUrl: 'https://portfolio-demo.vercel.app',
      featured: false
    }
  ]

  const ProjectCard = ({ project }) => (
    <Card
      hoverable
      className="project-card"
      cover={
        <div style={{ 
          height: 'clamp(150px, 20vw, 200px)', 
          background: 'linear-gradient(135deg, #1677ff 0%, #69c0ff 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'clamp(14px, 3vw, 18px)',
          fontWeight: 'bold',
          padding: '16px',
          textAlign: 'center'
        }}>
          {project.title}
        </div>
      }
      actions={[
        <Button 
          type="text" 
          icon={<GithubOutlined />} 
          href={project.githubUrl}
          target="_blank"
          size="small"
        >
          <span className="mobile-hidden">Code</span>
        </Button>,
        <Button 
          type="text" 
          icon={<EyeOutlined />} 
          href={project.demoUrl}
          target="_blank"
          size="small"
        >
          <span className="mobile-hidden">Demo</span>
        </Button>
      ]}
      style={{ height: '100%' }}
    >
      <Meta
        title={
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
              {project.title}
            </span>
            {project.featured && <Tag color="gold" size="small">Featured</Tag>}
          </div>
        }
        description={
          <div>
            <Paragraph 
              style={{ 
                marginBottom: '16px',
                fontSize: 'clamp(12px, 2vw, 14px)',
                lineHeight: '1.5'
              }}
            >
              {project.description}
            </Paragraph>
            <div>
              <strong style={{ fontSize: 'clamp(11px, 2vw, 13px)' }}>
                Tech Stack:
              </strong>
              <div style={{ marginTop: '8px' }}>
                {project.technologies.map(tech => (
                  <Tag 
                    key={tech} 
                    color="blue" 
                    style={{ 
                      margin: '2px',
                      fontSize: 'clamp(10px, 1.5vw, 12px)'
                    }}
                    size="small"
                  >
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        }
      />
    </Card>
  )

  return (
    <div className="page-container">
      <Title level={2} className="section-title">My Projects</Title>
      
      <Paragraph 
        style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(14px, 2.5vw, 16px)', 
          marginBottom: '48px',
          padding: '0 16px'
        }}
      >
        Here are some of the projects I've worked on. Each project showcases different skills 
        and technologies I've learned and applied.
      </Paragraph>

      <Row gutter={[24, 24]} style={{ marginBottom: '48px' }}>
        {projects.map(project => (
          <Col xs={24} sm={12} lg={12} xl={12} key={project.id}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <Button 
          type="primary" 
          size="large" 
          icon={<GithubOutlined />}
          href="https://github.com/yuhtnguyen"
          target="_blank"
        >
          View More on GitHub
        </Button>
      </div>
    </div>
  )
}

export default Projects

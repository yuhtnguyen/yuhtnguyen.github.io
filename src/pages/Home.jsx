import React from 'react'
import { Typography, Button, Row, Col, Avatar, Space } from 'antd'
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Home = () => {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Nguyen_Thi_Thuy_CV.pdf'
    link.click()
  }

  return (
    <div className="page-container">
      <Row 
        justify="center" 
        align="middle" 
        style={{ minHeight: 'calc(100vh - 140px)' }}
        gutter={[24, 24]}
      >
        <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
          <Avatar
            size={{ xs: 120, sm: 150, md: 180, lg: 200 }}
            src="/profile-photo.jpg"
            style={{ 
              marginBottom: '32px', 
              border: '4px solid #1677ff',
              display: 'block',
              margin: '0 auto 32px'
            }}
          />
          
          <Title 
            level={1} 
            className="responsive-title"
            style={{ 
              marginBottom: '16px', 
              color: '#1677ff',
              textAlign: 'center'
            }}
          >
            Nguyen Thi Thuy
          </Title>
          
          <Title 
            level={3} 
            className="responsive-subtitle"
            style={{ 
              marginBottom: '24px', 
              color: '#666',
              textAlign: 'center',
              fontWeight: 400
            }}
          >
            Full Stack Developer & QA Engineer
          </Title>
          
          <Paragraph 
            className="responsive-text"
            style={{ 
              fontSize: '18px', 
              marginBottom: '32px', 
              maxWidth: '600px', 
              margin: '0 auto 32px',
              textAlign: 'center',
              padding: '0 16px'
            }}
          >
            Passionate developer with expertise in modern web technologies and quality assurance. 
            I love creating efficient, scalable solutions and ensuring the highest quality in software products.
          </Paragraph>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '16px'
          }}>
            {/* Primary CTA */}
            <Button 
              type="primary" 
              size="large" 
              icon={<DownloadOutlined />}
              onClick={handleDownloadCV}
              style={{
                height: 'auto',
                padding: '12px 24px',
                fontSize: '16px',
                borderRadius: '6px'
              }}
            >
              Download CV
            </Button>
            
            {/* Secondary CTAs */}
            <Space 
              size="middle" 
              wrap
              style={{ justifyContent: 'center' }}
            >
              <Button 
                size="large" 
                icon={<GithubOutlined />}
                href="https://github.com/yuhtnguyen"
                target="_blank"
                style={{
                  height: 'auto',
                  padding: '8px 16px'
                }}
              >
                <span className="mobile-hidden">GitHub</span>
              </Button>
              <Button 
                size="large" 
                icon={<LinkedinOutlined />}
                href="https://linkedin.com/in/yuhtnguyen"
                target="_blank"
                style={{
                  height: 'auto',
                  padding: '8px 16px'
                }}
              >
                <span className="mobile-hidden">LinkedIn</span>
              </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Home

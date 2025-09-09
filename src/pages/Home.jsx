import React from 'react'
import { Typography, Button, Row, Col, Avatar, Space } from 'antd'
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Home = () => {
  const handleDownloadCV = () => {
    // Download CV file
    const link = document.createElement('a')
    link.href = '/file/CV_ThuyNT_IT_SE.pdf'
    link.download = 'CV_ThuyNT_IT_SE.pdf'
    link.click()
  }

  return (
    <div style={{ 
      marginTop: '-80px', 
      marginBottom: '-24px',
      paddingBottom: '0',
      marginLeft: '-24px',
      marginRight: '-24px'
    }}>
      {/* Hero Banner Section - Full Width */}
      <div style={{
        background: 'linear-gradient(135deg, #ffeef7 0%, #f8d7da 50%, #ffc1cc 100%)',
        height: '100vh',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        paddingTop: '56px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center',
          padding: '0 20px'
        }}>
          <Row 
            justify="center" 
            align="middle" 
            style={{ width: '100%', height: '100%' }}
            gutter={[48, 24]}
          >
            {/* Left Column - Text Content */}
            <Col xs={24} lg={12} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              padding: '20px'
            }}>
              <div style={{ maxWidth: '600px' }}>
                <Title 
                  level={1} 
                  style={{ 
                    fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    marginBottom: '16px',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap'
                  }}
                >
                  Nguyen Thi Thuy
                </Title>
                
                <Title 
                  level={2}
                  style={{ 
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: '600',
                    color: '#e91e63',
                    marginBottom: '24px',
                    lineHeight: 1.3
                  }}
                >
                  Full Stack Developer
                </Title>
                
                <Title 
                  level={3}
                  style={{ 
                    fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                    fontWeight: '500',
                    color: '#666',
                    marginBottom: '32px',
                    lineHeight: 1.4
                  }}
                >
                  & QA Engineer
                </Title>
                
                <Paragraph 
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    color: '#555',
                    marginBottom: '40px',
                    lineHeight: 1.6
                  }}
                >
                  Passionate developer with expertise in modern web technologies 
                  and quality assurance. Creating efficient, scalable solutions 
                  with the highest quality standards.
                </Paragraph>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'row',
                  gap: '16px',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<DownloadOutlined />}
                    onClick={handleDownloadCV}
                    style={{
                      height: '50px',
                      padding: '0 32px',
                      fontSize: '16px',
                      borderRadius: '25px',
                      background: 'linear-gradient(45deg, #e91e63, #f06292)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)'
                    }}
                  >
                    Download CV
                  </Button>
                  
                  <Button 
                    size="large" 
                    icon={<GithubOutlined />}
                    href="https://github.com/yuhtnguyen"
                    target="_blank"
                    style={{
                      height: '50px',
                      padding: '0 24px',
                      borderRadius: '25px',
                      border: '2px solid #e91e63',
                      color: '#e91e63',
                      fontSize: '16px'
                    }}
                  >
                    GitHub
                  </Button>
                  
                  <Button 
                    size="large" 
                    icon={<LinkedinOutlined />}
                    href="https://linkedin.com/in/yuhtnguyen"
                    target="_blank"
                    style={{
                      height: '50px',
                      padding: '0 24px',
                      borderRadius: '25px',
                      border: '2px solid #e91e63',
                      color: '#e91e63',
                      fontSize: '16px'
                    }}
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </Col>

            {/* Right Column - Profile Image */}
            <Col xs={24} lg={12} style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{ position: 'relative' }}>
                {/* Main profile image */}
                <div style={{
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '3px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <Avatar
                    src='/image/avt.jpg'
                    style={{ 
                      width: '320px',
                      height: '320px',
                      border: '4px solid white',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(45deg, #ff9a9e, #fecfef)',
                  borderRadius: '50%',
                  opacity: 0.7
                }} />
                
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '-30px',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(45deg, #a18cd1, #fbc2eb)',
                  borderRadius: '50%',
                  opacity: 0.6
                }} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Home

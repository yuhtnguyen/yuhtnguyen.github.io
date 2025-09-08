import React from 'react'
import { Layout, Space } from 'antd'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    <AntFooter style={{ padding: '24px 16px' }}>
      <div style={{ textAlign: 'center' }}>
        <Space 
          size="large" 
          style={{ marginBottom: '16px' }}
          wrap
        >
          <a 
            href="https://github.com/yuhtnguyen" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#fff', 
              fontSize: 'clamp(18px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <GithubOutlined />
            <span 
              className="mobile-hidden"
              style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}
            >
              GitHub
            </span>
          </a>
          <a 
            href="https://linkedin.com/in/yuhtnguyen" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#fff', 
              fontSize: 'clamp(18px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <LinkedinOutlined />
            <span 
              className="mobile-hidden"
              style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}
            >
              LinkedIn
            </span>
          </a>
          <a 
            href="mailto:your.email@example.com" 
            style={{ 
              color: '#fff', 
              fontSize: 'clamp(18px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <MailOutlined />
            <span 
              className="mobile-hidden"
              style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}
            >
              Email
            </span>
          </a>
        </Space>
        <div style={{ 
          fontSize: 'clamp(11px, 2vw, 13px)',
          opacity: 0.8
        }}>
          © 2025 Nguyen Thi Thuy. All rights reserved.
        </div>
      </div>
    </AntFooter>
  )
}

export default Footer

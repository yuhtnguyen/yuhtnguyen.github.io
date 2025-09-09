import React from 'react'
import { Layout, Space } from 'antd'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    <AntFooter style={{ 
      padding: '12px 16px',
      background: '#ffffff',
      borderTop: '1px solid rgba(233, 30, 99, 0.1)',
      boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Space 
          size="medium" 
          style={{ marginBottom: '6px' }}
          wrap
        >
          <a 
            href="https://github.com/yuhtnguyen" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#666', 
              fontSize: 'clamp(18px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              padding: '4px 8px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#e91e63'
              e.target.style.background = 'rgba(233, 30, 99, 0.05)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#666'
              e.target.style.background = 'transparent'
              e.target.style.transform = 'translateY(0)'
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
              color: '#666', 
              fontSize: 'clamp(18px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              padding: '4px 8px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#e91e63'
              e.target.style.background = 'rgba(233, 30, 99, 0.05)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#666'
              e.target.style.background = 'transparent'
              e.target.style.transform = 'translateY(0)'
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
              color: '#666', 
              fontSize: 'clamp(18px, 4vw, 20px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              padding: '4px 8px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#e91e63'
              e.target.style.background = 'rgba(233, 30, 99, 0.05)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#666'
              e.target.style.background = 'transparent'
              e.target.style.transform = 'translateY(0)'
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
          fontSize: 'clamp(10px, 1.5vw, 12px)',
          opacity: 0.7,
          color: '#666'
        }}>
          © 2025 Nguyen Thi Thuy. All rights reserved.
        </div>
      </div>
    </AntFooter>
  )
}

export default Footer

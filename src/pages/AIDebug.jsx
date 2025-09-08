import React from 'react'
import { Typography, Space } from 'antd'
import AITestPanel from '../components/AITestPanel'
import AISetupGuide from '../components/AISetupGuide'

const { Title } = Typography

const AIDebug = () => {
  return (
    <div className="page-container">
      <Title level={2} className="section-title">AI ChatBot Setup & Testing</Title>
      
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <AITestPanel />
        <AISetupGuide />
      </Space>
    </div>
  )
}

export default AIDebug

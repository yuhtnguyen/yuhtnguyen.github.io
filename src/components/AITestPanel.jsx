import React, { useState } from 'react'
import { Card, Typography, Button, Input, Space, Alert, Divider, Tag } from 'antd'
import { RobotOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { aiService } from '../services/aiService'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

const AITestPanel = () => {
  const [testMessage, setTestMessage] = useState('Tell me about Thuy\'s projects')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiStatus, setApiStatus] = useState(null)

  const testAPI = async () => {
    setLoading(true)
    setResponse('')
    setApiStatus(null)

    try {
      const result = await aiService.getAIResponse(testMessage)
      setResponse(result)
      setApiStatus('success')
    } catch (error) {
      setResponse(`Error: ${error.message}`)
      setApiStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const testQuestions = [
    "Tell me about Thuy's projects",
    "What are her technical skills?",
    "How can I contact her?",
    "Thuy có kinh nghiệm gì về QA?",
    "What makes her a good developer?"
  ]

  return (
    <Card 
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RobotOutlined />
          AI ChatBot Test Panel
        </div>
      }
      style={{ maxWidth: 800, margin: '20px auto' }}
    >
      <Alert
        message="Gemini AI Setup Status"
        description={
          <div>
            <Text>API Key configured: </Text>
            {import.meta.env.VITE_GEMINI_API_KEY && import.meta.env.VITE_GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY' ? (
              <Tag color="green" icon={<CheckCircleOutlined />}>Connected</Tag>
            ) : (
              <Tag color="red" icon={<CloseCircleOutlined />}>Not configured</Tag>
            )}
          </div>
        }
        type={import.meta.env.VITE_GEMINI_API_KEY && import.meta.env.VITE_GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY' ? 'success' : 'warning'}
        style={{ marginBottom: 16 }}
      />

      <Title level={4}>Quick Test Questions:</Title>
      <Space wrap style={{ marginBottom: 16 }}>
        {testQuestions.map((question, index) => (
          <Button 
            key={index}
            size="small"
            onClick={() => setTestMessage(question)}
          >
            {question}
          </Button>
        ))}
      </Space>

      <Paragraph>
        <Text strong>Test Message:</Text>
      </Paragraph>
      <TextArea
        value={testMessage}
        onChange={(e) => setTestMessage(e.target.value)}
        placeholder="Enter your test message here..."
        rows={2}
        style={{ marginBottom: 16 }}
      />

      <Button 
        type="primary" 
        onClick={testAPI} 
        loading={loading}
        block
        style={{ marginBottom: 16 }}
      >
        {loading ? 'Testing AI...' : 'Test AI Response'}
      </Button>

      {response && (
        <>
          <Divider />
          <Title level={4}>
            AI Response:
            {apiStatus === 'success' && <Tag color="green" style={{ marginLeft: 8 }}>Success</Tag>}
            {apiStatus === 'error' && <Tag color="red" style={{ marginLeft: 8 }}>Error</Tag>}
          </Title>
          <Card 
            size="small" 
            style={{ 
              backgroundColor: apiStatus === 'error' ? '#fff2f0' : '#f6ffed',
              border: `1px solid ${apiStatus === 'error' ? '#ffccc7' : '#b7eb8f'}`
            }}
          >
            <Text>{response}</Text>
          </Card>
        </>
      )}

      <Divider />

      <Alert
        message="Setup Instructions"
        description={
          <div>
            <p>1. Get your free Gemini API key: <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer">makersuite.google.com</a></p>
            <p>2. Edit <code>.env.local</code> file and replace <code>YOUR_GEMINI_API_KEY_HERE</code></p>
            <p>3. Restart development server: <code>npm run dev</code></p>
            <p>4. Test API connection using this panel</p>
          </div>
        }
        type="info"
      />
    </Card>
  )
}

export default AITestPanel

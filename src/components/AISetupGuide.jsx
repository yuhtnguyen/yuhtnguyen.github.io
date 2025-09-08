import React, { useState } from 'react'
import { Card, Typography, Steps, Button, Alert, Space, Divider } from 'antd'
import { ApiOutlined, KeyOutlined, SettingOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text, Link } = Typography

const AISetupGuide = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: 'Choose AI Provider',
      content: 'Chọn nhà cung cấp AI',
      icon: <ApiOutlined />
    },
    {
      title: 'Get API Key',
      content: 'Lấy API Key',
      icon: <KeyOutlined />
    },
    {
      title: 'Configure',
      content: 'Cấu hình vào code',
      icon: <SettingOutlined />
    }
  ]

  return (
    <Card style={{ maxWidth: 800, margin: '20px auto' }}>
      <Title level={2}>🤖 Hướng dẫn setup AI cho ChatBot</Title>
      
      <Alert
        message="ChatBot hiện đang hoạt động với Local AI"
        description="Để có trải nghiệm AI thông minh hơn, bạn có thể setup API keys cho Gemini (miễn phí) hoặc OpenAI."
        type="info"
        showIcon
        style={{ marginBottom: 24 }}
      />

      <Steps current={currentStep} items={steps} />

      <div style={{ marginTop: 24 }}>
        {currentStep === 0 && (
          <div>
            <Title level={4}>Bước 1: Chọn AI Provider</Title>
            
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Card size="small" title="🔥 Google Gemini (Khuyến nghị)">
                <Paragraph>
                  <Text strong>✅ Miễn phí</Text><br />
                  ✅ Chất lượng tốt<br />
                  ✅ Dễ setup<br />
                  ✅ Có quota hấp dẫn
                </Paragraph>
                <Button type="primary" href="https://makersuite.google.com/app/apikey" target="_blank">
                  Get Gemini API Key
                </Button>
              </Card>

              <Card size="small" title="💎 OpenAI GPT">
                <Paragraph>
                  <Text type="warning">💰 Có phí (pay-per-use)</Text><br />
                  ✅ Chất lượng cao nhất<br />
                  ✅ Nhiều model options<br />
                  ✅ Stable và reliable
                </Paragraph>
                <Button href="https://platform.openai.com/api-keys" target="_blank">
                  Get OpenAI API Key
                </Button>
              </Card>
            </Space>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <Title level={4}>Bước 2: Lấy API Key</Title>
            
            <Title level={5}>Cho Google Gemini (Miễn phí):</Title>
            <ol>
              <li>Truy cập <Link href="https://makersuite.google.com/app/apikey" target="_blank">Google AI Studio</Link></li>
              <li>Đăng nhập với Google account</li>
              <li>Click "Create API Key"</li>
              <li>Copy API key và lưu lại</li>
            </ol>

            <Title level={5}>Cho OpenAI (Có phí):</Title>
            <ol>
              <li>Truy cập <Link href="https://platform.openai.com/api-keys" target="_blank">OpenAI Platform</Link></li>
              <li>Tạo account và verify</li>
              <li>Add payment method</li>
              <li>Create new API key</li>
              <li>Copy và lưu key</li>
            </ol>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <Title level={4}>Bước 3: Cấu hình vào Code</Title>
            
            <Paragraph>
              Mở file <Text code>src/services/aiService.js</Text> và thay thế:
            </Paragraph>

            <Alert
              message="Gemini Setup"
              description={
                <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px' }}>
{`// Thay thế dòng này:
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY'

// Bằng:
const GEMINI_API_KEY = 'your_actual_gemini_api_key_here'`}
                </pre>
              }
              type="success"
            />

            <div style={{ margin: '16px 0' }}>
              <Text>HOẶC</Text>
            </div>

            <Alert
              message="OpenAI Setup"
              description={
                <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px' }}>
{`// Thay thế dòng này:
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'

// Bằng:
const OPENAI_API_KEY = 'your_actual_openai_api_key_here'`}
                </pre>
              }
              type="warning"
            />

            <Alert
              message="🔒 Bảo mật"
              description="Trong production, hãy sử dụng environment variables thay vì hardcode API keys!"
              type="info"
              style={{ marginTop: 16 }}
            />
          </div>
        )}
      </div>

      <Divider />

      <Space>
        {currentStep > 0 && (
          <Button onClick={() => setCurrentStep(currentStep - 1)}>
            Bước trước
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}>
            Bước tiếp
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type="primary">
            ✅ Hoàn thành!
          </Button>
        )}
      </Space>
    </Card>
  )
}

export default AISetupGuide

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { 
  Button, 
  Input, 
  Card, 
  Space, 
  Avatar, 
  Typography, 
  Divider,
  message 
} from 'antd'
import { 
  MessageOutlined, 
  SendOutlined, 
  CloseOutlined, 
  RobotOutlined,
  UserOutlined,
  MinusOutlined
} from '@ant-design/icons'
import { aiService } from '../services/aiService'

const { Text } = Typography
const { TextArea } = Input

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Xin chào! Tôi là AI assistant của Thuy. Tôi có thể trả lời mọi câu hỏi về kinh nghiệm, kỹ năng, dự án và cách liên hệ với cô ấy. Bạn muốn biết gì? 😊",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const messagesEndRef = useRef(null)
  const abortControllerRef = useRef(null)

  // Memoized scroll function
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  // AI-powered chatbot responses với error handling tốt hơn
  const getBotResponse = useCallback(async (userMessage) => {
    try {
      // Create abort controller for this request
      abortControllerRef.current = new AbortController()
      
      const response = await aiService.getAIResponse(userMessage, {
        signal: abortControllerRef.current.signal
      })
      return response
    } catch (error) {
      if (error.name === 'AbortError') {
        return null // Request was cancelled
      }
      console.error('AI Response Error:', error)
      return "Xin lỗi, tôi đang gặp một chút vấn đề kỹ thuật. Bạn có thể thử hỏi lại hoặc check out các trang About, Projects, Resume để tìm hiểu thêm về Thuy nhé! 😅"
    }
  }, [])

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || isProcessing) return

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = inputValue.trim()
    setInputValue('')
    setIsTyping(true)
    setIsProcessing(true)

    try {
      // Get AI response
      const botResponseText = await getBotResponse(currentInput)
      
      // Check if request was cancelled
      if (botResponseText === null) {
        setIsTyping(false)
        setIsProcessing(false)
        return
      }
      
      // Simulate realistic typing delay (optimized)
      const typingDelay = Math.min(Math.max(botResponseText.length * 20, 500), 2000) // 0.5s-2s
      
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, botResponse])
        setIsTyping(false)
        setIsProcessing(false)
      }, typingDelay)
      
    } catch (error) {
      console.error('Message handling error:', error)
      setTimeout(() => {
        const errorResponse = {
          id: Date.now() + 1,
          text: "Xin lỗi, có lỗi xảy ra. Hãy thử lại nhé! 😅",
          sender: 'bot',
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, errorResponse])
        setIsTyping(false)
        setIsProcessing(false)
      }, 1000)
    }
  }, [inputValue, isProcessing, getBotResponse])

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }, [handleSendMessage])

  // Memoized time formatter
  const formatTime = useMemo(() => {
    return (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }, [])

  if (!isOpen) {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 1000
        }}
      >
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<MessageOutlined />}
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            fontSize: '24px',
            boxShadow: '0 4px 12px rgba(22, 119, 255, 0.3)',
            animation: 'pulse 2s infinite'
          }}
        />
        <style jsx global>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '350px',
        maxWidth: 'calc(100vw - 48px)',
        height: isMinimized ? '60px' : '500px',
        zIndex: 1000,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'height 0.3s ease'
      }}
    >
      <Card
        style={{ 
          height: '100%',
          borderRadius: '12px',
          border: 'none'
        }}
        bodyStyle={{ 
          padding: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1677ff 0%, #69c0ff 100%)',
            color: 'white',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Avatar 
              icon={<RobotOutlined />} 
              style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            />
            <div>
              <Text strong style={{ color: 'white', fontSize: '16px' }}>
                AI Assistant
              </Text>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                {isTyping ? 'Đang suy nghĩ...' : isProcessing ? 'Đang xử lý...' : 'Sẵn sàng hỗ trợ'}
              </div>
            </div>
          </div>
          <Space>
            <Button
              type="text"
              size="small"
              icon={<MinusOutlined />}
              onClick={() => setIsMinimized(!isMinimized)}
              style={{ color: 'white' }}
            />
            <Button
              type="text"
              size="small"
              icon={<CloseOutlined />}
              onClick={() => setIsOpen(false)}
              style={{ color: 'white' }}
            />
          </Space>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div
              style={{
                flex: 1,
                padding: '16px',
                overflow: 'auto',
                backgroundColor: '#f8f9fa'
              }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    marginBottom: '12px'
                  }}
                >
                  <div
                    style={{
                      maxWidth: '80%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row'
                    }}
                  >
                    <Avatar
                      size="small"
                      icon={msg.sender === 'user' ? <UserOutlined /> : <RobotOutlined />}
                      style={{
                        backgroundColor: msg.sender === 'user' ? '#1677ff' : '#52c41a',
                        flexShrink: 0
                      }}
                    />
                    <div>
                      <div
                        style={{
                          backgroundColor: msg.sender === 'user' ? '#1677ff' : 'white',
                          color: msg.sender === 'user' ? 'white' : '#333',
                          padding: '8px 12px',
                          borderRadius: '12px',
                          fontSize: '14px',
                          lineHeight: '1.4',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      >
                        {msg.text}
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: '#999',
                          marginTop: '4px',
                          textAlign: msg.sender === 'user' ? 'right' : 'left'
                        }}
                      >
                        {formatTime(msg.timestamp)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Avatar
                    size="small"
                    icon={<RobotOutlined />}
                    style={{ backgroundColor: '#52c41a' }}
                  />
                  <div
                    style={{
                      backgroundColor: 'white',
                      padding: '8px 12px',
                      borderRadius: '12px',
                      fontSize: '14px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <Divider style={{ margin: 0 }} />

            {/* Input */}
            <div style={{ padding: '16px' }}>
              <Space.Compact style={{ width: '100%' }}>
                <TextArea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  autoSize={{ minRows: 1, maxRows: 3 }}
                  style={{ 
                    resize: 'none',
                    borderRadius: '20px 0 0 20px'
                  }}
                />
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isProcessing}
                  loading={isProcessing}
                  style={{
                    borderRadius: '0 20px 20px 0',
                    height: '32px'
                  }}
                />
              </Space.Compact>
            </div>
          </>
        )}
      </Card>

      <style jsx global>{`
        .typing-indicator {
          display: flex;
          gap: 4px;
        }
        
        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #1677ff;
          animation: typing 1.4s infinite ease-in-out both;
        }
        
        .typing-indicator span:nth-child(1) {
          animation-delay: -0.32s;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: -0.16s;
        }
        
        @keyframes typing {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .ant-card {
            width: calc(100vw - 24px) !important;
            right: 12px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ChatBot

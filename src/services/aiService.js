import axios from 'axios'

// Portfolio context - thông tin về Thuy để AI hiểu và trả lời chính xác
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Nguyen Thi Thuy's portfolio website. You must be friendly, helpful, and professional.

IMPORTANT LANGUAGE RULE:
- If user asks in Vietnamese, you MUST respond in Vietnamese only
- If user asks in English, you MUST respond in English only
- NEVER mix languages in one response
- Detect the user's language from their message and match it exactly

PERSONAL INFO:
- Name: Nguyen Thi Thuy (Thúy)
- Role: Full Stack Developer & QA Engineer
- Location: Ho Chi Minh City, Vietnam
- Languages: Vietnamese (native), English (fluent)

TECHNICAL SKILLS:
Programming Languages: JavaScript, TypeScript, Python, Java
Frontend: React, HTML5, CSS3, Next.js, Ant Design, Responsive Design
Backend: Node.js, Express.js, Python, RESTful APIs
Databases: MongoDB, PostgreSQL, MySQL
Testing: Manual Testing, Automated Testing, Selenium, Jest, Cypress, API Testing, QA Processes
Tools: Git, Docker, VS Code, Jira, Postman, Figma, AWS, Vercel, GitHub Actions, Linux

WORK EXPERIENCE:
1. Full Stack Developer at Tech Solutions Inc. (2023 - Present)
   - Phát triển web applications với React, Node.js, và MongoDB
   - Collaboration với cross-functional teams
   - Implement responsive designs và optimize performance
   - Mentor junior developers và conduct code reviews

2. QA Engineer at Quality Systems Ltd. (2022 - 2023)
   - Manual và automated testing cho web và mobile applications
   - Tạo comprehensive test plans và test cases
   - Bug tracking và quality assurance processes
   - Collaborate với development teams

3. Junior Developer at StartUp Innovations (2021 - 2022)
   - Frontend development với React và JavaScript
   - Agile development processes và daily standups
   - API integration và database design

EDUCATION:
- Bachelor of Computer Science từ University of Technology (2018-2022)
- Graduated with honors, relevant coursework: Data Structures, Algorithms, Database Systems

FEATURED PROJECTS:
1. E-Commerce Platform 
   - Tech: React, Node.js, MongoDB, Stripe API, Express.js
   - Features: User authentication, shopping cart, payment integration, admin dashboard
   - Deployed on Vercel with responsive design

2. Task Management App
   - Tech: React, TypeScript, Socket.io, PostgreSQL, Docker
   - Features: Real-time collaboration, drag-and-drop, team management
   - Advanced state management and performance optimization

3. Weather Dashboard
   - Tech: React, Chart.js, OpenWeather API, CSS3
   - Features: Multi-city weather, data visualization, responsive design
   - Clean code architecture and API integration

4. Portfolio Website (this site)
   - Tech: React, Ant Design, Vite, Vercel, AI ChatBot
   - Features: Responsive design, AI assistant, modern UI/UX

CONTACT INFORMATION:
- Email: your.email@example.com
- Phone: +84 123 456 789
- GitHub: https://github.com/yuhtnguyen
- LinkedIn: https://linkedin.com/in/yuhtnguyen
- Available for: Full-time, freelance, consulting opportunities

PERSONALITY & RESPONSE STYLE:
- Be enthusiastic about Thuy's skills and projects
- Highlight her unique combination of development + QA experience
- Encourage potential employers to reach out
- Be specific about technical details when asked
- Show her passion for quality and user experience
- Mention her continuous learning mindset

RESPONSE GUIDELINES:
- Keep responses concise but informative (2-4 sentences usually)
- Use emojis occasionally to be friendly
- If you don't know specific details, suggest checking the relevant portfolio section
- Always encourage contact for opportunities or collaborations
- Show enthusiasm for her technical abilities and career growth
`

// Gemini AI Configuration (Free API)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'

// OpenAI Configuration (Alternative - có phí)
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

// Rate limiting
const RATE_LIMIT = {
  maxRequests: 10,
  timeWindow: 60000, // 1 minute
  requests: []
}

export class AIService {
  constructor() {
    this.conversationHistory = []
    this.cache = new Map() // Simple cache để tối ưu performance
  }

  // Rate limiting để tránh spam requests
  checkRateLimit() {
    const now = Date.now()
    RATE_LIMIT.requests = RATE_LIMIT.requests.filter(
      time => now - time < RATE_LIMIT.timeWindow
    )
    
    if (RATE_LIMIT.requests.length >= RATE_LIMIT.maxRequests) {
      throw new Error('Too many requests. Please wait a moment.')
    }
    
    RATE_LIMIT.requests.push(now)
  }

  // Simple cache để avoid duplicate requests
  getCachedResponse(userMessage) {
    const cacheKey = userMessage.toLowerCase().trim()
    return this.cache.get(cacheKey)
  }

  setCachedResponse(userMessage, response) {
    const cacheKey = userMessage.toLowerCase().trim()
    this.cache.set(cacheKey, response)
    
    // Keep cache size reasonable
    if (this.cache.size > 50) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
  }

  // Enhanced language detection
  detectVietnamese(text) {
    // Check Unicode Vietnamese characters
    const hasVietnameseChars = /[\u00C0-\u1EF9]/.test(text)
    
    // Check Vietnamese keywords (more comprehensive)
    const vietnameseKeywords = /\b(là|có|gì|sao|như|thế|nào|tôi|bạn|cô|anh|em|của|về|với|trong|này|đó|rất|nhiều|ở|từ|và|hay|khi|đã|sẽ|được|không|có thể|làm|hỏi|biết|hiểu|xin|chào|dự án|kỹ năng|kinh nghiệm|liên hệ|j|ko|k|đc|dc|mik|mk|tui|gì|dzậy|dzậy|vậy|sống|học|việc|lm|làm|proj|project)\b/i.test(text)
    
    // Check Vietnamese informal patterns
    const informalVietnamese = /\b(j|ko|k|đc|dc|mik|mk|tui|dzậy|vậy|lm)\b/i.test(text)
    
    return hasVietnameseChars || vietnameseKeywords || informalVietnamese
  }

  // Sử dụng Gemini AI (Google - miễn phí) với better error handling
  async getGeminiResponse(userMessage, options = {}) {
    try {
      if (!GEMINI_API_KEY) {
        throw new Error('Gemini API key not configured')
      }

      console.log('🤖 Calling Gemini AI...', { userMessage })

      // Better language detection
      const isVietnamese = this.detectVietnamese(userMessage)
      
      const languageInstruction = isVietnamese 
        ? "QUAN TRỌNG: Người dùng hỏi bằng tiếng Việt. Bạn PHẢI trả lời hoàn toàn bằng tiếng Việt. Không dùng từ tiếng Anh nào."
        : "IMPORTANT: User asked in English. You MUST respond completely in English. Do not use any Vietnamese words."

      const requestBody = {
        contents: [{
          parts: [{
            text: `${PORTFOLIO_CONTEXT}

${languageInstruction}

User message: "${userMessage}"

Your response (remember to match the user's language exactly):`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 200,
          stopSequences: []
        }
      }

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10 seconds timeout
          signal: options.signal // Support for AbortController
        }
      )

      const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text
      
      if (!aiResponse) {
        throw new Error('Invalid response from Gemini AI')
      }

      console.log('✅ Gemini AI Response:', aiResponse)
      return aiResponse

    } catch (error) {
      console.error('❌ Gemini AI Error:', error.response?.data || error.message)
      
      if (error.name === 'AbortError') {
        throw error // Re-throw abort errors
      }
      
      if (error.response?.status === 400) {
        throw new Error('Invalid API request. Please check your API key.')
      } else if (error.response?.status === 403) {
        throw new Error('API key không hợp lệ hoặc đã hết quota.')
      } else if (error.response?.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.')
      }
      
      throw error
    }
  }

  // Sử dụng OpenAI (có phí nhưng chất lượng cao) với improved error handling
  async getOpenAIResponse(userMessage, options = {}) {
    try {
      if (!OPENAI_API_KEY) {
        throw new Error('OpenAI API key not configured')
      }

      const messages = [
        { role: 'system', content: PORTFOLIO_CONTEXT },
        ...this.conversationHistory.slice(-10), // Only last 10 messages to save tokens
        { role: 'user', content: userMessage }
      ]

      const response = await axios.post(
        OPENAI_API_URL,
        {
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          timeout: 15000, // 15 seconds timeout
          signal: options.signal
        }
      )

      return response.data.choices[0].message.content
    } catch (error) {
      console.error('OpenAI Error:', error)
      
      if (error.name === 'AbortError') {
        throw error
      }
      
      throw error
    }
  }

  // Fallback local AI simulation (khi không có API key)
  getLocalAIResponse(userMessage) {
    const message = userMessage.toLowerCase()
    
    // Use enhanced language detection
    const isVietnamese = this.detectVietnamese(userMessage)
    
    // Phân tích intent và trả lời thông minh hơn
    if (message.includes('xin chào') || message.includes('hello') || message.includes('hi') || message.includes('chào')) {
      return isVietnamese 
        ? "Xin chào! Tôi là AI assistant của Thúy. Tôi có thể giúp bạn tìm hiểu về kỹ năng lập trình, kinh nghiệm làm việc và các dự án của cô ấy. Bạn muốn biết gì nhất? 😊"
        : "Hello! I'm Thuy's AI assistant. I can help you learn about her programming skills, work experience, and projects. What would you like to know? 😊"
    }
    
    // Handle experience questions (common pattern)
    if (message.includes('kinh nghiệm') || message.includes('experience') || message.includes('làm việc') || message.includes('work')) {
      return isVietnamese
        ? "Thúy có career path rất ấn tượng! Cô ấy bắt đầu là Junior Developer (2021-2022), sau đó làm QA Engineer (2022-2023), và hiện tại là Full Stack Developer (2023-nay) tại Tech Solutions Inc. Sự kết hợp kinh nghiệm dev + QA giúp cô ấy tạo ra những sản phẩm chất lượng cao! ⭐"
        : "Thuy has an impressive career progression! She started as a Junior Developer (2021-2022), then worked as QA Engineer (2022-2023), and currently serves as Full Stack Developer (2023-present) at Tech Solutions Inc. Her dev + QA experience ensures high-quality products! ⭐"
    }
    
    if (message.includes('dự án') || message.includes('project')) {
      return isVietnamese
        ? "Thúy đã phát triển nhiều dự án thú vị! Nổi bật nhất là E-Commerce Platform (React + Node.js + MongoDB), Task Management App với real-time features, và Weather Dashboard. Mỗi dự án đều thể hiện kỹ năng full-stack và UX/UI design tuyệt vời! 🚀"
        : "Thuy has built amazing projects! Her highlights include E-Commerce Platform (React + Node.js + MongoDB), Task Management App with real-time features, and Weather Dashboard. Each project showcases excellent full-stack and UX/UI design skills! 🚀"
    }
    
    if (message.includes('kỹ năng') || message.includes('skill') || message.includes('công nghệ') || message.includes('tech')) {
      return isVietnamese
        ? "Thúy là Full Stack Developer với skillset rất mạnh! Frontend: React, TypeScript, Next.js, Ant Design. Backend: Node.js, Python, Express.js. Database: MongoDB, PostgreSQL. Testing: Jest, Cypress, Selenium (đặc biệt giỏi QA). Tools: Docker, AWS, Git. 💻"
        : "Thuy is a Full Stack Developer with impressive skills! Frontend: React, TypeScript, Next.js, Ant Design. Backend: Node.js, Python, Express.js. Database: MongoDB, PostgreSQL. Testing: Jest, Cypress, Selenium (especially strong in QA). Tools: Docker, AWS, Git. 💻"
    }
    
    if (message.includes('liên hệ') || message.includes('contact') || message.includes('email') || message.includes('tuyển dụng') || message.includes('hire')) {
      return isVietnamese
        ? "Bạn có thể liên hệ với Thúy qua Email, LinkedIn, GitHub hoặc form liên hệ trên website này. Cô ấy rất welcome với opportunities mới - từ full-time, freelance đến consulting! 📧"
        : "You can contact Thuy via Email, LinkedIn, GitHub, or the contact form on this website. She's very open to new opportunities - full-time, freelance, or consulting! 📧"
    }

    if (message.includes('học vấn') || message.includes('education') || message.includes('đại học') || message.includes('university')) {
      return isVietnamese
        ? "Thúy tốt nghiệp Computer Science với honors từ University of Technology (2018-2022). Nền tảng vững chắc về algorithms, data structures và software engineering. Quan trọng hơn là passion học hỏi liên tục! 🎓"
        : "Thuy graduated with honors in Computer Science from University of Technology (2018-2022). Strong foundation in algorithms, data structures, and software engineering. Most importantly, she has a passion for continuous learning! 🎓"
    }
    
    // Default responses
    return isVietnamese ? 
      "Tôi hiểu bạn muốn biết thêm về Thúy! Cô ấy là developer rất tài năng với kinh nghiệm cả development và QA. Bạn có thể hỏi về projects, technical skills, work experience hoặc cách liên hệ nhé! 😊" :
      "I understand you want to learn more about Thuy! She's a very talented developer with experience in both development and QA. You can ask about her projects, technical skills, work experience, or how to contact her! 😊"
  }

  // Main method để get AI response với caching và rate limiting
  async getAIResponse(userMessage, options = {}) {
    try {
      // Input validation
      if (!userMessage || typeof userMessage !== 'string') {
        throw new Error('Invalid user message')
      }

      const trimmedMessage = userMessage.trim()
      if (!trimmedMessage) {
        throw new Error('Empty message')
      }

      // Check rate limit
      this.checkRateLimit()

      // Check cache first
      const cachedResponse = this.getCachedResponse(trimmedMessage)
      if (cachedResponse) {
        console.log('📦 Using cached response')
        return cachedResponse
      }

      let response

      // Thử Gemini AI trước (miễn phí)
      if (GEMINI_API_KEY) {
        response = await this.getGeminiResponse(trimmedMessage, options)
      }
      // Fallback to OpenAI nếu có API key
      else if (OPENAI_API_KEY) {
        response = await this.getOpenAIResponse(trimmedMessage, options)
      }
      // Fallback to local AI simulation
      else {
        response = this.getLocalAIResponse(trimmedMessage)
      }

      // Cache the response
      if (response) {
        this.setCachedResponse(trimmedMessage, response)
        this.addToHistory(trimmedMessage, response)
      }

      return response
      
    } catch (error) {
      console.error('AI Service Error:', error)
      
      if (error.name === 'AbortError') {
        throw error // Don't fallback for cancelled requests
      }

      // Fallback to local response if API fails
      const fallbackResponse = this.getLocalAIResponse(userMessage)
      this.addToHistory(userMessage, fallbackResponse)
      return fallbackResponse
    }
  }

  addToHistory(userMessage, assistantResponse) {
    this.conversationHistory.push(
      { role: 'user', content: userMessage },
      { role: 'assistant', content: assistantResponse }
    )
    
    // Giữ lại tối đa 10 messages gần nhất để avoid API limits
    if (this.conversationHistory.length > 20) {
      this.conversationHistory = this.conversationHistory.slice(-20)
    }
  }

  clearHistory() {
    this.conversationHistory = []
    this.cache.clear()
  }

  // Method để clear cache manually
  clearCache() {
    this.cache.clear()
  }

  // Get stats cho debugging
  getStats() {
    return {
      historyLength: this.conversationHistory.length,
      cacheSize: this.cache.size,
      rateLimitRequests: RATE_LIMIT.requests.length
    }
  }
}

export const aiService = new AIService()

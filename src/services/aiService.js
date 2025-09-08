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
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY'
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'

// OpenAI Configuration (Alternative - có phí)
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY'
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

export class AIService {
  constructor() {
    this.conversationHistory = []
  }

  // Sử dụng Gemini AI (Google - miễn phí)
  async getGeminiResponse(userMessage) {
    try {
      if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
        throw new Error('Gemini API key not configured')
      }

      console.log('🤖 Calling Gemini AI...', { userMessage })

      // Detect user language
      const isVietnamese = /[\u00C0-\u1EF9]/.test(userMessage) || 
                          /\b(là|có|gì|sao|như|thế|nào|tôi|bạn|cô|anh|em|của|về|với|trong|này|đó|rất|nhiều|ở|từ|và|hay|khi|đã|sẽ|được|không|có thể|làm|hỏi|biết|hiểu)\b/i.test(userMessage)

      const languageInstruction = isVietnamese 
        ? "CRITICAL: User asked in Vietnamese. You MUST respond in Vietnamese only. Do not use any English words."
        : "CRITICAL: User asked in English. You MUST respond in English only. Do not use any Vietnamese words."

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
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
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000 // 10 seconds timeout
        }
      )

      const aiResponse = response.data.candidates[0].content.parts[0].text
      console.log('✅ Gemini AI Response:', aiResponse)
      return aiResponse

    } catch (error) {
      console.error('❌ Gemini AI Error:', error.response?.data || error.message)
      
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

  // Sử dụng OpenAI (có phí nhưng chất lượng cao)
  async getOpenAIResponse(userMessage) {
    try {
      if (!OPENAI_API_KEY || OPENAI_API_KEY === 'YOUR_OPENAI_API_KEY') {
        throw new Error('OpenAI API key not configured')
      }

      const messages = [
        { role: 'system', content: PORTFOLIO_CONTEXT },
        ...this.conversationHistory,
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
          }
        }
      )

      return response.data.choices[0].message.content
    } catch (error) {
      console.error('OpenAI Error:', error)
      throw error
    }
  }

  // Fallback local AI simulation (khi không có API key)
  getLocalAIResponse(userMessage) {
    const message = userMessage.toLowerCase()
    
    // Phân tích intent và trả lời thông minh hơn
    if (message.includes('xin chào') || message.includes('hello') || message.includes('hi')) {
      return this.generateContextualGreeting()
    }
    
    if (message.includes('dự án') || message.includes('project')) {
      return this.generateProjectResponse(message)
    }
    
    if (message.includes('kỹ năng') || message.includes('skill') || message.includes('công nghệ')) {
      return this.generateSkillResponse(message)
    }
    
    if (message.includes('kinh nghiệm') || message.includes('experience') || message.includes('làm việc')) {
      return this.generateExperienceResponse(message)
    }
    
    if (message.includes('liên hệ') || message.includes('contact') || message.includes('email')) {
      return this.generateContactResponse()
    }

    if (message.includes('học vấn') || message.includes('education') || message.includes('đại học')) {
      return this.generateEducationResponse()
    }

    if (message.includes('tuyển dụng') || message.includes('hiring') || message.includes('job')) {
      return this.generateHiringResponse()
    }
    
    return this.generateSmartDefault(message)
  }

  generateContextualGreeting() {
    const greetings = [
      "Xin chào! Tôi là trợ lý AI của Thuy. Tôi có thể giúp bạn tìm hiểu về kinh nghiệm làm việc, kỹ năng lập trình, và các dự án của cô ấy. Bạn muốn biết gì nhất?",
      "Hello! I'm Thuy's AI assistant. I can help you learn about her development skills, work experience, and projects. What would you like to know?",
      "Chào bạn! Tôi được tạo ra để giúp bạn hiểu rõ hơn về portfolio của Thuy - một Full Stack Developer và QA Engineer tài năng. Hãy hỏi tôi bất cứ điều gì!"
    ]
    return greetings[Math.floor(Math.random() * greetings.length)]
  }

  generateProjectResponse(message) {
    if (message.includes('ecommerce') || message.includes('thương mại')) {
      return "Dự án E-Commerce Platform của Thuy rất ấn tượng! Được xây dựng với React, Node.js, MongoDB và tích hợp Stripe API. Dự án có đầy đủ tính năng: đăng nhập, giỏ hàng, thanh toán. Bạn có thể xem demo và source code trên trang Projects!"
    }
    
    if (message.includes('task') || message.includes('quản lý')) {
      return "Task Management App là một trong những dự án nổi bật - ứng dụng quản lý công việc theo nhóm với real-time updates, drag-and-drop, sử dụng React, TypeScript, Socket.io và PostgreSQL. Rất phù hợp cho team collaboration!"
    }
    
    return "Thuy đã phát triển nhiều dự án thú vị: E-Commerce Platform (React + Node.js), Task Management App (với real-time features), Weather Dashboard, và chính website portfolio này! Mỗi dự án đều showcase các kỹ năng khác nhau từ frontend đến backend và database."
  }

  generateSkillResponse(message) {
    if (message.includes('frontend') || message.includes('giao diện')) {
      return "Về frontend, Thuy chuyên sâu React ecosystem: React, TypeScript, Next.js, HTML5, CSS3, Ant Design. Cô ấy rất giỏi tạo ra những giao diện user-friendly và responsive design!"
    }
    
    if (message.includes('backend') || message.includes('server')) {
      return "Backend skills của Thuy bao gồm Node.js, Express.js, Python, cùng với database MongoDB, PostgreSQL, MySQL. Cô ấy có kinh nghiệm xây dựng API robust và scalable architecture."
    }
    
    if (message.includes('testing') || message.includes('test')) {
      return "Thuy có expertise mạnh về Testing! Từ Manual Testing đến Automated Testing với Selenium, Jest, Cypress. Cô ấy hiểu rõ QA processes và có thể ensure code quality cao."
    }
    
    return "Thuy là một Full Stack Developer toàn diện: Frontend (React, TypeScript), Backend (Node.js, Python), Database (MongoDB, PostgreSQL), Testing (Jest, Cypress, Selenium), và DevOps tools (Docker, AWS, Vercel). Một skillset rất impressive!"
  }

  generateExperienceResponse(message) {
    if (message.includes('hiện tại') || message.includes('current')) {
      return "Hiện tại Thuy đang làm Full Stack Developer tại Tech Solutions Inc. (từ 2023). Cô ấy develop web applications với React/Node.js, mentor junior developers, và optimize performance. Một role rất senior!"
    }
    
    return "Thuy có career path rất solid: Junior Developer (2021-2022) → QA Engineer (2022-2023) → Full Stack Developer (2023-present). Sự kết hợp giữa development và QA experience giúp cô ấy tạo ra những sản phẩm chất lượng cao!"
  }

  generateContactResponse() {
    return "Bạn có thể liên hệ với Thuy qua nhiều cách: Email (your.email@example.com), LinkedIn, GitHub, hoặc sử dụng contact form trên website. Cô ấy rất welcome với opportunities mới và tech discussions!"
  }

  generateEducationResponse() {
    return "Thuy tốt nghiệp Bachelor of Computer Science tại University of Technology (2018-2022) với honors degree. Strong foundation về Data Structures, Algorithms, Database Systems, và Software Engineering!"
  }

  generateHiringResponse() {
    return "Thuy đang open cho các opportunities mới! Cô ấy có thể làm full-time, freelance projects, hoặc consulting. Với skillset full-stack và QA experience, Thuy sẽ là asset tuyệt vời cho team bạn. Hãy liên hệ qua Contact page!"
  }

  generateSmartDefault(message) {
    // Phân tích context và đưa ra câu trả lời thông minh
    const responses = [
      "Đó là câu hỏi hay! Dựa vào portfolio của Thuy, tôi nghĩ bạn có thể quan tâm đến projects, technical skills, hoặc work experience của cô ấy. Bạn muốn tìm hiểu aspect nào cụ thể?",
      "Interesting question! Thuy's portfolio có rất nhiều information. Bạn có thể hỏi về her projects (e-commerce, task management), skills (React, Node.js, testing), hoặc how to contact her for opportunities!",
      "Tôi hiểu bạn muốn biết thêm về Thuy! Cô ấy là một developer rất talented với experience trong cả development và QA. Hãy hỏi tôi về specific topics như projects, skills, hoặc career journey!"
    ]
    
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Main method để get AI response
  async getAIResponse(userMessage) {
    try {
      // Thử Gemini AI trước (miễn phí)
      if (GEMINI_API_KEY && GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY') {
        const response = await this.getGeminiResponse(userMessage)
        this.addToHistory(userMessage, response)
        return response
      }
      
      // Fallback to OpenAI nếu có API key
      if (OPENAI_API_KEY && OPENAI_API_KEY !== 'YOUR_OPENAI_API_KEY') {
        const response = await this.getOpenAIResponse(userMessage)
        this.addToHistory(userMessage, response)
        return response
      }
      
      // Fallback to local AI simulation
      const response = this.getLocalAIResponse(userMessage)
      this.addToHistory(userMessage, response)
      return response
      
    } catch (error) {
      console.error('AI Service Error:', error)
      // Fallback to local response if API fails
      const response = this.getLocalAIResponse(userMessage)
      this.addToHistory(userMessage, response)
      return response
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
  }
}

export const aiService = new AIService()

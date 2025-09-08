# 🤖 AI ChatBot Setup Guide

Portfolio website đã được tích hợp AI ChatBot thông minh có thể trả lời mọi câu hỏi về Thuy một cách linh hoạt và tự nhiên.

## 🚀 Tính năng AI ChatBot

### ✅ **Hoạt động hiện tại:**
- **Local AI Simulation**: Bot đã hoạt động với logic thông minh không cần API
- **Smart Context Understanding**: Hiểu context và trả lời phù hợp
- **Bilingual**: Hỗ trợ cả tiếng Việt và tiếng Anh
- **Portfolio Knowledge**: Biết tất cả thông tin về Thuy (skills, projects, experience)

### ✅ **Nâng cấp với Real AI:**
- **Google Gemini**: Miễn phí, chất lượng tốt
- **OpenAI GPT**: Có phí nhưng chất lượng cao nhất
- **Conversation Memory**: Nhớ context cuộc trò chuyện
- **Natural Responses**: Câu trả lời tự nhiên như con người

## 🛠️ Setup AI APIs

### Option 1: Google Gemini (Khuyến nghị - Miễn phí)

1. **Lấy API Key:**
   ```
   1. Truy cập: https://makersuite.google.com/app/apikey
   2. Đăng nhập với Google account
   3. Click "Create API Key"
   4. Copy API key
   ```

2. **Cấu hình:**
   ```javascript
   // src/services/aiService.js
   const GEMINI_API_KEY = 'your_gemini_api_key_here'
   ```

3. **Test:**
   ```bash
   npm run dev
   # Mở chat và hỏi: "Tell me about Thuy's projects"
   ```

### Option 2: OpenAI (Có phí)

1. **Lấy API Key:**
   ```
   1. Truy cập: https://platform.openai.com/api-keys
   2. Tạo account và verify
   3. Add payment method
   4. Create API key
   ```

2. **Cấu hình:**
   ```javascript
   // src/services/aiService.js
   const OPENAI_API_KEY = 'your_openai_api_key_here'
   ```

## 📱 Test ChatBot

### Câu hỏi mẫu để test:
```
English:
- "What projects has Thuy worked on?"
- "Tell me about her technical skills"
- "How can I contact Thuy for a job?"
- "What's her experience in QA?"

Tiếng Việt:
- "Thuy làm những dự án gì?"
- "Kỹ năng lập trình của cô ấy như thế nào?"
- "Làm sao để liên hệ tuyển dụng?"
- "Kinh nghiệm QA của Thuy ra sao?"
```

## 🔧 Customization

### Thêm thông tin mới về Portfolio:
```javascript
// src/services/aiService.js - Cập nhật PORTFOLIO_CONTEXT
const PORTFOLIO_CONTEXT = `
// Thêm thông tin mới về projects, skills, experience...
NEW PROJECT:
- Project Name - Description, Tech Stack
`
```

### Tùy chỉnh AI personality:
```javascript
// Thay đổi instructions trong PORTFOLIO_CONTEXT
INSTRUCTIONS:
- Be more casual/formal
- Focus on technical details
- Emphasize certain skills
```

## 🔒 Production Setup

### Environment Variables:
```bash
# .env.local
VITE_GEMINI_API_KEY=your_gemini_key
VITE_OPENAI_API_KEY=your_openai_key
```

### Cập nhật aiService.js:
```javascript
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY
```

### Deploy với Vercel:
```bash
# Add environment variables in Vercel dashboard
vercel env add VITE_GEMINI_API_KEY
```

## 📊 AI Service Features

### 🧠 **Local AI (No API needed):**
- Context-aware responses
- Intent detection
- Smart fallbacks
- Bilingual support

### 🚀 **Gemini AI:**
- Natural language understanding
- Creative responses
- Free tier: 60 requests/minute
- Good for personal projects

### 💎 **OpenAI GPT:**
- Highest quality responses
- Advanced reasoning
- Costs: ~$0.002 per 1K tokens
- Best for professional use

## 🎯 Use Cases

### Visitors có thể hỏi:
- Technical skills và experience
- Project details và demos
- Contact information
- Hiring và collaboration
- Education background
- Career advice

### AI sẽ trả lời:
- Chính xác về portfolio content
- Friendly và professional
- Encourage contact cho opportunities
- Suggest relevant portfolio sections

## 🚨 Troubleshooting

### ChatBot không hoạt động:
1. Check console errors
2. Verify API keys
3. Check API quotas
4. Test with local AI first

### API Errors:
```javascript
// Check aiService.js logs
console.log('AI Response Error:', error)
```

### Local AI Fallback:
- Bot vẫn hoạt động thông minh mà không cần API
- Smart pattern matching
- Context-aware responses

## 📈 Analytics & Monitoring

### Track ChatBot usage:
```javascript
// Add to ChatBot component
const trackChatInteraction = (message, response) => {
  // Analytics code here
  console.log('Chat:', { message, response })
}
```

### Monitor API usage:
- Gemini: Google AI Studio dashboard
- OpenAI: Platform usage page

## 🎨 UI Customization

### ChatBot appearance:
```css
/* src/index.css */
.chatbot-container {
  /* Custom styles */
}
```

### Response formatting:
```javascript
// Add markdown support, code highlighting, etc.
```

---

## 🎉 Kết quả

Với AI ChatBot này, portfolio website của bạn sẽ:
- **Impress recruiters** với technology hiện đại
- **Answer questions 24/7** về skills và experience
- **Engage visitors** với interactive experience
- **Stand out** từ các portfolio thông thường

Happy coding! 🚀

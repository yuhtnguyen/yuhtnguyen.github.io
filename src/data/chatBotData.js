export const chatBotResponses = {
  greetings: [
    "Hello! Nice to meet you! I'm here to help you learn more about Thuy's work and experience.",
    "Hi there! Welcome to Thuy's portfolio. How can I assist you today?",
    "Hey! Great to see you here. Feel free to ask me anything about Thuy's background and projects!"
  ],
  
  projects: [
    "Thuy has worked on various projects including e-commerce platforms, task management apps, and web applications. You can check out the Projects page for more details!",
    "She's built some amazing projects! From React-based e-commerce sites to collaborative task management tools. The Projects section has all the details with live demos!",
    "Thuy's portfolio includes full-stack applications, responsive websites, and testing frameworks. Each project showcases different technologies and problem-solving approaches."
  ],
  
  skills: [
    "Thuy specializes in React, Node.js, TypeScript, Python, and various other modern technologies. She also has strong QA and testing skills!",
    "Her tech stack includes frontend (React, TypeScript, HTML/CSS), backend (Node.js, Python, Express), databases (MongoDB, PostgreSQL), and testing tools (Jest, Cypress, Selenium).",
    "She's a full-stack developer with expertise in both development and quality assurance. Modern web technologies, testing frameworks, and cloud deployment are her strengths!"
  ],
  
  contact: [
    "You can contact Thuy through the Contact page, or reach out via LinkedIn and GitHub. She's always open to discussing new opportunities!",
    "Feel free to reach out! You'll find her contact information, social links, and a contact form on the Contact page. She responds quickly to professional inquiries.",
    "Thuy is available for freelance projects, full-time opportunities, or just tech discussions. Check the Contact section for all her details!"
  ],
  
  experience: [
    "Thuy has experience as a Full Stack Developer and QA Engineer. You can download her full resume from the Resume page or view her work history there.",
    "She's worked across different roles - from junior developer to full-stack engineer and QA specialist. Her journey shows continuous growth and learning!",
    "Her professional experience spans web development, quality assurance, and team collaboration. The Resume page has detailed information about her career progression."
  ],
  
  about: [
    "Thuy is a passionate Full Stack Developer and QA Engineer who loves creating efficient, scalable solutions. Check out the About page to learn more about her background!",
    "She's a tech enthusiast with a strong background in both development and testing. Her passion for quality and user experience really shows in her work!",
    "Thuy combines technical expertise with a keen eye for detail. She's passionate about creating reliable, user-friendly applications that solve real problems."
  ],
  
  thanks: [
    "You're welcome! Feel free to ask me anything else about Thuy's work or experience.",
    "Happy to help! Is there anything specific about her projects or skills you'd like to know more about?",
    "Glad I could assist! Don't hesitate to ask if you want to know more about any aspect of her portfolio."
  ],
  
  goodbye: [
    "Goodbye! Thanks for visiting Thuy's portfolio. Don't hesitate to reach out if you have any questions!",
    "Take care! Feel free to explore the portfolio and contact Thuy if you're interested in working together.",
    "See you later! Thanks for your interest in Thuy's work. Hope to hear from you soon!"
  ],
  
  default: [
    "That's interesting! Would you like to know more about Thuy's projects or experience?",
    "I'd be happy to help! You can explore different sections of the portfolio or ask me about Thuy's skills and projects.",
    "Feel free to browse through the portfolio pages, or ask me about Thuy's background, projects, or technical skills!",
    "Great question! You might find the answer in the About, Projects, or Resume sections. What specifically would you like to know?",
    "I'm here to help you learn more about Thuy's work! Try asking about her projects, skills, experience, or how to contact her.",
    "Interesting! You can ask me about Thuy's technical skills, work experience, projects, or how to get in touch with her."
  ]
}

export const chatBotKeywords = {
  greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
  projects: ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'app', 'website', 'application'],
  skills: ['skill', 'technology', 'tech', 'programming', 'languages', 'framework', 'tools', 'stack'],
  contact: ['contact', 'email', 'hire', 'reach', 'linkedin', 'github', 'phone', 'message'],
  experience: ['experience', 'resume', 'cv', 'job', 'career', 'history', 'background', 'professional'],
  about: ['about', 'who', 'bio', 'biography', 'story', 'journey', 'person'],
  thanks: ['thank', 'thanks', 'appreciate', 'grateful'],
  goodbye: ['bye', 'goodbye', 'see you', 'farewell', 'later']
}

export const getRandomResponse = (category) => {
  const responses = chatBotResponses[category] || chatBotResponses.default
  return responses[Math.floor(Math.random() * responses.length)]
}

export const detectIntent = (message) => {
  const lowerMessage = message.toLowerCase()
  
  for (const [intent, keywords] of Object.entries(chatBotKeywords)) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return intent
    }
  }
  
  return 'default'
}

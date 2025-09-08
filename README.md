# Portfolio Website - Nguyen Thi Thuy

A modern, responsive personal portfolio website built with React (Vite) + Ant Design + AI ChatBot.

## 🚀 Features

- **Modern UI/UX**: Clean and professional design using Ant Design components
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast Loading**: Built with Vite for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **🤖 AI ChatBot**: Smart AI assistant that can answer questions about skills, projects, and experience
- **Easy to Customize**: Well-organized code structure for easy modifications

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Ant Design 5
- **Routing**: React Router DOM 6
- **Icons**: Ant Design Icons
- **AI Integration**: Google Gemini / OpenAI APIs
- **HTTP Client**: Axios
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile-photo.jpg     # Your profile photo
│   ├── cv.pdf               # Your resume PDF
│   └── project images...    # Project screenshots
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   ├── Footer.jsx       # Footer component
│   │   ├── ChatBot.jsx      # AI ChatBot component
│   │   └── AISetupGuide.jsx # AI setup instructions
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About me page
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Resume.jsx       # Resume page
│   │   └── Contact.jsx      # Contact form
│   ├── services/
│   │   └── aiService.js     # AI integration service
│   ├── data/
│   │   └── chatBotData.js   # ChatBot fallback data
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── vercel.json              # Vercel deployment config
```

## 🤖 AI ChatBot

The portfolio includes an intelligent AI chatbot that can answer questions about:
- Technical skills and experience
- Project details and demonstrations  
- Contact information and hiring
- Education and career background

### Setup AI (Optional):
The chatbot works out of the box with local AI. For enhanced responses:

1. **Get API Key** (Free): [Google Gemini](https://makersuite.google.com/app/apikey)
2. **Configure**: Update `GEMINI_API_KEY` in `src/services/aiService.js`
3. **Test**: Ask the bot about projects, skills, or experience

See [AI_CHATBOT_SETUP.md](./AI_CHATBOT_SETUP.md) for detailed instructions.

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment on Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Import your repository
   - Deploy automatically

## 📝 Customization Guide

Update the following files with your information:
- `src/pages/Home.jsx` - Hero section content
- `src/pages/About.jsx` - Biography and skills
- `src/pages/Projects.jsx` - Your projects
- `src/pages/Resume.jsx` - Work experience and education
- `src/pages/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social links

Replace these files with your own:
- `public/profile-photo.jpg` - Your profile photo
- `public/cv.pdf` - Your resume PDF

## 📞 Support

If you have any questions, feel free to reach out!

---

**Happy coding! 🚀**

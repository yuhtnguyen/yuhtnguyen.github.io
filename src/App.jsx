import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import AIDebug from "./pages/AIDebug";

const { Content } = Layout;

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Layout className={isHomePage ? "home-page-layout" : ""}>
      <Navbar />
      <Content className="ant-layout-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-debug" element={<AIDebug />} />
        </Routes>
      </Content>
      <Footer />
      <ChatBot />
    </Layout>
  );
}

export default App;

import React, { useState } from 'react'
import { Layout, Menu, Drawer, Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { 
  HomeOutlined, 
  UserOutlined, 
  ProjectOutlined, 
  FileTextOutlined, 
  ContactsOutlined,
  MenuOutlined 
} from '@ant-design/icons'

const { Header } = Layout

const Navbar = () => {
  const location = useLocation()
  const [drawerVisible, setDrawerVisible] = useState(false)
  
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/" onClick={() => setDrawerVisible(false)}>Home</Link>
    },
    {
      key: '/about',
      icon: <UserOutlined />,
      label: <Link to="/about" onClick={() => setDrawerVisible(false)}>About</Link>
    },
    {
      key: '/projects',
      icon: <ProjectOutlined />,
      label: <Link to="/projects" onClick={() => setDrawerVisible(false)}>Projects</Link>
    },
    {
      key: '/resume',
      icon: <FileTextOutlined />,
      label: <Link to="/resume" onClick={() => setDrawerVisible(false)}>Resume</Link>
    },
    {
      key: '/contact',
      icon: <ContactsOutlined />,
      label: <Link to="/contact" onClick={() => setDrawerVisible(false)}>Contact</Link>
    }
  ]

  return (
    <Header className="ant-layout-header">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        height: '100%'
      }}>
        {/* Logo/Brand */}
        <div style={{ 
          color: '#fff', 
          fontSize: 'clamp(16px, 3vw, 20px)', 
          fontWeight: 'bold',
          whiteSpace: 'nowrap'
        }}>
          Nguyen Thi Thuy
        </div>

        {/* Desktop Menu */}
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ 
            flex: 1, 
            justifyContent: 'flex-end', 
            minWidth: 0,
            border: 'none'
          }}
          className="desktop-menu"
        />

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
          style={{ 
            color: '#fff',
            display: 'none'
          }}
          className="mobile-menu-btn"
        />

        {/* Mobile Drawer */}
        <Drawer
          title="Navigation"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={250}
          className="mobile-drawer"
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ border: 'none' }}
          />
        </Drawer>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
      `}</style>
    </Header>
  )
}

export default Navbar

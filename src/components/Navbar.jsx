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
    <Header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      background: '#ffffff',
      borderBottom: '1px solid rgba(233, 30, 99, 0.1)',
      height: '48px',
      padding: '0 20px'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        height: '100%'
      }}>
        {/* Logo/Brand */}
        <div style={{ 
          color: '#e91e63', 
          fontSize: 'clamp(14px, 2.5vw, 18px)', 
          fontWeight: 'bold',
          whiteSpace: 'nowrap'
        }}>
          Nguyen Thi Thuy
        </div>

        {/* Desktop Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ 
            flex: 1, 
            justifyContent: 'flex-end', 
            minWidth: 0,
            border: 'none',
            background: 'transparent',
            lineHeight: '48px'
          }}
          className="desktop-menu pink-white-menu"
        />

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
          style={{ 
            color: '#e91e63',
            display: 'none'
          }}
          className="mobile-menu-btn"
        />

        {/* Mobile Drawer */}
        <Drawer
          title={
            <span style={{ color: '#e91e63', fontWeight: 'bold' }}>
              Navigation
            </span>
          }
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={250}
          className="mobile-drawer"
          headerStyle={{
            background: '#ffffff',
            borderBottom: '1px solid rgba(233, 30, 99, 0.1)'
          }}
          bodyStyle={{
            background: '#ffffff'
          }}
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ border: 'none' }}
            className="pink-white-menu-mobile"
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

        /* Pink & White Theme Menu Styling */
        .pink-white-menu .ant-menu-item {
          color: #666 !important;
          font-weight: 500;
          height: 48px !important;
          line-height: 48px !important;
          padding: 0 12px !important;
        }

        .pink-white-menu .ant-menu-item::after {
          display: none !important;
        }

        .pink-white-menu .ant-menu-item:hover {
          color: #e91e63 !important;
          background-color: rgba(233, 30, 99, 0.05) !important;
          border-radius: 6px;
        }

        .pink-white-menu .ant-menu-item:hover::after {
          display: none !important;
        }

        .pink-white-menu .ant-menu-item-selected {
          color: #e91e63 !important;
          background-color: rgba(233, 30, 99, 0.1) !important;
          border-radius: 6px;
          font-weight: 600;
        }

        .pink-white-menu .ant-menu-item-selected::after {
          display: none !important;
        }

        .pink-white-menu .ant-menu-item a {
          color: inherit !important;
          text-decoration: none;
        }

        /* Mobile Menu Styling */
        .pink-white-menu-mobile .ant-menu-item {
          color: #666 !important;
          font-weight: 500;
          margin: 4px 8px;
          border-radius: 8px;
        }

        .pink-white-menu-mobile .ant-menu-item:hover {
          color: #e91e63 !important;
          background-color: rgba(233, 30, 99, 0.05) !important;
        }

        .pink-white-menu-mobile .ant-menu-item-selected {
          color: #e91e63 !important;
          background-color: rgba(233, 30, 99, 0.1) !important;
          font-weight: 600;
        }

        .pink-white-menu-mobile .ant-menu-item a {
          color: inherit !important;
        }

        /* Icon styling */
        .pink-white-menu .anticon,
        .pink-white-menu-mobile .anticon {
          color: inherit !important;
        }
      `}</style>
    </Header>
  )
}

export default Navbar

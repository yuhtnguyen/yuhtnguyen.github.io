import { Typography, Row, Col, Card, Button, Tag } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

// Theme colors matching Home page
const THEME_COLORS = {
  primary: "#e91e63",
  secondary: "#f06292",
  text: "#2c3e50",
  textMuted: "#555",
  background: "linear-gradient(135deg, #ffeef7 0%, #ffc1cc 100%)",
  cardGradient: "linear-gradient(135deg, #e91e63 0%, #f06292 100%)",
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Thesync - UNDERGRADUATE THESIS PROJECT",
      description:
        "Application to Support Group Formation and Capstone Thesis Development for FPT University students",
      image: "/image/project1.jpg",
      technologies: ["Frontend Developer", "Tester", "UI/UX Designer"],
      githubUrl: "https://github.com/yuhtnguyen/ecommerce-platform",
      demoUrl: "https://ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "BrainBox – E-learning Platform",
      description:
        "A platform for paid courses, enabling learners to study and teachers to create and manage content easily",
      image: "/image/project2.jpg",
      technologies: ["Designer", "Frontend Developer", "QA/QC Engineer"],
      githubUrl: "https://github.com/yuhtnguyen/task-manager",
      demoUrl: "https://task-manager-demo.vercel.app",
      featured: true,
    },
  ];

  const ProjectCard = ({ project }) => (
    <Card
      hoverable
      className="project-card"
      cover={
        <div
          style={{
            height: "clamp(150px, 20vw, 200px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            style={{
              display: "none",
              height: "100%",
              background: THEME_COLORS.cardGradient,
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "clamp(14px, 3vw, 18px)",
              fontWeight: "bold",
              padding: "16px",
              textAlign: "center",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(2px)",
              }}
            />
            <span style={{ position: "relative", zIndex: 1 }}>
              {project.title}
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
              opacity: 0,
              transition: "opacity 0.3s ease",
              display: "flex",
              alignItems: "flex-end",
              padding: "16px",
            }}
            className="image-overlay"
          >
            <span
              style={{
                color: "white",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                fontWeight: "600",
                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {project.title}
            </span>
          </div>
        </div>
      }
      style={{
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(233, 30, 99, 0.15)",
        border: "1px solid rgba(233, 30, 99, 0.1)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 15px 40px rgba(233, 30, 99, 0.25)";
        // Show overlay on hover
        const overlay = e.currentTarget.querySelector(".image-overlay");
        if (overlay) overlay.style.opacity = "1";
        // Scale image slightly
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(233, 30, 99, 0.15)";
        // Hide overlay
        const overlay = e.currentTarget.querySelector(".image-overlay");
        if (overlay) overlay.style.opacity = "0";
        // Reset image scale
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1)";
      }}
    >
      <Meta
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "clamp(14px, 2.5vw, 16px)",
                color: THEME_COLORS.text,
                fontWeight: "600",
              }}
            >
              {project.title}
            </span>
            {project.featured && (
              <Tag
                color="gold"
                size="small"
                style={{
                  background: `linear-gradient(45deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})`,
                  color: "white",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Featured
              </Tag>
            )}
          </div>
        }
        description={
          <div>
            <Paragraph
              style={{
                marginBottom: "16px",
                fontSize: "clamp(12px, 2vw, 14px)",
                lineHeight: "1.6",
                color: THEME_COLORS.textMuted,
              }}
            >
              {project.description}
            </Paragraph>
            <div>
              <strong
                style={{
                  fontSize: "clamp(11px, 2vw, 13px)",
                  color: THEME_COLORS.text,
                }}
              >
                Role:
              </strong>
              <div style={{ marginTop: "8px" }}>
                {project.technologies.map((tech) => (
                  <Tag
                    key={tech}
                    style={{
                      margin: "2px",
                      fontSize: "clamp(10px, 1.5vw, 12px)",
                      background: `linear-gradient(45deg, ${THEME_COLORS.primary}15, ${THEME_COLORS.secondary}15)`,
                      color: THEME_COLORS.primary,
                      border: `1px solid ${THEME_COLORS.primary}30`,
                      borderRadius: "12px",
                    }}
                    size="small"
                  >
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        }
      />
    </Card>
  );

  return (
    <div
      className="page-container"
      style={
        {
          // background: THEME_COLORS.background
        }
      }
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Title
          level={2}
          className="section-title"
          style={{
            textAlign: "center",
            color: "#e91e63",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            marginBottom: "16px",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          My Projects
        </Title>

        <Paragraph
          style={{
            textAlign: "center",
            fontSize: "clamp(16px, 3vw, 16px)",
            marginBottom: "48px",
            padding: "0 16px",
            color: "#f06292",
            lineHeight: "1.6",
            textShadow: "0 1px 5px rgba(0,0,0,0.2)",
          }}
        >
          Here are some of the projects I've worked on. Each project showcases
          different skills and technologies I've learned and applied.
        </Paragraph>

        <Row gutter={[24, 24]} style={{ marginBottom: "48px" }}>
          {projects.map((project) => (
            <Col xs={24} sm={24} lg={12} xl={12} key={project.id}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Button
            type="primary"
            size="large"
            icon={<GithubOutlined />}
            href="https://github.com/yuhtnguyen"
            target="_blank"
            style={{
              height: "50px",
              padding: "0 28px",
              fontSize: "16px",
              borderRadius: "25px",
              background: "white",
              color: THEME_COLORS.primary,
              border: `2px solid ${THEME_COLORS.primary}`,
              fontWeight: "600",
              boxShadow: "0 6px 20px rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.background = `linear-gradient(45deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})`;
              e.target.style.color = "white";
              e.target.style.border = "none";
              e.target.style.boxShadow = "0 8px 25px rgba(233,30,99,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.background = "white";
              e.target.style.color = THEME_COLORS.primary;
              e.target.style.border = `2px solid ${THEME_COLORS.primary}`;
              e.target.style.boxShadow = "0 6px 20px rgba(255,255,255,0.3)";
            }}
          >
            View More on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

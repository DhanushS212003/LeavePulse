import BreadCrumb from "../breadcrumb/Breadcrumb";
import "./product_overview.css";

const ProductOverview = () => {
  const features = [
    {
      title: "Leave Management",
      icon: "fa-solid fa-calendar-check",
      description:
        "Streamline your leave management process with an intuitive and efficient system.",
      points: [
        "Easy leave application and approval workflow",
        "Multiple leave types support (Sick, Casual, Personal, Annual, etc.)",
        "Real-time leave status tracking",
        "Automated leave balance calculations",
        "Leave history and analytics",
      ],
    },
    {
      title: "Employee Management",
      icon: "fa-solid fa-users",
      description:
        "Comprehensive employee management system to keep track of your workforce.",
      points: [
        "Employee profile management",
        "Role-based access control",
        "Employee directory and search",
        "Join date tracking",
        "Employee leave history",
      ],
    },
    {
      title: "Calendar Integration",
      icon: "fa-solid fa-calendar-days",
      description:
        "Visual calendar view to see all leave requests and schedules at a glance.",
      points: [
        "Interactive calendar with multiple views (Month, Week, Day, Agenda)",
        "Color-coded leave types for easy identification",
        "Event details on hover",
        "Quick navigation between dates",
        "Export calendar functionality",
      ],
    },
    {
      title: "Dashboard Analytics",
      icon: "fa-solid fa-chart-line",
      description:
        "Get insights into your organization's leave patterns and trends.",
      points: [
        "Real-time leave statistics",
        "Pending, approved, and rejected leave counts",
        "Visual data representation",
        "Quick overview of employee status",
        "Trend analysis and reports",
      ],
    },
    {
      title: "Advanced Filtering",
      icon: "fa-solid fa-filter",
      description:
        "Powerful filtering options to find exactly what you're looking for.",
      points: [
        "Filter by leave status (Approved, Pending, Rejected)",
        "Filter by employee or department",
        "Date range filtering",
        "Multiple filter combinations",
        "Save filter preferences",
      ],
    },
    {
      title: "Responsive Design",
      icon: "fa-solid fa-mobile-screen-button",
      description:
        "Access your leave management system from any device, anywhere.",
      points: [
        "Fully responsive design for all screen sizes",
        "Mobile-friendly interface",
        "Touch-optimized controls",
        "Cross-platform compatibility",
        "Offline capability support",
      ],
    },
  ];

  return (
    <>
      <BreadCrumb title="Product Summary" path="Dashboard > Product Overview" />

      <div className="product_overview_section">
        <div className="overview_header">
          <h1>Welcome to LeavePulse</h1>
          <p className="overview_subtitle">
            A comprehensive leave management system designed to simplify and
            streamline your organization's leave tracking and approval process.
            LeavePulse provides an intuitive interface for employees and
            administrators to manage leave requests efficiently.
          </p>
        </div>

        <div className="features_grid">
          {features.map((feature, index) => (
            <div key={index} className="feature_card">
              <div className="feature_icon">
                <i className={feature.icon} />
              </div>
              <h3 className="feature_title">{feature.title}</h3>
              <p className="feature_description">{feature.description}</p>
              <ul className="feature_points">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <i className="fa-solid fa-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="overview_footer">
          <h2>Why Choose LeavePulse?</h2>
          <div className="benefits_list">
            <div className="benefit_item">
              <i className="fa-solid fa-clock" />
              <div>
                <h4>Time Efficient</h4>
                <p>Reduce administrative time by automating leave processes</p>
              </div>
            </div>
            <div className="benefit_item">
              <i className="fa-solid fa-shield-halved" />
              <div>
                <h4>Secure & Reliable</h4>
                <p>Enterprise-grade security with data protection and backup</p>
              </div>
            </div>
            <div className="benefit_item">
              <i className="fa-solid fa-user-gear" />
              <div>
                <h4>User Friendly</h4>
                <p>Intuitive interface that requires minimal training</p>
              </div>
            </div>
            <div className="benefit_item">
              <i className="fa-solid fa-chart-pie" />
              <div>
                <h4>Data Insights</h4>
                <p>Make informed decisions with comprehensive analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;

import './Projects.css';
import bank from "../assets/bank.jpg"
import table from "../assets/table.jpg"
import house from "../assets/house.jpg"

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-row">
        <div className="card" style={{ width: '18rem' }}>
          <img src={table} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>Table Booking System</strong></h5>
            <p className="card-text">
              The table booking system is a web-based application that allows users to view available tables, book reservations, and manage booking details for restaurants, ensuring a smooth and efficient booking experience.
            </p>
            <a href="https://github.com" className="btn btn-primary">Go To Project</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={bank} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>Banking Enterprise System</strong></h5>
            <p className="card-text">
              The banking enterprise system is a software solution designed to manage and streamline banking operations, including customer accounts, transactions, loans, and financial reporting. 
            </p>
            <a href="https://github.com" className="btn btn-primary">Go To Project</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={house} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>E-Commerce</strong></h5>
            <p className="card-text">
              The e-commerce app is a web-based platform that allows users to browse products, add items to their cart, make secure payments, and track orders.
            </p>
            <a href="https://github.com" className="btn btn-primary">Go To Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

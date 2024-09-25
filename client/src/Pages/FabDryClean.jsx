import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FabDryclean = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="text-center my-5 bg-primary text-white p-5">
        <h1 className="display-4">Welcome to Fab Dryclean Bhopal</h1>
        <p className="lead">
          Your garments deserve the best care. With our state-of-the-art cleaning technology and eco-friendly products, we ensure your clothes are treated with respect and precision.
        </p>
        <a href="#services" className="btn btn-light btn-lg">Explore Our Services</a>
      </header>

      {/* Services Section */}
      <section id="services" className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {[
            { title: "Dry Cleaning", description: "Gentle touch for delicate fabrics. We remove stains and preserve quality.", img: "https://via.placeholder.com/300" },
            { title: "Laundry Services", description: "Fresh, clean clothes without the hassle. Wash, dry, and fold options.", img: "https://via.placeholder.com/300" },
            { title: "Stain Removal", description: "Expert techniques for stubborn stains, ensuring your clothes look their best.", img: "https://via.placeholder.com/300" },
            { title: "Alterations and Repairs", description: "Skilled tailors provide alterations and repairs to keep your clothes in top condition.", img: "https://via.placeholder.com/300" },
            { title: "Pickup and Delivery", description: "Convenient services to get your clothes cleaned without leaving home.", img: "https://via.placeholder.com/300" }
          ].map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow">
                <img src={service.img} className="card-img-top" alt={service.title} />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <ul className="list-group">
          <li className="list-group-item list-group-item-primary"><strong>Quality Assurance:</strong> Top-notch care for your garments.</li>
          <li className="list-group-item list-group-item-success"><strong>Eco-Friendly Products:</strong> Gentle on clothes and the planet.</li>
          <li className="list-group-item list-group-item-warning"><strong>Customer Satisfaction:</strong> We go the extra mile for you.</li>
        </ul>
      </section>

      {/* Contact Us Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center">
          Ready to experience the Fab Dryclean difference? 
          <br />
          Visit us at our location in Bhopal or contact us for more information on our services.
        </p>
        <div className="text-center">
          <p><strong>Phone:</strong> +91 79 87 5866 71</p>
          <p><strong>Email:</strong> fabdryclean@gmail.com</p>
          <p><strong>Address:</strong> Shop No. 38, Harsh Vardhan Nagar, Bhopal</p>
        </div>
      </section>

      {/* Loyalty Program Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Join Our Loyalty Program</h2>
        <p className="text-center">
          Sign up for our loyalty program to enjoy exclusive discounts and rewards. 
          Because at Fab Dryclean Bhopal, we value our customers!
        </p>
        <div className="text-center">
          <a href="#!" className="btn btn-success">Sign Up Now</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center my-5">
        <p>Let us take care of your laundry needs while you enjoy life. Discover the fab way to dry clean with Fab Dryclean Bhopal!</p>
      </footer>
    </div>
  );
};

export default FabDryclean;

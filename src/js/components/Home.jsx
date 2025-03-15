import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


const Jumbotron = () => {
  return (
    <div className="container my-5">
      <div className="p-5 bg-light rounded-3">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Welcome to our website! Here, you’ll find all the information you need about our services.
        </p>
        <div className="text-start">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action!
          </a>
        </div>
      </div>
    </div>
  );
};


const Card = ({ imageUrl, title, description, buttonLabel }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt="Card image" />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary">{buttonLabel}</a>
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  
  const cardsData = [
    {
      title: "First Card",
      description: "This is a brief description of the first card.",
      buttonLabel: "Find Out More!",
      imageUrl: "https://picsum.photos/id/195/500/325",
    },
    {
      title: "Second Card",
      description: "Here’s another interesting piece of content.",
      buttonLabel: "Find Out More!",
      imageUrl: "https://picsum.photos/id/190/500/325",
    },
    {
      title: "Third Card",
      description: "Explore more about what we have to offer.",
      buttonLabel: "Find Out More!",
      imageUrl: "https://picsum.photos/id/189/500/325",
    },
    {
      title: "Fourth Card",
      description: "Last but not least...",
      buttonLabel: "Find Out More!",
      imageUrl: "https://picsum.photos/id/139/500/325",
    }
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      
      <div className="container">
        <div className="row justify-content-center">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              buttonLabel={card.buttonLabel}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
      
      <footer className="bg-dark py-3 mt-5">
        <div className="container text-center">
          <span className="text-white">Copyright © Your Website 2025</span>
        </div>
      </footer>
    </>
  );
};

export default Home;

import React from "react";
import "./App.css";

const images = [
  { src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&h=300", title: "Forest" },
  { src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&h=300", title: "City" },
  { src: "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&h=300", title: "Ocean" },
  { src: "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&h=300", title: "Sunset" },
  { src: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&h=300", title: "Space" },
  { src: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=300", title: "Mountains" },
  { src: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&h=300", title: "Road" },
  { src: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&h=300", title: "Bridge" },
];





export default function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">Mood Board Tool</div>
        <nav>
          <a href="#">Explore</a>
          <a href="#">Log in</a>
          <button className="submit-btn">Submit a Photo</button>
        </nav>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <h1>MOOD BOARD TOOL</h1>
        <p className="trending">
          Trending: <span>flower</span>, wallpapers, backgrounds, happy, love
        </p>
        <input type="text" placeholder="Search high-resolution images" className="search-box" />
      </section>

      {/* Image Gallery */}
      <div className="gallery">
        {images.map((img, index) => (
          <a key={index} href={img.link} className="image-link">
            <img src={img.src} alt={img.title} />
          </a>
        ))}
      </div>
    </div>
  );
}

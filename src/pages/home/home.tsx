import './home.css'

export default function Home() {
  return (
    <section id="home" className="home-section">
        <div className="home-container">
            <h1 className="home-title">Welcome to <span className="home-span">SpiderNest</span></h1>
            <p className="home-desc">Dive into the world of Spider-Man, where responsibility, courage, and sacrifice define a true hero. This site is a tribute to the legacy of the friendly neighborhood Spider-Man, exploring his origins, iconic suits, greatest villains, and unforgettable moments across comics, movies, and games. With a modern, immersive design, every section brings you closer to the web-slinger’s universe, celebrating the idea that anyone can wear the mask and become a hero.</p>
            <button className="home-btn" >Explore</button>
        </div>
    </section>
  )
}
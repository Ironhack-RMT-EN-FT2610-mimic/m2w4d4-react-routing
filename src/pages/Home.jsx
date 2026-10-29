import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      
      <h1>Welcome to the Home Page</h1>

      <p>This is the home page content.</p>

      <p>Welcome to our website!</p>

      <p>navigate through our pages!</p>

      <Link to="/about">About</Link>
      <br />
      <Link to="/contact-info">Contact</Link>

    </div>
  )
}
export default Home
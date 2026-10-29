import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

import { Link, Routes, Route  } from "react-router-dom"
import NotFound from "./pages/NotFound"
import EventList from "./pages/EventList"
import EventDetails from "./pages/EventDetails"

function App() {

  return (
    <>

      {/* IN react router dom we should NEVER use anchor tags for internal navigation, instead we use the Link Component. */}

      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact-info">Contact</Link>
        <br />
        <Link to="/event-list">Events</Link>
      </nav>

      <hr />

      {/* <div style={{display: "flex"}}>

        <h2>Sidebar</h2> */}

        <Routes>

          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact-info" element={ <Contact /> } />
          <Route path="/event-list" element={ <EventList /> } />
          <Route path="/event-details/:eventId" element={ <EventDetails /> }/>

          <Route path="*" element={ <NotFound /> }/>

        </Routes>

      {/* </div> */}

      <hr />
     
     <h2>Footer</h2>

    </>
  )
}

export default App

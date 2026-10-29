import eventsJSON from "../data/events.json"
import { Link } from "react-router-dom"

function EventList() {
  return (
    <div>
      
      <h3>List of events</h3>

      {eventsJSON.map((event) => {
        return (
          <p>
            <Link to={`/event-details/${event.id}`}>{event.title}</Link>
          </p>
        )
      })}

    </div>
  )
}
export default EventList
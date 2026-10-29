import eventsJSON from "../data/events.json"
import { useParams } from "react-router-dom"

function EventDetails() {

  const params = useParams()
  console.log(params)

  // finding the right event (from the params title) in the full JSON and rendering that

  const foundEvent = eventsJSON.find((event) => {
    return event.id === params.eventId
  })

  console.log(foundEvent)

  return (
    <div>
      
        <h3>Event Details</h3>

        <h2>{foundEvent.title}</h2>

        <h3>Category: {foundEvent.category}</h3>

        <p>Location: {foundEvent.location}</p>

        <p>Date: {foundEvent.date}</p>

    </div>
  )
}
export default EventDetails
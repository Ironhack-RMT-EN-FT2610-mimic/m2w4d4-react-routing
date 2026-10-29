import { useState } from "react"
import eventsJSON from "../data/events.json"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

function EventList() {

  // const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get("category")
  console.log(selectedCategory)

  const handleSelectCategory = (event) => {
    console.log(event.target.value)
    setSearchParams({ category: event.target.value })
  }

  const filteredEvents = eventsJSON.filter((event) => {
    return event.category === selectedCategory
  })

  return (
    <div>
      
      <h3>List of events</h3>

      <select onChange={handleSelectCategory} value={selectedCategory || "All"}>
        <option value={"All"}>All</option>
        <option value={"Film"}>Film</option>
        <option value={"Food"}>Food</option>
        <option value={"Music"}>Music</option>
        <option value={"Art"}>Art</option>
      </select>

      <h4>Showing {selectedCategory} events!</h4>

      {((selectedCategory === "All" || !selectedCategory) ? eventsJSON : filteredEvents).map((event) => {
        return (
          <p key={event.id}>
            <Link to={`/event-details/${event.id}`}>{event.title}</Link>
          </p>
        )
      })}

    </div>
  )
}
export default EventList
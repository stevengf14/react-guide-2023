import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: "e1",
    title: "First Dummy Event!",
    description: "This is the first dummy event! Enjoy it",
  },
  {
    id: "e2",
    title: "Second Dummy Event!",
    description: "This is the second dummy event! Enjoy it",
  },
  {
    id: "e3",
    title: "Third Dummy Event!",
    description: "This is the Thrid dummy event! Enjoy it",
  },
  {
    id: "e4",
    title: "Fourth Dummy Event!",
    description: "This is the first dummy event! Enjoy it",
  },
  {
    id: "e5",
    title: "Fifth Dummy Event!",
    description: "This is the fifth dummy event! Enjoy it",
  },
];
function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id} relative="path">
              {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;

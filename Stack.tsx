import Popup from "reactjs-popup";
import Events from "events/Events/Events";

import "./style.scss";

const events = ["C#", "C++", "CSS", "Django"];
export interface EventsProps {
  id: number;
  name: string;
  checked: boolean;
}

const events: EventsProps[] = [
  {
    id: 1,
    name: "Митап-1",
  
  },
  {
    id: 2,
    name: "Митап-2",
   
  },
  {
    id: 3,
    name: "Хакатон",
   
  },
  
];

const Stack = () => {
  return (
    <div className="stack">
      <button className="stack__add">Выбрать тему</button>
      <Popup
        trigger={<button className="stack__add">Выбрать тему</button>}
        modal
        nested>
        <Events  events={events}/>
      </Popup>

      <ul className="stack__list">
        {events.map((events: string, id: number) => (
          <li key={id} className="stack__item">
            {events}
          </li>
        ))}
        {events.map(
          (events: EventsProps) =>
            events.checked && (
              <li key={events.id} className="stack__item">
                {events.name}
              </li>
            )
        )}
      </ul>
    </div>
  );

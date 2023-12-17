import { EventsProps } from "events/Stack/Stack";

import "./style.scss";

interface EventsProps {
  events: EventsProps[];
}

const EventsProps = ({ events }: EventsProps) => {
  return (
    <div className="evensts">
      <p className="events__title"> Мероприятия </p>

      <form action="">
        <ul className="events__list">
          {events.map((events: EventsProps) => (
            <li key={events.id} className="events__item">
              <label className="events__label" htmlFor={events.name}>
                {events.name}
                <input
                  className="events__input"
                  type="checkbox"
                  id={events.name}
                  name={events.name}
                  defaultChecked={events.checked}
                />
                <span className="events__checkmark"></span>
              </label>
            </li>
          ))}
        </ul>

        <button className="events__submit" type="submit">
 Выбрать
        </button>
      </form>
    </div>
  );
};

export default  EventsProps;

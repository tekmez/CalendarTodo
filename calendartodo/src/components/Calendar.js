import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import BootstrapTheme from '@fullcalendar/bootstrap';
import { Button } from 'react-bootstrap';
import AddTodo from './AddTodo';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };
  const handleEventClick = (arg) => {
    console.log(arg);
  };
  const defaultEvents = [
    {
      id: 10,
      title: 'Todo 1',
      start: new Date(),
      className: 'bg-warning',
    },
    {
      id: 20,
      title: 'Todo 2',
      start: new Date().setDate(new Date().getDate() + 2),
      className: 'bg-danger',
    },
    {
      id: 30,
      title: 'Todo 3',
      start: new Date().setDate(new Date().getDate() + 2),
      end: new Date().setDate(new Date().getDate() + 4),
      className: 'bg-success',
    },
    {
      id: 40,
      title: 'Todo 4',
      start: new Date().setDate(new Date().getDate() + 4),
      end: new Date().setDate(new Date().getDate() + 5),
      className: 'bg-warning',
    },
  ];
  const showAddTodo = () => {
    setShow(true);
  };
  const onHide = () => {
    setShow(false);
  };
  const addTodo = () => {};
  return (
    <>
      <Button className="calendar-add-btn" onClick={showAddTodo}>
        New Todo
      </Button>
      <div className="calendar">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            BootstrapTheme,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          themeSystem="bootstrap"
          handleWindowResize={true}
          buttonText={{
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            next: 'Next',
            prev: 'Prev',
            list: 'List',
          }}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
          weekends={true}
          events={defaultEvents}
          dateClick={handleDateClick}
          selectable={true}
          editable={false}
          droppable={true}
          eventClick={handleEventClick}
          dayMaxEventRows={3}
        />
      </div>
      <AddTodo show={show} onHide={onHide} addTodo={addTodo} />
    </>
  );
};

export default Calendar;

import React, { useCallback, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import BootstrapTheme from '@fullcalendar/bootstrap';
import { useDispatch } from 'react-redux';
import { setUpdateTodo } from '../redux/actions';

const Calendar = ({ events, setEvents, show2Modal }) => {
  const dispatch = useDispatch();
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };
  const handleEventClick = (arg) => {
    (async () => {
      try {
        const response = await fetch(
          `https://631df7facc652771a48ef098.mockapi.io/todos/${arg.event._def.publicId}`,
          {
            method: 'get',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        const json = await response.json();
        await dispatch(setUpdateTodo(json));
        await show2Modal(true);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const bg = useCallback(() => {
    const date = new Date();
    setEvents((current) =>
      current.map((obj) => {
        if (new Date(obj.start).getTime() < date.getTime()) {
          return { ...obj, className: 'bg-danger' };
        }
        return obj;
      })
    );
  }, [setEvents]);

  useEffect(() => {
    bg();
  }, [bg]);

  return (
    <>
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
          events={events}
          dateClick={handleDateClick}
          selectable={true}
          editable={false}
          droppable={true}
          eventClick={handleEventClick}
          dayMaxEventRows={3}
        />
      </div>
    </>
  );
};

export default React.memo(Calendar);

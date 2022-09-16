import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddTodo from '../components/AddTodo';
import Calendar from '../components/Calendar';
import TodoModal from '../components/TodoModal';
import UserInfo from '../components/UserInfo';

const Home = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 0,
      title: 'Todo 1',
      start: new Date(),
      className: 'bg-warning',
    },
  ]);
  const showAddTodo = () => {
    setShow(true);
  };
  useEffect(() => {
    fetch('https://631df7facc652771a48ef098.mockapi.io/todos', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => setEvents(json));
  }, []);

  return (
    <>
      <UserInfo />
      <Button className="calendar-add-btn" onClick={showAddTodo}>
        New Todo
      </Button>
      <Calendar
        events={events}
        setEvents={setEvents}
        show={show}
        show2Modal={setShow2}
      />
      <AddTodo setEvents={setEvents} show={show} setShow={setShow} />
      <TodoModal
        events={events}
        setEvents={setEvents}
        show={show2}
        setShow={setShow2}
      />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TodoModal = ({ setEvents, events, setShow, show }) => {
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [todoContent, setTodoContent] = useState('');
  const todoData = useSelector((state) => state.updateTodo);
  const onHide = () => {
    setShow(false);
  };
  useEffect(() => {
    if (todoData === null) return;
    setTodoName(todoData.title);
    setTodoDate(todoData.start);
    setTodoContent(todoData.content);
  }, [todoData]);

  const putFetchApi = (data) => {
    fetch(
      `https://631df7facc652771a48ef098.mockapi.io/todos/${Number(
        todoData.id
      )}`,
      {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    ).catch((err) => console.log('Something went wrong', err));
  };
  const updateTodoBtn = () => {
    const todoDatas = {
      id: todoData.id,
      isCompleted: todoData.isCompleted,
      title: todoName,
      start: todoDate,
      content: todoContent,
      className: 'bg-warning',
    };
    putFetchApi(todoDatas);
    const todos = events.map((el) =>
      el.id === todoData.id ? (el = todoDatas) : el
    );
    setEvents([...todos]);
    setShow(false);
  };
  const finishTodo = () => {
    const todoDatas = {
      id: todoData.id,
      isCompleted: true,
      title: todoName,
      start: todoDate,
      content: todoContent,
      className: 'bg-success',
    };
    putFetchApi(todoDatas);
    const todos = events.map((el) =>
      el.id === todoData.id ? (el = todoDatas) : el
    );
    setEvents([...todos]);
    setShow(false);
  };
  const delteTodoBtn = () => {
    const arr = events.filter((el) => el.id !== todoData.id);
    setEvents([...arr]);
    fetch(
      `https://631df7facc652771a48ef098.mockapi.io/todos/${Number(
        todoData.id
      )}`,
      {
        method: 'delete',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    ).catch((err) => console.log('Something went wrong', err));
    setShow(false);
  };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>Todo Name</span>
        <Form.Control
          type="text"
          placeholder="Enter a todo name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <span>Date</span>
        <Form.Control
          type="date"
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />
        <textarea
          style={{ marginTop: '10px' }}
          rows={3}
          cols={101}
          placeholder="You can add todo details"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ color: 'white' }} variant="warning" onClick={onHide}>
          Close
        </Button>
        <Button variant="danger" onClick={delteTodoBtn}>
          Delete
        </Button>
        <Button variant="success" onClick={finishTodo}>
          Finish
        </Button>
        <Button variant="success" onClick={updateTodoBtn}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;

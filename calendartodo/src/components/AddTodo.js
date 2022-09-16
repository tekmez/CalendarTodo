import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTodo = ({ setEvents, show, setShow }) => {
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [todoContent, setTodoContent] = useState('');
  const onHide = () => {
    setShow(false);
  };
  const addTodoBtn = () => {
    const todoData = {
      title: todoName,
      start: todoDate,
      content: todoContent,
      className: 'bg-warning',
      id: todoName,
      isCompleted: false,
    };
    fetch('https://631df7facc652771a48ef098.mockapi.io/todos', {
      method: 'post',
      body: JSON.stringify(todoData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => setEvents((state) => [...state, json]))
      .catch((err) => console.log('Something went wrong', err));
    setTodoContent('');
    setTodoDate('');
    setTodoName('');
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
        <Button variant="success" onClick={addTodoBtn}>
          Add Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTodo;

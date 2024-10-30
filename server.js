const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let tasks = [];
let currentId = 1;

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));  // Cambié "task" a "tasks"
    if (!task) return res.status(404).send('Tarea no encontrada.');
    res.json(task);
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).send('El título es obligatorio.');

    const task = { id: currentId++, title, description, completed: false };
    tasks.push(task);
    res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarea no encontrada.');

    const { title, description, completed } = req.body;
    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send('Tarea no encontrada.');

    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
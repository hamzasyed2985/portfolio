import React, { useState } from 'react';
import './Todo.css';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';


const styles = {
    todoMain: "min-h-screen w-full",
    todoHeader: "bg-no-repeat bg-cover mb-20 flex justify-center",
    headerTitle: "text-white text-5xl font-semibold py-6",
    todoApp: "flex flex-col w-11/12 sm:w-10/12 md:w-3/4 mx-auto font-sans bg-[#1051000f] p-[5%] rounded-[40px]",
    form: "flex flex-col gap-y-2 md:flex-row mb-12 p-10 rounded-full bg-[#0d5b1a2e]",
    input: "flex-1 p-5 border border-gray-300 rounded-full transition-colors duration-300 ease-in-out focus:border-[#00a103] focus:outline-none",
    button: "border-none bg-[#157f3d] text-white cursor-pointer ml-2.5 hover:bg-[#0d863ce0]",
    submitButton: "rounded-full px-5 py-5",
    list: "list-none p-0",
    listItem: "flex items-center justify-between border-b border-[#00a10356] last:border-b-0 py-2",
    label: "flex-1",
    labelCompleted: "line-through text-gray-400",
    clearCompletedButton: "mx-auto mt-5 cursor-pointer p-5 rounded-full w-[200px] border-none bg-[#157f3d] text-white hover:bg-[#0d863ce0]",
    editButton: "rounded px-5 py-2.5",
    deleteButton: "bg-white !text-black ml-2.5 rounded px-5 py-2.5 hover:!bg-[#9ed19f]",
    filterDiv: "text-right p-2.5",
    filter: "p-2.5 border border-gray-300 rounded",
    tasksTitle: "flex p-2.5 justify-between",
    tasksTitleSpan: "font-bold text-lg",
    modal: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-[1000]",
    modalForm: "bg-white flex flex-row p-5 rounded shadow-md w-[90%] max-w-[500px] text-center",
    modalButton: "px-5 py-2.5 rounded",
    modalInput: "w-full p-2.5 border border-gray-300 rounded text-base transition-colors duration-300 ease-in-out focus:border-[#00a103] focus:outline-none",
};


const fadeInAnimation = keyframes`${fadeIn}`;
const FadeIn = styled.div`
  animation: 0.5s ${fadeInAnimation};
`;

let count = 1;

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editTaskText, setEditTaskText] = useState("");
    const [filterValue, setFilterValue] = useState('All');

    const handleAddTask = (e) => {
        e.preventDefault();
        const newTaskText = e.target.elements.newTask.value;
        if (newTaskText) {
            setTasks([
                ...tasks,
                { id: count += 1, text: newTaskText, completed: false },
            ]);
            e.target.elements.newTask.value = "";
        }
    };

    const handleSelectChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleToggle = (taskID) => {
        setTasks(tasks.map((t) =>
            t.id === taskID ? { ...t, completed: !t.completed } : t
        ));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter((t) => !t.completed));
    };

    const startEditing = (taskID, currentText) => {
        setEditingTaskId(taskID);
        setEditTaskText(currentText);
    };

    const handleEditTask = (e) => {
        e.preventDefault();
        setTasks(tasks.map((t) =>
            t.id === editingTaskId ? { ...t, text: editTaskText } : t
        ));
        setEditingTaskId(null);
        setEditTaskText("");
    };

    const handleDeleteTask = (taskID) => {
        setTasks(tasks.filter((t) => t.id !== taskID));
    };

    const filteredTasks = tasks.filter((task) =>
        filterValue === 'All' || (filterValue === 'Completed' && task.completed)
    );

    return (
        <div className={styles.todoMain}>
            <div className={`todo-header ${styles.todoHeader}`}>
                <h1 className={styles.headerTitle}>Todo App</h1>
            </div>
            <div className={styles.todoApp}>
                <form onSubmit={handleAddTask} className={styles.form}>
                    <input type="text" id='task' name="newTask" placeholder="What do you need to do?" className={styles.input} />
                    <button className={`${styles.button} ${styles.submitButton}`} type="submit">ADD TASK</button>
                </form>

                <div className={styles.filterDiv}>
                    <select name="filter" id="filter" value={filterValue} onChange={handleSelectChange} className={styles.filter}>
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className={styles.tasksTitle}>
                    <span className={styles.tasksTitleSpan}>Tasks</span>
                    <span className={styles.tasksTitleSpan}>Edit / Delete</span>
                </div>

                <ul className={styles.list}>
                    <AnimatePresence>
                        {filteredTasks.map((task) => (
                            <motion.li
                                key={task.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.5 }}
                                className={styles.listItem}
                            >
                                <div className="checkbox-wrapper-15">
                                    <input className="inp-cbx" id={`cbx-${task.id}`} type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} style={{ display: 'none' }} />
                                    <label className="cbx" htmlFor={`cbx-${task.id}`}>
                                        <span>
                                            <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                <polyline points="1 5 4 8 11 1"></polyline>
                                            </svg>
                                        </span>
                                        <span> {task.text}</span>
                                    </label>
                                </div>
                                <div>
                                    <button className={`${styles.button} ${styles.editButton}`} onClick={() => startEditing(task.id, task.text)}>Edit</button>
                                    <button className={`${styles.deleteButton}`} onClick={() => handleDeleteTask(task.id)}>🗑️</button>
                                </div>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>

                {editingTaskId && (
                    <FadeIn>
                        <div className={styles.modal}>
                            <form onSubmit={handleEditTask} className={styles.modalForm}>
                                <input
                                    type="text"
                                    name="editTask"
                                    value={editTaskText}
                                    onChange={(e) => setEditTaskText(e.target.value)}
                                    required
                                    className={styles.modalInput}
                                />
                                <button type="submit" className={`${styles.button} ${styles.modalButton}`}>Save</button>
                            </form>
                        </div>
                    </FadeIn>
                )}

                <button className={`${styles.clearCompletedButton}`} onClick={clearCompleted}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default Todo;

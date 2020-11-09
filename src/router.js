import { createRouter, createWebHistory } from 'vue-router';
import ToDo from './components/ToDo';
import Calendar from './components/Calendar';
import Home from './components/Home';
import Markdown from './components/Markdown';

const todoList = [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
];

const routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/todo/', 
        component: ToDo, 
        props: { todoList: todoList } // pass props as an object
    },
    {
        path: '/calendar', 
        component: Calendar
    },
    {
        path: '/markdown',
        component: Markdown
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
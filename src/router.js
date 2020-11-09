import { createRouter, createWebHistory } from 'vue-router';
import ToDo from './components/ToDo';
import Calendar from './components/Calendar';
import Home from './components/Home';

const todoList = [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
];

const routes = [
    {
        path: '/', 
        component:Home
    },
    {
        path: '/todo/', 
        component:ToDo, 
        props: { todoList: todoList } // pass props as an object
    },
    {
        path: '/calendar', 
        component:Calendar
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
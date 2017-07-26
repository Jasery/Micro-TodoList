<template>
    <div>
        <filter-sort></filter-sort>
        <div class="content">
            <todo-item v-for="item in todoList" :key="item.id" :todoItem="item"></todo-item>
            <todo-item v-for="item in todoList" :key="item.id" :todoItem="item"></todo-item>
            <todo-item v-for="item in todoList" :key="item.id" :todoItem="item"></todo-item>
            <todo-item v-for="item in todoList" :key="item.id" :todoItem="item"></todo-item>
        </div>
        <todo-add-link></todo-add-link>
    </div>
</template>

<script>
import FilterSort from './FilterSort.vue'
import TodoAddLink from './TodoAddLink.vue'
import TodoItem from '../components/TodoItem.vue'
import Shade from '../components/Shade.vue'
export default {
    name: 'TodoList',
    components: {
        FilterSort,
        TodoItem,
        TodoAddLink,
        Shade
    },
    data() {
        return {
            todoList: []
        };
    },
    mounted () {
        this.todoList = [
            {
                id: 1,
                title: "这是一条备忘录",
                time: "2017-07-21 19:32:00"
            },
            {
                id: 2,
                title: "这是lingwai一条备忘录",
                time: "2017-07-21 19:32:00"
            }
        ]
        
    },
    methods: {

    }
}
</script>

<style>
    .content{
        /* height: 570px; */
        padding-top: 35px;
        overflow-x: auto;
        box-sizing: border-box;
        /* border: 1px solid salmon; */
    }
    .content::-webkit-scrollbar {
        display: none;
    }

</style>


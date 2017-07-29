<template>
    <div>
        <filter-sort></filter-sort>
        <div class="content">
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
import stroe from '../store'
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
        this.todoList = stroe.fetch()  
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


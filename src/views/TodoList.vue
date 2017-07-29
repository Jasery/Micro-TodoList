<template>
    <div>
        <filter-sort></filter-sort>
        <div class="content">
            <todo-item v-for="item in todoList" 
                :key="'todo-item-'+ item.id" 
                :todoItem="item" 
                @remove="removeTodoItem">
            </todo-item>
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
        removeTodoItem(todoItem) {
            var index = this.todoList.indexOf(todoItem)
            this.todoList.splice(index,1)
        }
    },
    watch: {
        todoList: {
            handler: function(val, oldVal) {
                stroe.save(val)
            },
            deep: true
        }
    }
}
</script>

<style>
    .content{        
        padding-top: 35px;
        overflow-x: auto;
        box-sizing: border-box;
    }
    .content::-webkit-scrollbar {
        display: none;
    }

</style>


<template>
    <div>
        <filter-sort @filter="changeFilter" @sort="changeSort"></filter-sort>
        <div class="content">
            <todo-item v-for="item in displayList " 
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
            todoList: [],
            displayList: [],
            sortType: '',
            filterType: ''
        };
    },
    mounted () {
        this.todoList = stroe.fetch()  
        this.displayList = this.todoList
    },
    methods: {
        removeTodoItem(todoItem) {
            var index = this.todoList.indexOf(todoItem)
            this.todoList.splice(index,1)
        },
        changeFilter(type) {
            this.filterType = type
            if(type == 'all') {
                this.displayList = this.todoList.slice()    //数组浅拷贝，解决displayList的更新会影响到todoList的问题
            } else if (type == 'isCompleted') {
                this.displayList = this.todoList.filter(x => x.isCompleted)
            } else if (type == 'notCompleted') {
                this.displayList = this.todoList.filter(x => !x.isCompleted)
            }
        },
        changeSort(type) {
            this.sortType = type
            if(type == 'createTime') {
                this.displayList.sort((a, b) => a.createTime.localeCompare(b.createTime))
            } else if (type == 'updateTime') {
                this.displayList.sort((a, b) => a.updateTime.localeCompare(b.updateTime))
            } else if (type == 'title') {
                this.displayList.sort((a, b) => a.title.localeCompare(b.title))
            }
        },
        updateDisplayList() {
            this.changeFilter(this.filterType)
            this.changeSort(this.sortType)
        }
    },
    watch: {
        todoList: {
            handler: function(val, oldVal) {
                this.updateDisplayList()
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


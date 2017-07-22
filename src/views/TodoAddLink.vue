<template>
    <div class="todo-add-link">
        <router-link to="/add">+</router-link>
    </div>
</template>

<script>

export default {
    name: 'TodoAddLink',
    data() {
        return {}
    }
}
</script>

<style>
    .todo-add-link {
        height: 60px;
        width: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 50%;
        position: fixed;
        right: 30px;
        bottom: 30px;
        background-color: #0EBF5A;
    }
    .todo-add-link a {
        font-size: 30px;
        color: white;
        text-decoration: none;
    }
</style>

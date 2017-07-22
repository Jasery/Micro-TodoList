<template>
  <div class="todo-item-container">
    <div class="todo-item">
        <div class="todo-content">
            <p class="todo-title">{{todoItem.title}}</p>
            <p class="todo-time">{{todoItem.time}}</p>
        </div>
        <div class="mark-completed">标记已完成</div>
        <div class="remove">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todoItem", "msg"]
}
</script>

<style>
    .todo-item-container {
        overflow-x: auto;
        margin: 5px;
    }
    .todo-item-container::-webkit-scrollbar {
        display: none;
    }
    .todo-item {
        width: 150%;
        height: 60px;
        box-sizing: border-box;
    }
    .todo-item:after {
        content: "";
        display: block;
        clear: both;
    }
    .todo-item > div {
        height: 100%;
        box-sizing: border-box;
        margin: 0;
        float: left;
    }
    .todo-item .todo-content {
        width: 67%;
        background-color: white;
    }
    .todo-item .mark-completed, .todo-item .remove {
        line-height: 60px;
        font-size: 18px;
        color: white;
        text-align: center;
    }
    .todo-item .mark-completed {
        width: 21%;
        background-color: #CECECE;
    }
    .todo-item .remove {
        width: 12%;
        background-color: #E64340;
    }
    .todo-content .todo-title {
        margin: 8px 0 5px 10px; 
        font-size: 18px;
    }
    .todo-content .todo-time {
        font-size: 12px;
        margin: 0 10px;
        color: #979797;
    }
</style>

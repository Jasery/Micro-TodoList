<template>
  <div class="todo-item-container">
    <div class="todo-item" @click="edit(todoItem.id)">
        <div class="todo-content">
            <p class="todo-title">{{todoItem.title}}</p>
            <p class="todo-time">{{dateTimeString}}</p>
        </div>
        <div class="mark-completed">标记已完成</div>
        <div class="remove" @click.stop="remove(todoItem)">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data: function() {
      return {}
  },
  computed: {
      dateTimeString() {
          return this.getDateString(this.todoItem.time)
      }
  },
  props: ["todoItem"],
  methods: {
    remove(todoItem) {
        this.$emit("remove", todoItem)
    },
    getDateString(dateString) {
        var date = new Date(dateString)
        var year = date.getFullYear()
        var month = (date.getMonth() + 1).toString().padStart(2, '0')
        var day = date.getDate().toString().padStart(2, '0')
        var hour = date.getHours().toString().padStart(2, '0')
        var min = date.getMinutes().toString().padStart(2, '0')
        var sec = date.getSeconds().toString().padStart(2, '0')
        return `${year}-${month}-${day} ${hour}:${min}:${sec}`
    },
    edit(id) {
        this.$router.push('/edit/' + id)
    }
  }
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

<template>
    <div class="todo-add">
        <div class="todo-title">
            <input v-model="todoTitle" placeholder="未命名清单"> 
            <div class="clear-input" v-show="todoTitle" @click="clearInput">×</div>
        </div>
        <div class="todo-detail">
            <!-- <div class="detail-item">
                <div class="detail-content">
                    <div class="isComplete">
                        <input type="checkbox">
                    </div>
                    <div class="detail-text">
                        <input type="text" placeholder="点击编辑">
                    </div>
                    <div class="item-remove">删除</div>
                </div>
            </div> -->
            <detail-item v-for="detail in details" :key="detail"></detail-item>
            <div class="add-detail-item">
                添加事项
            </div>
        </div>
        <button class="detail-save">保存</button>
    </div>
</template>
<script>
import DetailItem from '../components/DetailItem.vue'
export default {
  name: 'TodoAdd',
  components: {
    DetailItem
  },
  data: function() {
      return {
          todoTitle: '',
          details: [{}]
      }
  },
  methods: {
      clearInput() {
          this.todoTitle = ''
      }
  }
}
</script>
<style>
    .todo-add {
        margin: 10px 0;
        /* position: relative; */
    }
    .todo-title {
        position: relative;
    }
    .todo-title input {
        width: 100%;
        height: 50px;
        border-left: none;
        border-right: none;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        text-indent: 20px;
        line-height: 50px;
        font-size: 20px;
        outline: none;
    }
    .todo-title .clear-input {
        position: absolute;
        color: white;
        background-color: #0EBF5A;
        height: 20px;
        width: 20px;
        line-height: 16px; 
        text-align: center;
        font-size: 20px;
        border-radius: 50%;
        top: 20px;
        right: 20px;
    }
    .todo-detail {
        margin-left: 10px;
        background-color: white;
    }
    .add-detail-item {
        color: #0EBF5A;
        font-size: 18px;
        line-height: 40px;
        text-indent: 10px;
    }
    .add-detail-item:before {
        content: "+";
        font-size: 25px;
    }
    .detail-save {
        height: 50px;
        background-color: #0EBF5A;
        border: none;
        border-radius: 5px;
        color: white;
        width: 90%;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
    }
</style>

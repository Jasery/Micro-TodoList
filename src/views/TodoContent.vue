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
            <detail-item v-for="(detail, index) in details" :key="'detail-' + detail.id" :detail.sync="detail" @remove="removeDetailItem"></detail-item>
            <div class="add-detail-item" @click="addDetailItem">
                添加事项
            </div>
        </div>
        <button class="detail-save" v-show="this.todoTitle || this.details.length > 0" @click="detailSave">保存</button>
        <shade v-show="isShowShade" @shadeClick="hideShade">
            <div class="err-tip">
                <p class="err-title">提示</p>
                <p class="err-msg">请输入清单标题</p>
                <p class="err-confirm">确定</p>
            </div>
        </shade>
    </div>
</template>
<script>
import DetailItem from '../components/DetailItem.vue'
import Shade from '../components/Shade.vue'
import stroe from '../store'
export default {
    name: 'TodoContent',
    components: {
    DetailItem,
    Shade
    },
    data () {
        return {
            detailCount: 1,
            editItem: null,
            isShowShade: false,
            todoTitle: '',
            details: [{
                id: 0,
                isComplete: false,
                detailText: ''
            }],
            todoList: {}
        }
  },
  methods: {
        clearInput() {
            this.todoTitle = ''
        },
        addDetailItem() {
            this.details.push({
                id: this.detailCount,
                isComplete: false,
                detailText: ''
            })
            this.detailCount++
        },
        removeDetailItem(detail) {
            var index = this.details.indexOf(detail)
            this.details.splice(index, 1)
        },
        detailSave() {
            if(!this.todoTitle) {
                this.isShowShade = true;
                return
            }
            if(this.editItem) {
                //edit
                this.editItem.title = this.todoTitle
                this.editItem.items = this.details.filter(d => d.detailText)
                this.editItem.updateTime = this.getDateString()  //编辑的时候，时间也会更新
                this.editItem.isCompleted = false
            } else {
                //add
                this.details = this.details.filter(d => d.detailText)
                var newId = this.getMaxId(this.todoList) + 1
                var data = {              
                    id: newId,
                    createTime: this.getDateString(),
                    updateTime: this.getDateString(),
                    title: this.todoTitle,
                    items: this.details,
                    isCompleted: false
                }
                this.todoList.push(data)
            }
            stroe.save(this.todoList)
            this.$router.push('/')
        },
        hideShade() {
            this.isShowShade = false
        },
        getMaxId(list) {
            if(list.length == 0) {
                return 1
            }
            var maxId = list[0].id
            list.forEach(x => x.id > maxId ? maxId = x.id : maxId)
            return maxId
        },
        getDateString() {
            var date = new Date()
            var year = date.getFullYear()
            var month = (date.getMonth() + 1).toString().padStart(2, '0')
            var day = date.getDate().toString().padStart(2, '0')
            var hour = date.getHours().toString().padStart(2, '0')
            var min = date.getMinutes().toString().padStart(2, '0')
            var sec = date.getSeconds().toString().padStart(2, '0')
            return `${year}-${month}-${day} ${hour}:${min}:${sec}`
        }
    },
    mounted() {
        this.todoList = stroe.fetch()
        if(this.$route.params.id) {
            var editItem = this.todoList.find(t => t.id == this.$route.params.id)
            if(editItem) {
                this.todoTitle = editItem.title
                this.details = JSON.parse(JSON.stringify(editItem.items))
                this.editItem = editItem    //把需要编辑的对象存下，方便后续的数据更新
                this.detailCount = this.getMaxId(editItem.items) + 1
            }
        }
    }
}
</script>
<style>
    .todo-add {
        margin: 10px 0;
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
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
    }
    .err-tip {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        width: 250px; 
    }
    .err-tip .err-title {
        margin: 0;
        font-size: 20px;
    }
    .err-tip .err-msg {
        margin-top: 10px; 
        color: #8A778A;
    }
    .err-tip .err-confirm {
        margin: 20px 0 0 0;
        text-align: right;
        color: #0EBF5A;
    }
</style>

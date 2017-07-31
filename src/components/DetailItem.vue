<template>  
    <div class="detail-item">
        <div class="detail-content">
            <div class="isCompleted">
                <input :id="'isCompleted-' + detail.id" v-model="detail.isCompleted" type="checkbox">
                <label :for="'isCompleted-' + detail.id"></label>
            </div>
            <div class="detail-text">
                <input v-model="detail.detailText" type="text" placeholder="点击编辑">
            </div>
            <div class="item-remove" @click="remove(detail)">删除</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailItem',
  props: ["detail"],
  data: function() {
      return {
      }
  },
  methods: {
    remove(detail) {
        this.$emit("remove", detail)
    }
  },
  watch: {
  }

}
</script>

<style>
    .detail-item {
        overflow-x: auto;
    }
    .detail-item::-webkit-scrollbar {
        display: none;
    }
    .detail-item .detail-content {
        width: 120%;                
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
        height: 40px;
        line-height: 40px;
    }
    .detail-item .detail-content > div {
        float: left;
    }
    .detail-item .detail-content .isCompleted {
        width: 10%;
        padding: 5px 0;   
    }
    .detail-item .detail-content .isCompleted input[type=checkbox] {
        display: none; 
    }
    /* 优化checkbox */
    .detail-item .detail-content .isCompleted input[type=checkbox] + label {
        height: 25px;
        width: 25px;
        /* background-color: #e5e5e5; */
        box-sizing: border-box;
        display: inline-block;
        border: 1px solid #0EBF5A;
        margin: 2px;        
        position: relative; 
        /* z-index: -1; */
    }
    .detail-item .detail-content .isCompleted input[type=checkbox]:checked + label{
        border: 1px solid #e5e5e5;
    }
    .detail-item .detail-content .isCompleted input[type=checkbox]:checked + label:before {
        content: "";
        display: block;
        box-sizing: border-box;  
        position: absolute;
        border-top: 3px solid transparent;
        border-right: 10px solid #0EBF5A;;
        border-bottom: 3px solid transparent;
        border-left: 0;
        transform: translateY(11px) rotate(30deg);
    }
    .detail-item .detail-content .isCompleted input[type=checkbox]:checked + label:after {
        content: "";
        display: block;
        box-sizing: border-box;  
        position: absolute;
        /* border: 3px solid black; */
        border-top: 3px solid transparent;
        border-right: 0;
        border-bottom: 3px solid transparent;
        border-left: 20px solid #0EBF5A;;
        transform: translate(4px, 8px) rotate(-45deg);

    }
    .detail-item .detail-content .detail-text {
        width: 80%;
    }
    .detail-item .detail-content .detail-text input {
        height: 25px;
        border: none;
        line-height: 25px;
        outline: none;
        padding: 5px 0;   
        font-size: 18px;
    }
    .detail-item .detail-content .item-remove {
        width: 10%;
        background-color: red; 
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
        font-size: 18px;
    }

</style>

<template>  
    <div class="detail-item">
        <div class="detail-content">
            <div class="isComplete">
                <input v-model="isComplete" type="checkbox">
            </div>
            <div class="detail-text">
                <input v-model="detailText" type="text" placeholder="点击编辑">
            </div>
            <div class="item-remove">删除</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailItem',
  data: function() {
      return {
          isComplete: false,
          detailText: ''
      }
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
    .detail-item .detail-content .isComplete {
        width: 10%;
        padding: 5px 0;   
    }
    .detail-item .detail-content .isComplete input[type=checkbox] {
        height: 25px;
        width: 25px;
        margin: 2px;
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

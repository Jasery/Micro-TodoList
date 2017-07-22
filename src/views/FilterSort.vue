<template>
  <div class="filter-sort">
    <div class="filter">
      <span v-text="filterText"></span>
    </div>
    <div class="sort">
      <span v-text="sortText"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSort',
  props: ["text"],
  data: function() {
    return {
      isShowItems: false,
      filterText: "未完成清单",
      sortText: "按更新时间排序"
    }
  },
  methods: {
    toggleContent: function() {
      this.isShowItems = !this.isShowItems;
    }
  }
}
</script>

<style>
.filter-sort {
  position: absolute;
  top: 45px;
  width: 100%;
  background-color: white;
}

.filter-sort:after {
  content: "";
  display: block;
  clear: both;
}

.filter-sort > div {
  height: 35px;
  width: 50%;
  line-height: 35px;
  color: #0EBF5A;
  text-indent: 20px;
  box-sizing: border-box;
  float: left;
  position: relative;
  border: 1px solid #E5E5E5;
}
.filter-sort > div:after {
  content: "∨";
  position: absolute;
  right: 10px;
}


</style>


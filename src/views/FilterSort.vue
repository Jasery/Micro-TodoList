<template>
  <div class="filter-sort">
    <div class="filter" @click="toggleFilter">
      <div class="filter-sort-text">
        <span v-text="filterText"></span>
      </div>
       <shade v-show="isShowFilter">
        <ul>
          <li @click="filter('all')">{{filterTexts['all']}}</li>
          <li @click="filter('notCompleted')">{{filterTexts['notCompleted']}}</li>
          <li @click="filter('isCompleted')">{{filterTexts['isCompleted']}}</li>
        </ul>
      </shade> 
      
    </div>
    <div class="sort" @click="toggleSort">
      <div class="filter-sort-text">
        <span v-text="sortText"></span>
      </div>
      <shade v-show="isShowSort">
        <ul>
          <li @click="sort('title')">{{sortTexts['title']}}</li>
          <li @click="sort('createTime')">{{sortTexts['createTime']}}</li>
          <li @click="sort('updateTime')">{{sortTexts['updateTime']}}</li>
        </ul>
      </shade>
    </div>
  </div>
</template>

<script>
import Shade from '../components/Shade.vue'
export default {
  name: 'FilterSort',
  props: ['text'],
  components: {
      Shade
  },
  data() {
    return {
      isShowFilter: false,
      isShowSort: false,
      filterText: '全部清单',
      sortText: '按创建时间排序',
      filterTexts: {
        all: '全部清单',
        notCompleted: '未完成清单', 
        isCompleted: '已完成清单'
      },
      sortTexts: {
        title: '按名称排序',
        createTime: '按创建时间排序',
        updateTime: '按更新时间排序'
      }
    }
  },
  mounted() {
    this.$emit('sort', 'updateTime')
    this.$emit('filter', 'all')
  },
  methods: {
    toggleFilter() {
      this.isShowSort = false;
      this.isShowFilter = !this.isShowFilter;
    },
    toggleSort() {
      this.isShowFilter = false;
      this.isShowSort = !this.isShowSort;
    },
    sort(type) {
      this.sortText = this.sortTexts[type]
      this.$emit('sort', type)
    }, 
    filter(type) {
      this.filterText = this.filterTexts[type]
      this.$emit('filter', type)
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
  content: '';
  display: block;
  clear: both;
}

.filter-sort .filter, .filter-sort .sort {
  height: 35px;
  width: 50%;
  line-height: 35px;
  color: #0EBF5A;
  text-indent: 20px;
  box-sizing: border-box;
  float: left;
  position: relative;
}
.filter-sort .filter-sort-text:after {
  content: '';
  position: absolute;
  right: 10px;
  top: 10px;
  display: block;
  border-width: 0 1px 1px 0;
  border-color: #0EBF5A;
  border-style: solid;
  /* border: 1px solid black; */
  height: 10px;
  width: 10px;
  transform: rotate(45deg)
}
.filter-sort .filter > div {
  border: 1px solid #e5e5e5;
  border-left: none;
}
.filter-sort .sort > div {
  border: 1px solid #e5e5e5;
  border-right: none;
}
.filter ul, .sort ul {
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: white;
  width: 250px;
  /* width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  color: black;
  border-radius: 5px;
}
.filter ul {
  border-right: 1px solid #e5e5e5;
}
.sort ul {
  border-left: 1px solid #e5e5e5;
}
.filter ul li, .sort ul li {
  border-top: 1px solid #E5E5E5;
  padding: 5px;
}
.filter ul li:first-child, .sort ul li:first-child {
  border: none;
}
</style>


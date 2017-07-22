<template>
  <div>
    <filter-sort class="filter-list" text="hello">
        <ul>
            <li>全部清单</li>
            <li>未完成清单</li>
            <li>已完成清单</li>
        </ul>
    </filter-sort>
    <filter-sort text="wolrd"></filter-sort>
  </div>
</template>

<script>
import FilterSort from './FilterSort'
export default {
  name: 'FilterList',
  components: {
      FilterSort
  }

}
</script>

<style>
.filter-list ul {
    padding: 0;
    margin: 0;
}
.filter-list ul li {    
    list-style: none;
}
</style>

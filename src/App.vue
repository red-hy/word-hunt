<template>
  <div>
    <myHeader/>
    <mySearch/>
    <myResult/>
  </div>
</template>

<script>
import myHeader from '@/components/Header.vue'
import mySearch from '@/components/MySearch.vue'
import myResult from '@/components/SearchResult.vue'

export default {
  name: 'App',
  components: {
    myHeader,
    mySearch,
    myResult,
    }
}
</script>

<style>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #677381;
}
</style>

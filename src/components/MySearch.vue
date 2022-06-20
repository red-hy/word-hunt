<template>
  <div class="searchdiv">
    <input class="search-text" type="text" 
      οnfοcus="this.placeholder=''" 
      placeholder="请输入查询单词……" 
      v-model="searchWord"
      @keydown.enter="sendKey"
      >
    <!-- <input class="search-btn" type="button"/> -->
  </div>
</template>

<script>
export default {
  name:'mySearch',
  data(){
    return{
      searchWord:'',
    }
  },
  methods:{
    sendKey(){
      this.$bus.$emit('getSearchWord',this.searchWord);
    }
  },
  watch:{
    searchWord(){
      // this.$bus.$emit('headerKey',this.searchWord);
      this.$store.commit('getWord',this.searchWord);
    }
  }
    
}
</script>

<style scoped lang="less">
.searchdiv{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 8px;
  .search-text{
    height: 38px;
    width: 600px;
    padding-left: 6px;
    border: 3px solid #3B4856;
    background-color: #677381;
    border-radius: 6px;
    font-size: 18px;
    color: white;
    font-style: 'Times New Roman';
  }
  .search-text::-webkit-input-placeholder {
        color: white;
        font-size: 18px;
    }

  .search-text:hover{
    box-shadow: 0px 0px 3px #B9B9B9;
  }
  .search-text:focus{
    box-shadow: 0px 0px 3px #131C2A;
    place-content: '';
  }

  // .search-btn{
  //   position: absolute;
  //   right: 5px;
  //   top: 2px;
  //   margin: 9px 3px 9px 0px;
  //   background-image: url('../images/查询.png');
  //   background-size: 38px;
  //   background-repeat: no-repeat;
  //   border-radius: 18px;
  //   height: 38px;
  //   width: 38px;
  //   z-index: 99;
  // }
  // .search-btn:hover{
  //   box-shadow: 0px 0px 4px #9AA7B6;
  // }
}

</style>
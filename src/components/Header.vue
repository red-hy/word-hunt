<template>
  <div>
      <p>{{sechKey}}</p>
  </div>
</template>

<script>
export default {
    name:'myHeader',
    computed:{
        sechKey(){
            return this.$store.state.word;
        }
    },
}







</script>

<style scoped lang="less">
div{
    display: flex;
    justify-content: center;
    margin-top: 3vh;
    height: 80px;
    
    p{
    font-size: 48px;
    font-style: 'Times New Roman';
    color: white;
    }
}
</style>

</style>
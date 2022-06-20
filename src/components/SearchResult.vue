<template>
  <div class="border">
    <p v-if="!schword">
    Start by typing a word in search …
    </p>
    <p v-else-if="!results.length && schword">
    Sorry, the definition of this word was not found.
    </p>

    <div v-else class="definition" v-for="(itemobj, index) in results" :key="index">
        <!-- 音标读音 -->
        <div class="phonetics">
            <span @click="pronuClick(index)"><strong>{{schword}} : </strong>
            {{itemobj.phonetics[0].text}}
            <img src="../images/扬声器.png" class="redicon" @click="pronuClick(index)" alt="扬声器">
            </span>
            <audio :src="itemobj.phonetics[0].audio" ref="myAudio"></audio>
        </div>
        <!-- 词性词意 -->
        <div class="meanings" v-for="(meaning,index) in itemobj.meanings" :key="index">
            <p>{{meaning.partOfSpeech}}&nbsp;: &nbsp;&nbsp;{{meaning.definitions[0].definition}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  

  name:'myResult',
  data(){
    return{
      schword:'',
      results:[],
    }
  },
  methods:{
    // 绑定点击音标播放音频
    pronuClick(index){
      if(this.results[0].phonetics[0].audio){
        this.$refs.myAudio[index].play();
      }else{
        alert('Sorry, there is no audio file for this word. ');
      }
      
    },
  },
  mounted(){
    this.$bus.$on('getSearchWord',(searchWord)=>{
      console.log('结果组件收到数据去请求结果');
      this.schword = searchWord;
      this.results.length = 0;
      if (this.schword){
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.schword}`)
          .then((response)=>{
            //处理成功的情况
            this.results = response.data;
            // console.log('发音文件：',this.results[0].phonetics[0].audio);
          })
          .catch(function(error){
            //处理错误的情况
            console.log(error);
          })
      }
      else{
          alert('Please enter the query word. ');
      }
    })
  },
}
</script>

<style scoped lang="less">
.border{
    width: 620px;
    height: 400px;
    border: 3px solid #3B4856;
    border-radius: 6px;
    // 添加滚动条
    overflow:auto;
    p{
      text-align: left;
      display: flex;
      justify-content: flex-start;
      align-items:center;
      font-size: 18px;
      width: 610px;
    }
    .definition{
          // 上下放置，水平居中对齐
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 8px;
          width: 610px;
        .phonetics{
            width:610px !important;
            height: 30px;
            display: flex;
            span{
              float: left;
              text-align: left;
              width: 610px;
              font-size: 18px;

              .redicon{
                display: inline-block;
                width:14px;
                height:14px;
                margin-top:8px;
              }
            }
        }
    }
    .meanings{
      width:610px !important;
      height: auto;
      height: fit-content;
      margin-top: 5px;
      p{
        font-size: 18px;
      }
    }
}

    /*滚动条样式*/
.border::-webkit-scrollbar {
    width: 4px;    
    /*height: 4px;*/
}
.border::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.border::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
</style >

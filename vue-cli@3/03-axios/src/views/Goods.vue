<template>
  <div class="">
    <a href="">Goods Page</a>
  </div>
</template>

<script>
import { article } from '../request/index'
// import axios from 'axios'
// axios.defaults.baseURL = '/api'
export default {
  name: '',
  mounted () {
    let param = {
      id: 186016,
      limit: 1
    }
    // https://www.csdn.net/api/articles?type=more&category=home&shown_offset=1524276761019196&first_view=false
    // http://iwenwiki.com/api/blueberrypai/getBlueBerryJamInfo.php
    // axios
    //   .get('http://music.eleuu.com/comment/music', { params: param })
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    console.log(article, article.articleList(param))
    article
      .articleList(param)
      .then((res) => {
        console.log(res)
      })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="">
    <a href="">Goods Page</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  mounted () {
    let params = {
      cityid: '101120101',
      city: '济南',
      province: '山东',
      ip: '39.71.187.65'
    }

    axios
      .get('https://weather.api.bdymkt.com/day', { params })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
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

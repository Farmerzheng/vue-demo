(<template>
  <div class="hello">
    <h1>{{ province }}</h1>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-row>
      <el-col>
        <el-switch
          v-model="slideFlag"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></el-switch
      ></el-col>
    </el-row>
    <el-row>
      <el-col>
        <span>姓名：{{ person.name }}</span
        ><span>年龄：{{ person.age }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col> <el-button @click="clickHandler">改变数据</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
// 引入vuex
// mapActions 提供更改数据方法
// mapState 提供访问数据的方法
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '你好',
      tableData: []
    }
  },
  computed: {
    // 通过计算属性，当数据发生改变，我们可以保证拿到的是响应过后的数据，也是数组形式，意味着我们可以拿到多组数据，这里数组中的数据也是state.js中定义的变量
    ...mapState(['province', 'studentList', 'slideFlag', 'person'])
  },
  mounted () {
    for (var i = 0; i < this.studentList[0].length; i++) {
      this.tableData.push(this.studentList[0][i])
    }
  },
  methods: {
    // 这里数组中的每一个方法名是actions.js文件中所定义的方法名
    ...mapActions([
      'changeProvince',
      'changeStudentList',
      'changeSlideFlag',
      'changePerson'
    ]),
    clickHandler () {
      // Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：
      // push()
      // pop()
      // shift()
      // unshift()
      // splice()
      // sort()
      // reverse()
      // 更改数据
      this.changeProvince('河北')
      //   this.$set(this.tableData, 0, this.studentList[0][2])

      // slideFlag
      this.changeSlideFlag(true)

      // person
      this.changePerson({
        name: 'wangzheng',
        age: 32
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
)

<template>
  <div id="app">
  <Navv v-if="reFresh"> </Navv>
    <router-view :key="$route.fullPath"/>
  </div>
</template>


<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
    import Nav from "./views/nav/nav";
    export default {
        components: {Nav},
        data(){
            return{
            reFresh:true,
            menuTree:[]
        }
        },
        watch: {
            '$route':'getPath'
        },
        methods: {
            getPath(){

                this.reFresh = false
                this.$nextTick(() => {
                    this.reFresh = true
                })
                console.log(this.$route.path);
            }
        }
    }



</script>
<style>
  #app{
    margin-top: 0px;
  }
</style>
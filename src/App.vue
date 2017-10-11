<style lang="scss">    
    $cor-primaria: #9e55dd;

    h2 {
        color: $cor-primaria;
        border-bottom: 1px solid #ededed;
        margin-left: 12px;
        margin-right: 12px;
        margin-bottom: 25px;
    }
    p {
        text-align: center;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        color: #9e9e9e;
    }
    .app-menu-bar {
      margin-bottom: 50px;
    }
</style>

<template>
  <div>
  <el-row :gutter="0">
    <el-col>
      <div class="grid-content">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo app-menu-bar" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <router-link to="/">Home</router-link>
          </el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-submenu> -->
          <el-menu-item index="3">
            <router-link to="/cadastro">Fazer Cadastro</router-link>
          </el-menu-item>
          <!-- <el-menu-item index="4">
            <router-link to="/login">Login</router-link>
          </el-menu-item> -->
          <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
        </el-menu>
      </div>
    </el-col>
  </el-row>
  
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        
      }
    }  
}
</script>


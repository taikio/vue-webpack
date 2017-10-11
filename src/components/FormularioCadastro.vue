<style lang="scss">    
    $cor-primaria: #9e55dd;

    h1 {
        color: $cor-primaria;
    }
</style>

<template>
    <div class="container">
        <h1 align="center">Formulário de Cadastro</h1>
        <form>
            <el-row :gutter="20">
                <el-col :span="3">
                    <label>Nome Completo</label>
                </el-col>    
                <el-col :span="11">
                    <el-input placeholder="Nome Completo" v-model="user.nome"></el-input>
                </el-col>
                <el-col :span="2">
                    <label>CPF</label>
                </el-col>
                <el-col :span="4">
                    <el-input placeholder="C.P.F." v-model="user.cpf"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="3">
                    <label>Endereço</label>
                </el-col>
                <el-col :span="11">
                    <el-input placeholder="Endereço" v-model="user.endereco"></el-input>
                </el-col>
                <el-col :span="2">
                    <label>Complemento</label>
                </el-col>
                <el-col :span="4">
                    <el-input placeholder="Complemento" v-model="user.complemento"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="3">
                    <label>Login</label>
                </el-col>
                <el-col :span="11">
                    <el-input placeholder="Login" v-model="user.login"></el-input>
                </el-col>
                <el-col :span="2">
                    <label>Senha</label>
                </el-col>
                <el-col :span="4">
                    <el-input type="password" placeholder="Senha" v-model="user.senha"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <div align="center">
                        <el-button type="primary" @click="validateForm()">Confirmar Cadastro</el-button>
                    </div>
                </el-col>
            </el-row>
        </form>
        <el-row>
            <el-col>
                <el-alert title="" type="error" v-show="errorMessage">
                    <h3 align="center">{{errorMessage}}</h3>
                </el-alert>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
export default {
  data() {
      return {
        user: {
            nome: "",
            cpf: "",
            endereco: "",
            complemento: "",
            login: "",
            senha: ""
        },
        errorMessage: ""
    }
  },
  methods:{
      validateForm: function () {
          if (this.user.nome === "" || this.user.nome.indexOf(" ") === -1){
              this.errorMessage = "Informe o nome completo";
              return;
          }
          if (this.user.cpf === "") {
              this.errorMessage = "Preencha o campo CPF";
              return;
          }
          if (this.user.endereco === "") {
              this.errorMessage = "Preencha o campo Endereço";
              return;
          }
          if (this.user.complemento === "") {
              this.errorMessage = "Preencha o campo Complemento";
              return;
          }
          if (this.user.login === "") {
              this.errorMessage = "Informe um Login válido";
              return;
          }
          if (this.user.senha === "") {
              this.errorMessage = "É necessário criar uma senha";
              return;
          }

          this.$router.push("/login");
      }
  }
}
</script>


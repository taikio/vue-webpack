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
</style>

<template>
    <div>
        <el-row :gutter="20">
            <el-col>
                <h2 align="center">Seja bem vindo!!!</h2>
                <p>
                    Este é o seu painel administrativo, aqui é possível gerenciar suas informações e configurações.
                    Sinta-se à vontade para explorar todos os recursos.
                </p>
            </el-col>
        </el-row>
    </div>
</template>
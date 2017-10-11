import App from './App.vue'
import FormularioCadastro from './components/FormularioCadastro.vue'
import Login from './components/Login.vue'

export const routes = [
    {path: '/', component: App,
      children: [
        {path: '/cadastro', component: FormularioCadastro},
        {path: '/login', component: Login}
      ]
    }
];

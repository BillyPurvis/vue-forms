// Create & define component instances

// Register welcome-banner component
Vue.component('welcome-banner', {
template: "#welcome-banner"
})

// Register login-form component
const login_form = Vue.component('login-form', {
template: "#login"
})

// Register sign-up-form component
Vue.component('sign-up-form', {
template: "#signup-form"
})

// Register user-draft-card component
Vue.component('user-draft-card', {
template: "#user-card-draft"
})

// Temp
const Bar = { template: '<div>Bar</div>'}

// Create & define routes 
const routes = [
    { path: '/login', component: login_form },
    { path: '/bar', component: Bar}
]

// Create router instance and pass routes object
const router = new VueRouter({
    routes // short hand for routes: routes
})


// Create root instance of Vue & mount router
const vm = new Vue({
    router
}).$mount('.app')
// Create component instances

// Register welcome-banner component
Vue.component('welcome-banner', {
template: "<h1>Welcome Banner</h1>"
})

// Register login-form component
Vue.component('login-form', {
template: "<h1>Login Form</h1>"
})

// Register sign-up-form component
Vue.component('sign-up-form', {
template: "<h1>Sign Up form</h1>"
})

// Register user-draft-card component
Vue.component('user-draft-card', {
template: "<h1>User Draft Card</h1>"
})

// Create root instance of Vue
const vm = new Vue({
    el: '.app'
})
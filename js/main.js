// Create component instances

// Register welcome-banner component
Vue.component('welcome-banner', {
template: "#welcome-banner"
})

// Register login-form component
Vue.component('login-form', {
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

// Create root instance of Vue
const vm = new Vue({
    el: '.app'
})
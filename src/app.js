import Vue from 'vue'
import gButton from './button.vue'
import gButtonGroup from './button-group.vue'
import gInput from './input.vue'

Vue.component('g-button', gButton)
Vue.component('g-button-group', gButtonGroup)
Vue.component('g-input',gInput)
new Vue({
    el: '#app',
    data() {
        return {
            isLoading: true
        }
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    }
})


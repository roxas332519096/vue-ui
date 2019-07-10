import Vue from 'vue'
import gButton from './button.vue'
import gButtonGroup from './button-group.vue'
import gInput from './input.vue'
import gRow from './row.vue'
import gCol from './col.vue'

Vue.component('g-button', gButton)
Vue.component('g-button-group', gButtonGroup)
Vue.component('g-input',gInput)
Vue.component('g-row',gRow)
Vue.component('g-col',gCol)
new Vue({
    el: '#app',
    data() {
        return {
            isLoading: true,
            message:''
        }
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    }
})


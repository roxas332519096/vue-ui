import Vue from 'vue'
import gButton from './button.vue'
import gIcon from './icon.vue'
import gButtonGroup from './button-group.vue'

Vue.component('g-button', gButton)
Vue.component('g-icon', gIcon)
Vue.component('g-button-group', gButtonGroup)
new Vue({
    el: '#app',
    data() {
        return {
            isLoading: true
        }
    },
})

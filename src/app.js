import Vue from 'vue'
import gButton from './button.vue'
import gButtonGroup from './button-group.vue'
import gInput from './input.vue'
import gRow from './row.vue'
import gCol from './col.vue'
import layout from './layout.vue'
import header from './header.vue'
import content from './content.vue'
import sider from './sider.vue'
import footer from './footer.vue'
import gToast from './toast.vue'
import plugin from './plugin.js'

Vue.component('g-button', gButton)
Vue.component('g-button-group', gButtonGroup)
Vue.component('g-input', gInput)
Vue.component('g-row', gRow)
Vue.component('g-col', gCol)
Vue.component('g-layout', layout)
Vue.component('g-header', header)
Vue.component('g-content', content)
Vue.component('g-sider', sider)
Vue.component('g-footer', footer)
Vue.component('g-toast', gToast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data() {
        return {
            isLoading: true,
            message: ''
        }
    },
    methods: {
        showToast(){
            this.$toast('<p>传入文字传入文字传入文字传入文字传入文字传入文字</p>',{
                closeButton:{
                    text:'关闭',
                    callback(toast){
                    }
                },
                enableHtml:true,
                autoClose:false,
                autoCloseDelay:3,
                position:'bottom'
            })
        }
    },
    mounted(){
        
    }
})


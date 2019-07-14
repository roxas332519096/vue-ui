import Vue from 'vue'
import gButton from './button.vue'
import gIcon from './icon.vue'
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
import gTabs from './tabs.vue'
import gTabsHead from './tabsHead.vue'
import gTabsBody from './tabsBody.vue'
import gTabsItem from './tabsItem.vue'
import gTabsPane from './tabsPane.vue'

Vue.component('g-button', gButton)
Vue.component('g-icon', gIcon)
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
Vue.component('g-tabs', gTabs)
Vue.component('g-tabs-head', gTabsHead)
Vue.component('g-tabs-body', gTabsBody)
Vue.component('g-tabs-item', gTabsItem)
Vue.component('g-tabs-pane', gTabsPane)


new Vue({
    el: '#app',
    data() {
        return {
            selectedTab: 'title1'
        }
    },
    methods: {
        yyy(){
            
        }
    },
    mounted() {

    }
})


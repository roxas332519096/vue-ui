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
import gPopover from './popover.vue'
import gCollapse from './collapse.vue'
import gCollapseItem from './collapse-item.vue'
import gCascader from './cascader.vue'

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
Vue.component('g-popover', gPopover)
Vue.component('g-collapse', gCollapse)
Vue.component('g-collapse-item', gCollapseItem)
Vue.component('g-cascader', gCascader)


new Vue({
    el: '#app',
    data() {
        return {
            // selectedTab: ['1', '2'],
            cities: [{
                name: '广东',
                id: 1,
                children: [{
                    name: '东莞',
                    id: 2,
                    children: [{
                        name: '莞城',
                        id: 7
                    }, {
                        name: '南城',
                        id: 9
                    },
                    {
                        name: '东城',
                        id: 10
                    }]
                }, {
                    name: '广州',
                    id: 3
                },
                {
                    name: '深圳',
                    id: 4
                }]
            }]
        }
    },
    methods: {
    },
    mounted() {

    }
})


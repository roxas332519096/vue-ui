import Vue from 'vue'
import plugin from './plugin.js'
import gButton from './component/button/button.vue'
import gButtonGroup from './component/button/button-group.vue'
import gIcon from './component/icon/icon.vue'
import gInput from './component/input/input.vue'
import gRow from './component/layout/row.vue'
import gCol from './component/layout/col.vue'
import layout from './component/layout/layout.vue'
import header from './component/layout/header.vue'
import content from './component/layout/content.vue'
import sider from './component/layout/sider.vue'
import footer from './component/layout/footer.vue'
import gToast from './component/toast/toast.vue'
import gTabs from './component/tabs/tabs.vue'
import gTabsHead from './component/tabs//tabsHead.vue'
import gTabsBody from './component/tabs/tabsBody.vue'
import gTabsItem from './component/tabs/tabsItem.vue'
import gTabsPane from './component/tabs/tabsPane.vue'
import gPopover from './component/popover/popover.vue'
import gCollapse from './component/collapse/collapse.vue'
import gCollapseItem from './component/collapse/collapse-item.vue'
import gCascader from './component/cascader/cascader.vue'

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


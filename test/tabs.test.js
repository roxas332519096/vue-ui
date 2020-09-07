import Vue from 'vue'
import gTabs from '../src/component/tabs/tabs.vue'
import gTabsHead from '../src/component/tabs/tabsHead.vue'
import gTabsBody from '../src/component/tabs/tabsBody.vue'
import gTabsItem from '../src/component/tabs/tabsItem.vue'
import gTabsPane from '../src/component/tabs/tabsPane.vue'
Vue.component('g-tabs', gTabs)
Vue.component('g-tabs-head', gTabsHead)
Vue.component('g-tabs-body', gTabsBody)
Vue.component('g-tabs-item', gTabsItem)
Vue.component('g-tabs-pane', gTabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('gTabs', () => {
    it('gTabs 存在', () => {
        expect(gTabs).to.exist
    })
    it('接收selected prop', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs selected="title1">
            <g-tabs-head>
                <g-tabs-item name="title1">标题1</g-tabs-item>
                <g-tabs-item name="title1">标题2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="title1">内容1</g-tabs-pane>
                <g-tabs-pane name="title1">内容2</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        ` 
        let vm = new Vue({
            el:div
        })
        vm.$nextTick(()=>{
            let title1 = vm.$el.querySelector(`.tabsItem[data-name=title1]`)
            expect(title1.classList.contains('active')).to.eq(true)
            done()
        })
    })
    it('接收 direction props',()=>{})
})


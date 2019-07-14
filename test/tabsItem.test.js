import Vue from 'vue'
import gTabs from '../src/tabs.vue'
import gTabsHead from '../src/tabsHead.vue'
import gTabsBody from '../src/tabsBody.vue'
import gTabsItem from '../src/tabsItem.vue'
import gTabsPane from '../src/tabsPane.vue'
Vue.component('g-tabs', gTabs)
Vue.component('g-tabs-head', gTabsHead)
Vue.component('g-tabs-body', gTabsBody)
Vue.component('g-tabs-item', gTabsItem)
Vue.component('g-tabs-pane', gTabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('gTabsItem', () => {
    it('gTabsItem 存在', () => {
        expect(gTabsItem).to.exist
    })
    it('接收name prop', () => {
        const Constructor = Vue.extend(gTabsItem);
        const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收disabled prop', () => {
        const Constructor = Vue.extend(gTabsItem);
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.eq(true)
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click();
        expect(callback).to.have.not.been.called
    })
})


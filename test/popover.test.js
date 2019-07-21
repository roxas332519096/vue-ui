const expect = chai.expect;
import Vue from 'vue'
import gPopover from '../src/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在', () => {
        expect(gPopover).to.be.ok
    })
    it('可以设置position', (done) => {
        Vue.component('g-popover', gPopover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = ` 
        <g-popover position="left" ref="a">
            <template slot="content">
                <div>
                    content
                </div>
            </template>
            <button>click</button>
         </g-popover>`
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                const { contentWrapper } = vm.$refs.a.$refs
                expect(contentWrapper.classList.contains('position-left')).to.be.true
                // vm.$el.remove()
                // vm.$destroy()
                done()
            })
        })
    })
    // it('点击button触发click事件',()=>{
    //     const Constructor = Vue.extend(gButton);
    //     const vm = new Constructor({
    //         propsData: {
    //             icon: 'setting',
    //         }
    //     }).$mount();
    //     const callback = sinon.fake();
    //     vm.$on('click', callback)
    //     vm.$el.click();
    //     expect(callback).to.have.been.called
    // })
})


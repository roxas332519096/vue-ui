const expect = chai.expect;
import  Vue from 'vue'
import gButton from '../src/button.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button',()=>{
    // BDD 行为驱动测试

    it('存在',()=>{
        expect(gButton).to.be.ok
    })
    it('可以设置icon',()=>{
        const Constructor = Vue.extend(gButton);
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
        vm.$el.remove()
        vm.$destroy()
    })
    it('可以设置loading',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(gButton);
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true
            }
        }).$mount(div)
        let useElement = vm.$el.querySelector('use');
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    })
    it('icon默认的order是1',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(gButton);
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg');
        let { order } = window.getComputedStyle(svg);
        expect(order).to.eq('1');
        vm.$el.remove()
        vm.$destroy()
    })
    it('icon-right可以改变icon方向',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(gButton);
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true,
                iconRight: true
            }
        }).$mount(div)
        let svg = vm.$el.querySelector('svg');
        let { order } = window.getComputedStyle(svg);
        expect(order).to.eq('2');
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击button触发click事件',()=>{
        const Constructor = Vue.extend(gButton);
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
            }
        }).$mount();
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click();
        expect(callback).to.have.been.called
    })
})


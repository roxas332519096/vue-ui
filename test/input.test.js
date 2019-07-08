const expect = chai.expect;
import  Vue from 'vue'
import gInput from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input',()=>{
    it('存在',()=>{
        expect(gInput).to.be.ok
    })
    it('接收 value',()=>{
        const Constructor = Vue.extend(input)
        const vm = new Constructor({
            propsData:{
                value:'1234'
            }
        }).$mount
        const inputElment = vm.$el.querySelector('input')
        expect(inputElment.value).to.equal('1234')
        vm.$destroy( )
    })
})


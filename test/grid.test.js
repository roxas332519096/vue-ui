import Vue from 'vue'
import gRow from '../src/component/layout/row.vue'
import gCol from '../src/component/layout/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('gRow', () => {
    it('gRow存在', () => {
        expect(gRow).to.be.ok
    })
    it('gCol存在', () => {
        expect(gCol).to.be.ok
    })
    it('接收 gutter 属性.',(done)=>{
        Vue.component('g-row',gRow)
        Vue.component('g-col',gCol)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)
    })
    it('接收align 属性',()=>{
        const div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(gRow);
        const vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(div)
        const element = vm.$el;
        expect(getComputedStyle(element).justifyContent).to.eq('center')
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收span 属性',()=>{
        const div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(gCol);
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收offset 属性',()=>{
        const div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(gCol);
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收xs-span属性',()=>{
        const div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(gCol);
        const vm = new Constructor({
            propsData: {
                xs: {
                    span:1
                }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-xs-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收xs-offset属性',()=>{
        const div = document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(gCol);
        const vm = new Constructor({
            propsData: {
                xs: {
                    offset:1
                }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-xs-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
})


import Vue from 'vue'
import gRow from '../src/row.vue'
import gCol from '../src/col.vue'

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
        },0)
    })
})


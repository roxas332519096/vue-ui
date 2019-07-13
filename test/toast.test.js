import Vue from 'vue'
import gToast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('gToast', () => {
    it('gToast存在', () => {
        expect(gToast).to.exist
    })
    describe('props', function () {
        it('接收autoClose', (done) => {
            let div = document.createElement('div');
            const Constructor = Vue.extend(gToast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接收 closeButton',()=>{
            const callback = sinon.fake();
            const Constructor = Vue.extend(gToast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text:'关闭',
                        callback
                    },
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接收 enableHtml',()=>{
            const Constructor = Vue.extend(gToast)
            const vm = new Constructor({
                propsData: {
                    enableHtml:true
                }
            })
            vm.$slots.default = [`<strong id="strong">hi</strong>`];
            vm.$mount()
            let strong = vm.$el.querySelector('#strong')
            expect(strong).to.exist
        })
        it('接收 position',()=>{
            const Constructor = Vue.extend(gToast)
            const vm = new Constructor({
                propsData: {
                    position:'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
})


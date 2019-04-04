import Vue from 'vue'
import gButton from './button.vue'
import gIcon from './icon.vue'
import gButtonGroup from './button-group.vue'

Vue.component('g-button', gButton)
Vue.component('g-icon', gIcon)
Vue.component('g-button-group', gButtonGroup)

new Vue({
    el: '#app',
    data() {
        return {
            isLoading: true
        }
    },
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const { expect } = chai
{
    const Constructor = Vue.extend(gButton);
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
}

{
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
    let useElement = vm.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
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
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(gButton);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true,
            iconRight: true
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(gButton);
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
        }
    })
    vm.$mount();
    let spy = chai.spy(function () { })
    vm.$on('click', spy)
    let button = vm.$el
    button.click();
    expect(spy).to.have.been.called()
}

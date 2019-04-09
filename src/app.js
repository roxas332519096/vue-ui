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
    //测试含有icon
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
    //测试loading
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
    //测试icon默认方向
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
    //测试icon-right
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
    //测试button组件点击事件
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


import Toast from './toast.vue'

let currentToats

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToats) {
                currentToats.close()
            }
            currentToats = createToast({ Vue, message, propsData: toastOptions, onClose(){
                currentToats = null
            } })
        }
    }
}

function createToast({ Vue, message, propsData, onClose }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}
import {HANDLER_CLASS} from 'legato-dnd'
import { h } from 'vue'

export default {
    name: 'Handler',
    render () {
        const defaultSlot = this.$slots.default
        return h('span', {
            class: [HANDLER_CLASS]
        }, defaultSlot ? defaultSlot() : undefined)
    }
}

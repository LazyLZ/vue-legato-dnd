import {HANDLER_CLASS, DRAGGABLE_CLASS} from 'legato-dnd'
import { h } from 'vue'

export default {
    name: 'Draggable',
    props: {
        handler: {type: Boolean, default: true},
    },
    render () {
        const cls = [DRAGGABLE_CLASS]
        if (this.handler) {
            cls.push(HANDLER_CLASS)
        }
        const defaultSlot = this.$slots.default
        return h('div', {
            class: cls,
        }, defaultSlot ? defaultSlot() : undefined)
    }
}

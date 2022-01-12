<script>
import {HANDLER_CLASS, DRAGGABLE_CLASS} from 'legato-dnd'
import { h } from 'vue'

export default {
    name: 'Draggable',
    render () {
        return h('div', {
            class: [DRAGGABLE_CLASS, HANDLER_CLASS]
        }, this.$slots.default())
    }
}
</script>

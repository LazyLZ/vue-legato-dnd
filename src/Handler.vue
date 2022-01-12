<script>
import {HANDLER_CLASS} from 'legato-dnd'
import { h } from 'vue'

export default {
    name: 'Handler',
    render () {
        return h('div', {
            class: [HANDLER_CLASS]
        }, this.$slots.default())
    }
}
</script>

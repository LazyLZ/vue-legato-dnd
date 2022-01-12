<template>
    <div ref="context">
        <slot></slot>
    </div>
</template>

<script>
import { DropContext } from '../../../legato-dnd/src/DropContext.js'
import { dropContext } from '../../legato-dnd/src/const'

export default {
    name: 'DropContext',
    data: () => ({
        context: new DropContext({})
    }),
    provide () {
        return {
            [dropContext]: this.context
        }
    },
    mounted () {
        console.log('DropContext mounted')
        // console.log(this.$refs.default)
    }
}
</script>

<style scoped>

</style>

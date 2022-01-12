<template>
    <div style="max-width: 1200px; margin: auto">
        <div style="height: 300px"></div>
        <div style="width: 400px">
            <DropContext>
                <Container vertical v-model:items="items" v-model:startIndex="startIndex">
                    <Draggable v-for="(item, i) in items">
                        <div :style="itemStyle(i)" class="d-flex">
                            {{ item.name }}
                            <input
                                @touchstart.stop
                                @mousedown.stop
                            />
                            <!--<div style="height: 120px; background-color: red"></div>-->
                        </div>
                    </Draggable>
                </Container>
            </DropContext>
        </div>
        <div style="height: 300px"></div>
    </div>
</template>

<script>
import DropContext from '../../src/DropContext.vue'
import Container from '../../src/Container.vue'
import Draggable from '../../src/Draggable.vue'

export default {
    name: 'DropPlayground',
    components: { Container, DropContext, Draggable },
    data: () => ({
        startIndex: NaN,
        items: [
            { name: 'Alice'.repeat(5) },
            { name: 'Bob' },
            { name: 'Candy' },
            { name: 'Dandy' },
            { name: 'Elsa' },
            { name: 'Frank' },
            { name: 'Groovy' },
            { name: 'HHHH' },
            { name: 'IIIII' },
            { name: 'JJJJJ' },
            { name: 'KKKKK' },
            { name: 'LLLLL' },
            { name: 'MMMMM' }
        ],
        order: []
    }),
    computed: {
        itemStyle () {
            return i => ({
                height: '96px',
                background: i === this.startIndex ? 'rgb(248,225,166)' : 'rgb(166,183,248)',
                // transform: 'rotate(30deg)',
                // marginBottom: '8px'
                // border: 'rgb(0,0,200) 5px solid'
                // width: '150px'
            })
        }
    }
}
</script>

<style scoped>

</style>

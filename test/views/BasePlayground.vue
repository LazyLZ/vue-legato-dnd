<template>
    <div>
        <div style="max-width: 1000px; margin: auto" class="pa-4">
            <!--<v-btn @click="vibrate()">vibrate</v-btn>-->
            <div style="margin-top: 1000px"></div>
            <div style="height: 300px;overflow: auto">
                <div style="height: 600px"></div>
            </div>
            <div style="overflow: auto; height: 900px; position: relative">
                <div style="height: 300px"></div>
                <div style="overflow: auto; height: 500px">
                    <DragContainer :groups="groups" @dragStart="onDragStart" @drop="onDrop" vertical
                                   @orderChange="onOrderChange">
                        <Draggable v-for="(item, i) in items" :key="item.name">
                            <div :style="itemStyle(i)" class="d-flex">
                                {{ item.name }}
                                <input
                                    @touchstart.stop
                                    @mousedown.stop
                                />
                            </div>
                        </Draggable>
                    </DragContainer>
                </div>
                <div style="height: 300px"></div>
            </div>
            <div style="height: 300px;overflow: auto">
                <div style="height: 600px"></div>
            </div>
            <div style="height: 500px"></div>
        </div>
    </div>
</template>

<script lang="ts">
import {DragContainer, Draggable} from '../../index'
// import DropContext from '../components/DropContext.vue'

export default {
    name: 'Playground',
    components: {
        Draggable,
        // DropContext,
        DragContainer,
    },
    data: () => ({
        startIndex: [NaN, NaN],
        items: [
            {name: 'Alice'.repeat(5)},
            {name: 'Bob'},
            {name: 'Candy'},
            {name: 'Dandy'},
            {name: 'Elsa'},
            {name: 'Frank'},
            {name: 'Groovy'},
            {name: 'HHHH'},
            {name: 'IIIII'},
            {name: 'JJJJJ'},
            {name: 'KKKKK'},
            {name: 'LLLLL'},
            {name: 'MMMMM'},
        ],
        order: [],
    }),
    computed: {
        itemStyle() {
            const [gs, ge] = this.startIndex
            return i => ({
                height: '96px',
                background: i >= gs && i <= ge ? 'rgb(248,225,166)' : 'rgb(166,183,248)',
                border: 'red 1px solid',
                transition: 'all 200ms ease',
                // width: '150px'
            })
        },
        groups() {
            const i = this.items.findIndex(t => t.name === 'Bob')
            return [
                [i, i + 2],
            ]
        },
    },
    methods: {
        onOrderChange({order}) {
            this.items = order.map(i => this.items[i])
        },
        onDragStart({startGroup}) {
            console.log('dragStart', startGroup)
            this.startIndex = startGroup
        },
        onDrop() {
            this.startIndex = [NaN, NaN]
        },
        onMove(...args) {
            // console.log(...args)
        },
        log(...args) {
            console.log(...args)
        },
    },
}
</script>

<style>
.l-drag-active {
    background: blue !important;
}

.l-drop-active {
    background: red !important;
}

.l-inactive {
    background: yellow !important;
}
</style>

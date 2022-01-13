import {h} from 'vue'
import {DragDrop, MoveGroup} from 'legato-dnd'
// import {DragDrop, MoveGroup} from '../dist/index.esm'
const events = [
    'enterViewportEdge',
    'leaveViewportEdge',
    'enterContainerEdge',
    'leaveContainerEdge',
    'programmingScrollStart',
    'programmingScrollEnd',
    'programmingScroll',
    'programmingScrollError',
    'beforeDragStart',
    'dragStart',
    'dragOver',
    'dragCross',
    'beforeDrop',
    'drop',
    'dragEnd',
    'orderChange',
]
export default {
    name: 'DragContainer',
    // inject: {
    //     dropContext: {
    //         from: dropContext,
    //         default: null
    //     }
    // },
    props: {
        vertical: {type: Boolean},
        transitionDuration: {type: Number},
        placeholder: {type: [Function, HTMLElement]},
        scrollSpeed: {type: [Function]},
        scrollThreshold: {type: Number},
        lockCrossAxis: {type: Boolean},
        lockArea: {type: Boolean},
        startDelay: {type: Number},
        touchStartDelay: {type: Number},
        startOffsetTolerate: {type: Number},
        name: {type: String},
        inactiveClass: {type: String},
        startActiveClass: {type: String},
        dragActiveClass: {type: String},
        dropActiveClass: {type: String},
        groups: {type: Array},
    },
    data: () => ({
        dragdrop: null,
    }),
    mounted() {
        // console.log('Draggable mounted', this.$props)
        this.dragdrop = new DragDrop({
            container: this.$refs.container,
            ...this.$props,
        })
        events.forEach(name => {
            this.dragdrop.on(name, (...args: any[]) => {
                this.$emit(name, ...args)
            })
        })
        this.$watch('groups', (groups?: MoveGroup[]) => {
            if(groups) {
                this.dragdrop.setGroups(groups)
            }
        })
    },
    render() {
        const defaultSlot = this.$slots.default
        return h('div', {
            ref: 'container',
        }, defaultSlot ? defaultSlot() : undefined)
    },
}

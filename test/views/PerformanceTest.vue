<template>
    <div ref="root">
        <div v-for="i in 100">{{i}}</div>
    </div>
    <div>{{second}}</div>
</template>

<script>
export default {
    name: 'PerformanceTest',
    data: () => ({
        second: 0
    }),
    mounted () {
        const el = this.$refs.root
        let t = Date.now()
        console.time('dom')
        const N = 100000
        const d = document.createElement('div')
        d.style.height = '100px'
        d.style.width = '300px'
        d.backgroundColor = 'red'
        el.append(d)
        let x = d.getBoundingClientRect()
        // for (let i = 0; i<100;++i) {
        //     x.push(i)
        // }
        // x = new Set(x)
        for (let i = 0; i < N; ++i) {
            // x = /[wv](\w+)$/
            // x = {
            //     width: d.scrollWidth,
            //     height: d.scrollHeight,
            // }
            // x = {
            //     top: d.scrollTop,
            //     full: d.scrollHeight,
            //     client: d.clientHeight
            // }
            // x = d.getBoundingClientRect()
            x = {
                top: x.top,
                left: x.left,
                right: x.right,
                bottom: x.bottom,
                width: x.width,
                height: x.height
            }
            // x = {
            //     width: d.width,
            //     height: d.height,
            //     top: d.top,
            //     left: d.left
            // }
            // let s = window.getComputedStyle(d)
            // x = s.overflowX
            // let a = [...x]
        }
        console.timeEnd('dom')
        this.second = Date.now() - t
    }
}
</script>

<style scoped>

</style>

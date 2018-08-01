import Vue from 'vue'
import VVBanner from './VVBanner.vue'

const Components = {
    VVBanner
}

Object.keys(Components).forEach( name => {
    Vue.component(name, Components[name])
})

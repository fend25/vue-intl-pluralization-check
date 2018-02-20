import Vue from 'vue'
import App from './App.vue'

import VueIntl from 'vue-intl';

Vue.use(VueIntl)

Vue.setLocale('ru')

Vue.registerMessages('ru', {
	things: `how much: {n, plural,
		zero {no any}
    one {one}
    two {two}
    few {{n} few}
    many {{n} many}
    other {{n} other}
	}`
})
Vue.registerFormats('ru', {
    number: {
        rub: { style: 'currency', currency: 'RUB' }
    }
})

new Vue({
	el: '#app',
	render: h => h(App)
})

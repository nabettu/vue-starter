<template lang="pug">
.top
	h1 {{ msg }}
	router-link(to="/about") about page

	.sample
		p hello "{{ sampleMessage }}"
		button(@click="changeSampleName") change sample
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    name: 'top',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
        ...mapGetters(['sampleMessage'])
    },
    methods: {
        ...mapActions(['changeSampleName'])
    }
}
</script>

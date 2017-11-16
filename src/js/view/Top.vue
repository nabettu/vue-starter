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
import changeTitle from './mixins/changeTitle';

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
    },
    mixins: [
        changeTitle
    ],
}
</script>

<style lang="scss" scoped>
@import '../../scss/common';
button {
    border: $color solid 1px;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    @include hover;
}
</style>

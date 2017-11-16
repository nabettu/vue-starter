<template lang="pug">
.about
	h1 {{ msg }}
	router-link(to="/") top page
</template>

<script>
import changeTitle from './mixins/changeTitle';
export default {
    name: 'about',
    title: 'about',
    data() {
        return {
            msg: 'This is about page.'
        }
    },
    mixins: [
        changeTitle
    ],
}
</script>

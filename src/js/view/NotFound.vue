<template lang="pug">
.notFound
	h1 {{ msg }}
	router-link(to="/") top page
</template>

<script>
import changeTitle from './mixins/changeTitle';
export default {
    name: 'notFound',
    title: 'notFound',
    data() {
        return {
            msg: 'oh. page not found.'
        }
    },
    mixins: [
        changeTitle
    ],
}
</script>

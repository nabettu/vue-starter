<template lang="pug">
.about
	h1 {{ msg }}
	router-link(to="/") top page
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            msg: 'This is about page.'
        }
    },
}
</script>

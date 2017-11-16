<template lang="pug">
.notFound
	h1 {{ msg }}
	router-link(to="/") top page
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            msg: 'oh. page not found.'
        }
    },
}
</script>

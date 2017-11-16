<template lang="pug">
.root
	img(src="../assets/logo.png")
	router-view
</template>

<script>
export default {
    name: 'root'
}
</script>

<style lang="scss">
.root {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

a {
    color: #42b983;
}
</style>

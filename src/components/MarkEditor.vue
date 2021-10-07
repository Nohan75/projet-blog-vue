<template>
	<div>
		<textarea v-model="text" cols="30" rows="10"></textarea>
	</div>
</template>

<script>
export default {
	computed: {
		text: {
			get() {
				return this.$store.state.markText
			},
			set(value) {
				this.$store.commit('setMarkText', value)
			}
		}
	}
}
</script>

<style>
</style>
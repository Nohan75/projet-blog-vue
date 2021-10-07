<template>
	<div v-html="markHtml"></div>
</template>

<script>
import Marked from 'marked'
const marked = Marked.default;
export default {
	computed: {
		markHtml() {
			return marked(this.$store.state.markText)
		}
	}
}
</script>
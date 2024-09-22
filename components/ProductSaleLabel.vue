<script setup>

	// Get props from parent
	const { discountPercentage } = defineProps(['discountPercentage'])
	
</script>

<template>
	<div v-if="discountPercentage > 0" class="inline-flex rounded-md bg-green-500 text-white uppercase text-xs font-normal px-3 py-2 absolute left-4 top-4">Sale</div>
</template>
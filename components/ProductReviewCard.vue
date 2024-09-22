<script setup>

	// Get props from parent
	const { review } = defineProps(['review'])

</script>

<template>
	<div>
		<div v-if="review.rating" class="flex mb-3">
			<font-awesome v-for="index in review.rating" :icon="['fas', 'star']" class="text-yellow-400" />
		</div>
		<h5 v-if="review.comment" class="mb-3">{{ review.comment }}</h5>
		<p v-if="review.reviewerName" class="mb-0 text-sm text-gray-500">~ {{ review.reviewerName }}</p>
	</div>
</template>
<script setup>

	// Get props from parent
	const { price, discountPercentage } = defineProps(['price', 'discountPercentage'])

	// Convert float to euro currency format
	const currencyFormat = ( price ) => `€ ${price.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`

	// Check if is in sale
	const inSale = discountPercentage > 0 ? true : false;

</script>

<template>
	<span v-if="inSale === true" class="text-green-500 text-xl font-bold">{{ currencyFormat( price - price * ( discountPercentage / 100 ) ) }} <sup class="text-gray-500 font-normal line-through">{{ currencyFormat( price ) }}</sup></span>
	<span v-else class="text-green-500 text-xl font-bold">{{ currencyFormat( price ) }}</span>
</template>
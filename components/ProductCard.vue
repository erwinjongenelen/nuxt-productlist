<script setup>

	// Get props from parent
	const { product } = defineProps(['product'])

</script>

<template>
	<NuxtLink :to="`products/${product.slug}`" class="group no-underline relative flex flex-col h-full rounded-lg bg-white border-slate-200 border p-4 text-slate-900 transition-all hover:border-green-500">
		<div>
			<ProductSaleLabel :discountPercentage="product.discountPercentage" />
			<div class="aspect-[1/1] relative overflow-hidden">
				<NuxtImg :src="product.thumbnail" :alt="product.title" class="absolute w-full h-full top-0 left-0 object-cover object-center transition-transform group-hover:scale-105" loading="lazy" />
			</div>
			<div class="my-4">
				<h3 class="mb-2 text-base font-normal">{{ product.title }}</h3>
				<ProductPrice :price="product.price" :discountPercentage="product.discountPercentage" />
			</div>
		</div>
		<span class="btn btn-primary block w-full mt-auto py-2">View product</span>
	</NuxtLink>
</template>
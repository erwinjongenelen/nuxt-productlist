<script setup>

	// Get the slug from the URL parameter.
	const { slug } = useRoute().params

	// Fetch requested product data
	const { data: product, error } = await useFetch(`/api/products?slug=${slug}`, { key: slug });

	// Handle 404 error
	if( ! product.value ) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Product not found.',
			fatal: true // Force error page on browser error
		})
	}
</script>

<template>
	<div class="py-10 md:py-20">
		<!-- SEO information -->
		<Head>
			<Title>TechStore | {{ product.title }}</Title>
			<Meta name="description" :content="product.description" />
		</Head>

		<div class="container px-5">
			<NuxtLink to="/" class="group text-sm text-gray-500 hover:text-green-500 inline-flex items-center no-underline mb-5 md:mb-10 gap-3">
				<font-awesome :icon="['fas', 'angle-left']" class="group-hover:translate-x-[-3px] transition-transform" /> Back to products
			</NuxtLink>

			<h1>{{ product.title }}</h1>

			<div class="grid grid-cols-12 gap-5">
				<div class="col-start-1 col-end-13 md:col-end-7 lg:col-end-5">
					<div class="grid grid-cols-3 gap-3">
						<div class="col-start-1 col-end-4">
							<a href="#" class="group aspect-[1/1] block relative overflow-hidden rounded-lg border border-slate-200">
								<ProductSaleLabel :discountPercentage="product.discountPercentage" />
								<NuxtImg :src="product.thumbnail" :alt="product.title" class="absolute w-full h-full top-0 left-0 object-cover object-center transition-transform group-hover:scale-105" loading="lazy" />
							</a>
						</div>
					</div>
				</div>
				<div class="col-start-1 md:col-start-7 col-end-13">
					<div v-if="product.category" class="px-4 py-2 rounded-md text-green-500 border border-green-500 inline-flex text-xs mb-5">{{ product.category }}</div>
					<p v-if="product.description" class="text-xl leading-relaxed mb-8">{{ product.description }}</p>

					<div class="mb-8">
						<ProductPrice :price="product.price" :discountPercentage="product.discountPercentage" />
					</div>

					<div class="mb-10 p-5 bg-slate-200 border border-slate-300 rounded-lg">This product is currently not available for purchase.</div>

					<p v-if="product.sku" class="text-xs font-bold">SKU: {{ product.sku }}</p>
					<div v-if="product.tags.length" class="flex gap-2">
						<div v-for="tag in product.tags" class="px-3 py-1 text-xs bg-slate-200 rounded-full">{{ tag }}</div>
					</div>
				</div>
			</div>
			
			<div v-if="product.reviews.length" class="mt-10 md:mt-16">
				<h3>Reviews</h3>
				<div class="grid grid-cols-12 gap-3 xs:gap-5">
					<div v-for="review in product.reviews" class="col-span-12 xs:col-span-6 lg:col-span-3 rounded-md border p-5">
						<ProductReviewCard :review="review" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

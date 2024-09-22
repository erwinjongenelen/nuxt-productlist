<script setup>

// SEO information
useHead({
	title: 'TechStore | Shop',
	meta: [
		{
			name: 'description',
			content: 'Shop - Fancy tech and gadgets!'
		},
	],
})

// Fetch products from the API
const { data } = await useFetch('/api/products')

// Defining variables for search and sorting
const searchQuery = ref('')
const sortField = ref('title-asc') // Default sort by title ASC

// Filter products based on the search field
const filteredProducts = computed( () => data.value?.products.filter( product => product.title.toLowerCase().includes( searchQuery.value.toLowerCase() ) ) )

// Filter products based on the sort field
const sortedProducts = computed(() => {

	// Extract sorting option and order
	const [option, order] = sortField.value.split('-')

	// Sort the products based on field and order
	return filteredProducts.value.slice().sort( (a, b) => {
		if (option === 'price') { // Filter by price
			return order === 'asc' ? a.price - b.price : b.price - a.price
		} else if (option === 'title') { // Filter by title
			return order === 'asc' ? a.title.localeCompare( b.title ) : b.title.localeCompare( a.title )
		}
		return 0
	})
})
</script>

<template>
	<div class="py-10 md:py-20">
		<div class="container px-5">
			<h1>Our products</h1>

			<div class="grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-5 mb-8 items-center">
				<div class="relative">
					<font-awesome :icon="['fas', 'magnifying-glass']" class="text-xl text-slate-400 transition-all absolute left-6 top-[50%] translate-y-[-50%]" />
					<input v-model="searchQuery" type="text" placeholder="Search products..." class="border border-slate-200 rounded-lg pl-16 pr-6 py-4 w-full transition-all outline-none focus:border-green-500" />
				</div>
				<div class="flex justify-between sm:justify-start items-center">
					<label for="sort" class="mr-2">Sort by</label>
					<select v-model="sortField" name="sort" class="border border-slate-200 rounded-lg px-3 py-4 transition-all outline-none focus:border-green-500">
						<option value="title-asc">Title (A-Z)</option>
						<option value="title-desc">Title (Z-A)</option>
						<option value="price-asc">Price (Low-High)</option>
						<option value="price-desc">Price (High-Low)</option>
					</select>
				</div>
			</div>
	
			<div v-if="sortedProducts.length" class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
				<div v-for="p in sortedProducts" :key="p.id">
					<ProductCard :product="p" />
				</div>
			</div>
			<div v-else>
				<div class="text-xl text-gray-500">No products found...</div>
			</div>
		</div>
	</div>
</template>

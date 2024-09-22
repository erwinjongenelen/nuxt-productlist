<template>
	<div>
		<header class="bg-slate-900 text-white">
			<div class="container px-5">
				<div class="flex justify-between items-center">
					<NuxtLink to="/" class="no-underline font-bold text-xl">TechStore</NuxtLink>
					<nav>
						<ul class="flex gap-8">
							<li><NuxtLink to="/" class="menu-link">Our products</NuxtLink></li>
							<li><NuxtLink to="/cart" class="menu-link"><font-awesome :icon="['fas', 'cart-shopping']" /></NuxtLink></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
		<main>
			<slot />
		</main>
		<footer class="py-10 bg-slate-900 text-white">
			<div class="container text-center">
				<NuxtLink to="/" class="no-underline font-bold text-xl">TechStore</NuxtLink>
			</div>
		</footer>
	</div>
</template>
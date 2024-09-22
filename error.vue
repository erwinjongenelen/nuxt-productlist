<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({redirect: '/'})
</script>

<template>
    <div>
        <p>{{ error.statusCode }}</p>
        <p>{{ error.message }}</p>

        <button @click="handleClearError">Back to home</button>
    </div>
</template>
<script setup lang="ts">
import Toast from 'primevue/toast';
import ConfirmDeleteModal from './components/modal/ConfirmDelete.modal.vue';
import EditProductModal from './components/modal/EditProduct.modal.vue';
import CreateProductModal from './components/modal/CreateProduct.modal.vue';
</script>

<template>
	<div class="w-dvw h-dvh flex items-center justify-center">
		<Toast/>
		<router-view class="max-w-[1400px]"/>
	</div>
	<ConfirmDeleteModal/>
	<EditProductModal/>
	<CreateProductModal/>
</template>

<style scoped>
</style>
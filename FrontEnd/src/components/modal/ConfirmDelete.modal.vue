<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { Button } from 'primevue';
import { useProductStore } from '../../stores/product.store';

const productStore = useProductStore();
</script>

<template>
	<Dialog
		:visible="productStore.isConfirmDeleteOpen"
		header="Confirm Delete Product"
		modal
		auto-z-index
		:closable="false"
		:draggable="false"
	>
		<div class="flex flex-col items-center">
			<p>Are you sure you want to delete this product?</p>
			<section class="w-full flex flex-row justify-end items-center gap-2 mt-2">
				<Button
					severity="danger"
					label="Delete"
					size="small"
					@click="productStore.deleteProduct()"
				/>
				<Button
					severity="secondary"
					label="Cancel"
					size="small"
					@click="productStore.isConfirmDeleteOpen = false"
				/>
			</section>
		</div>
	</Dialog>
</template>
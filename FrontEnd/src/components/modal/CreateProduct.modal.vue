<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel';
import { Button } from 'primevue';
import { useProductStore } from '../../stores/product.store';

const productStore = useProductStore();
</script>

<template>
	<Dialog
		:visible="productStore.isCreateProductOpen"
		:closable="false"
		:draggable="false"
		modal
		auto-z-index
		header="Create Product"
	>
		<span class="text-surface-500 dark:text-surface-400 block mb-2">Create new Product.</span>
		<!-- Content -->
		<section class="flex flex-col w-full items-center gap-4 ">
			<!-- Name  -->
			<FloatLabel variant="on">
				<label for="name">Name</label>
				<InputText
					id="name"
					class="w-full"
					inputmode="text"
					:default-value="productStore.newProduct.name"
					@update:model-value="productStore.newProduct.name = String($event)"
				/>			
			</FloatLabel>
			<!-- Description -->
			<FloatLabel variant="on">
				<label for="description">Description</label>
				<InputText
					id="description"
					class="w-full"
					inputmode="text"
					:default-value="productStore.newProduct.description"
					@update:model-value="productStore.newProduct.description = String($event)"
				/>			
			</FloatLabel>
			<!-- Price -->
			<FloatLabel variant="on">
				<label for="price">Price</label>
				<InputText
					id="price"
					class="w-full"
					inputmode="decimal"
					:default-value="String(productStore.newProduct.price) || '0'"
					@update:model-value="productStore.newProduct.price = Number($event)"
				/>			
			</FloatLabel>
		</section>
			<!-- Actions -->
			<section class="w-full flex flex-row justify-end items-center gap-2 mt-2">
				<Button
					severity="success"
					label="Confirm"
					size="small"
					@click="productStore.createProduct()"
				/>
				<Button
					severity="secondary"
					label="Cancel"
					size="small"
					@click="() => {
						productStore.newProduct = {
							id: '0',
							name: '',
							description: '',
							price: 0
						}
						productStore.isCreateProductOpen = false
					}"
				/>
			</section>
	</Dialog>
</template>
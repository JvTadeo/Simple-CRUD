<script setup lang="ts">
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import { Button } from 'primevue';
import { useProductStore } from '../../stores/product.store';

const productStore = useProductStore();
</script>

<template>
	<Dialog
		:visible="productStore.isEditProductOpen"
		:header="`Edit Product ${productStore.selectedProduct.name}`"
		modal
		auto-z-index
		:closable="false"
		:draggable="false"
	>
		<div class="flex flex-col w-full items-center">
			<!-- Content -->
			<section class="flex flex-col w-full items-center py-2 gap-4">
				<!-- Name -->
				<FloatLabel
					variant="on"
					class="w-full"
				>
					<InputText
						id="name_input"
						class="w-full"
						inputmode="text"
						placeholder="Insert new name"
						:default-value="productStore.selectedProduct.name"
						@update:model-value="productStore.selectedProduct.name = $event as string"
					/>
							<label for="name_input">Name</label>
				</FloatLabel>
				<!-- Description -->
				<FloatLabel
					variant="on"
					class="w-full"
				>
					<InputText
						id="description_input"
						class="w-full"
						inputmode="text"
						placeholder="Insert new description"
						:default-value="productStore.selectedProduct.description"
						@update:model-value="productStore.selectedProduct.description = $event as string"
					/>
							<label for="description_input">Description</label>
				</FloatLabel>
				<!-- Price -->
				<FloatLabel
					variant="on"
					class="w-full"
				>
					<InputText
						id="price_input"
						class="w-full"
						inputmode="numeric"
						placeholder="Insert new price"
						:default-value="productStore.selectedProduct.price + ''"
						@update:model-value="productStore.selectedProduct.price = Number($event)"
					/>
							<label for="price_input">price</label>
				</FloatLabel>
			</section>
			<!-- Actions -->
			<section class="w-full flex flex-row justify-end items-center gap-2 mt-2">
				<Button
					severity="success"
					label="Confirm"
					size="small"
					@click="productStore.editProduct()"
				/>
				<Button
					severity="secondary"
					label="Cancel"
					size="small"
					@click="productStore.isEditProductOpen = false"
				/>
			</section>
		</div>
	</Dialog>
</template>
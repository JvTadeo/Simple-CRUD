<script setup lang="ts">
import { Button } from 'primevue';
import { useProductStore } from '../stores/product.store';
import Avatar from 'primevue/avatar';

const productStore = useProductStore();
</script>

<template>
	<div class="w-full h-12 flex flex-row items-center bg-neutral-600 px-2 mt-2 justify-end rounded-2xl gap-4">
		<Button
			label="Create Product"
			size="small"
			@click="productStore.isCreateProductOpen = true"
		/>
		<Avatar class="mr-2 cursor-pointer " size="normal" shape="circle">
			<span class="material-symbols-rounded">
				account_circle
			</span>
		</Avatar>
	</div>
</template>
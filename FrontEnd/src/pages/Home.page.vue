<script setup lang="ts">
import { useProductStore } from '../stores/product.store';
import { onMounted } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import UserBarComponent from '../components/UserBar.component.vue';

const productStore = useProductStore();

onMounted( async () => {
	await productStore.getProducts();
})

</script>

<template>
	<div class="flex flex-col h-full w-full">
		<!-- Navbar -->
		<UserBarComponent />
		<!-- Content -->
		<div class="flex flex-col	w-full justify-center mt-10">
			<DataTable
				:value="productStore.products" tableStyle="min-width: 50rem"
			>
				<Column field="name" header="Name"></Column>
				<Column field="description" header="Description"></Column>
				<Column field="price" header="Price">
					<template #body="props" >
						${{ props.data.price.toFixed(2) }}
					</template>
				</Column>
				<Column header="-">
					<template #body="props">
						<section class="flex flex-row gap-2 items-center">
							<!-- Delete -->
							<Button
								severity="danger"
								size="small"
								v-tooltip.top="'Delete'"
								@click="productStore.openDeleteModal(props.data)"
							>
								<span class="material-symbols-rounded">
									delete
								</span>
								<!-- Modal -->								
							</Button>
							<!-- Edit -->
							<Button
								severity="secondary"
								size="small"
								v-tooltip.top="'Edit'"
								@click="productStore.openEditProductModal(props.data)"
							>
								<span class="material-symbols-rounded">
									edit
								</span>
							</Button>													
						</section>
					</template>
				</Column>
			</DataTable>
		</div>
	</div>
</template>
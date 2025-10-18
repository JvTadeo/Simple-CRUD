<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

const authStore = useAuthStore();

</script>

<template>
	<div class="bg-neutral-800 w-1/2 h-2/3 p-2 gap-2 flex flex-row rounded-md justify-between">
		<!-- Login -->
		<section class="h-full w-full flex flex-col py-10">
			<div class="px-6 w-full h-full flex flex-col justify-between">
				<!-- Title -->
				<div class="flex flex-row items-center gap-2">
					<p class="text-2xl font-bold text-neutral-500 ">UIC</p>
				</div>
				<!-- Description -->
				<div class="my-8 flex flex-col">
					<p class="text-6xl font-extrabold text-neutral-50">Hello!</p>
					<p class="text-4xl font-extrabold text-neutral-50">Welcome Back</p>
					<p class="text-sm mt-4 text-neutral-500">Hey, welcome to the best place in the world!</p>
				</div>
				<!-- Inputs -->
				<div class="flex flex-col w-full gap-4">
					<FloatLabel variant="on">
						<InputText
							id="email_input"
							class="w-full"
							inputmode="email"
							:disabled="authStore.loading"
							v-on:value-change="authStore.auth.email = $event as string"
						/>
						<label for="email_input">Email</label>
					</FloatLabel>
					<FloatLabel variant="on">
						<Password
							id="password_input"
							class="w-full"
							input-class="w-full"
							:feedback="false"
							:disabled="authStore.loading"
							v-on:value-change="authStore.auth.password = $event as string"
						/>
						<label for="password_input">Password</label>
					</FloatLabel>
				</div>
				<!-- Button -->
				<Button
					severity="help"
					label="Login"
					:disabled="authStore.loading"
					@click="authStore.login()"
				/>
				<div class="flex flex-row gap-1.5">
					<p class="text-sm text-neutral-500" >Don't have an account?</p>
					<p
						class="text-sm text-purple-600 font-medium cursor-pointer"
						@click="$router.push('/register')"
					>
						Sign Up
					</p>
				</div>
			</div>
		</section>
		<section class="flex h-full w-full bg-purple-600 rounded-sm items-center">
			<img
				src="/images/auth-image.png"
				class="w-full object-cover items-center"
			/>
		</section>
	</div>
</template>
import type { IAuth } from "../interfaces/auth.interface";
import { app } from "../main";
import { defineStore } from "pinia";
import { ServerAPI } from "../api";
import { showToast } from "../utils/toast";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loading: false as boolean,
        auth: {} as IAuth,
        tempPassword: '' as string,
        id: '' as string
    }),
    actions: {
        async login() {
            this.loading = true;
            
            await ServerAPI.login(this.auth.email, this.auth.password)
            .then(({data}) => {
                // Save token in SessionStorage
                sessionStorage.setItem('token', data.token);

                app.config.globalProperties.$router.push('/');

                this.id = data.id
            })
            .catch((error) => {
                const { data } = error.response;

                showToast("error", 'Login', data.message);
            })

            this.loading = false;
        },
        async register() {
            this.loading = true;
            // First check if any field is empty
            if (this.auth.email == '' || this.auth.password == '' || Object.keys(this.auth).length == 0) {
                showToast('error', 'Register', 'Email and password are required');
                this.loading = false;
                return;
            }

            // Check if passwords match
            if (this.auth.password !== this.tempPassword) {
                showToast('error', 'Register', 'Passwords do not match');
                this.loading = false;
                return;
            }

            await ServerAPI.register(this.auth.email, this.auth.password)
            .then(() => {
                showToast('success', 'Register', 'User created successfully');
                app.config.globalProperties.$router.push('/login');
            })
            .catch((error) => {
                const { data } = error.response;
                showToast("error", 'Register', data.message);
            })

            this.loading = false;
        }
    }
})
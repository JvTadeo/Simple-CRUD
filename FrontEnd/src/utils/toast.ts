import { app } from "../main";

export function showToast(
    severity: 'contrast' | 'success' | 'info' | 'warn' | 'error',
    summary: string,
    detail: string,
    group?: 'tr'    
) {
    const toast = app.config.globalProperties.$toast;
    toast.add({ severity, summary, detail, group, life: 3000 });
}
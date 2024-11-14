import { ref, onMounted } from 'vue'

export function useDarkMode() {
    const isDark = ref(false)

    onMounted(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            isDark.value = true
            document.documentElement.classList.add('dark')
        }
    })

    const toggleDarkMode = () => {
        isDark.value = !isDark.value
        document.documentElement.classList.toggle('dark')
    }

    return {
        isDark,
        toggleDarkMode
    }
}
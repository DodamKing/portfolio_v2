// components/common/ImageModal.vue
<template>
    <transition name="modal">
        <div v-if="isOpen" class="fixed inset-0 z-[10000] overflow-hidden" @click="closeModal">
            <div class="min-h-screen px-4 flex items-center justify-center">
                <div class="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"></div>
                <img :src="imageSrc" :alt="imageAlt" class="relative max-w-[90%] max-h-[90vh] object-contain"
                    @click.stop />
                <button class="absolute top-4 right-4 text-white p-2 text-3xl" @click="closeModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>
defineProps({
    isOpen: Boolean,
    imageSrc: String,
    imageAlt: String
})

const emit = defineEmits(['close'])
const closeModal = () => emit('close')
</script>
<template>
    <header class="flex gap-4">
        <h2 class="font-bold text-2xl">{{ title }}</h2>
        <button class="flex gap-2 p-1 pr-2 bg-[#313234] rounded-[32px]">
            <IconsSquareFour />
            Ver todos
        </button>
    </header>
</template>

<script setup>
import IconsSquareFour from "../components/icons/SquareFour.vue";

const props = defineProps ({
    title: String
})
</script>
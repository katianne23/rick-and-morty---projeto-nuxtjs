<template>
    <NuxtLink  class="self-end bg-[#11B0C8] flex gap-2 py-[6px] pl-1 pr-2 rounded-[32px] text-sm items-center"
        :to="actionUrl" target="_blank">
        <IconsInfo />
        Saiba Mais
    </NuxtLink>
</template>

<script setup>
import IconsInfo from "../components/icons/Info.vue";

const props = defineProps({
    actionUrl: String
})

</script>
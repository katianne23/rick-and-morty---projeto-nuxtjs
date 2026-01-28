<template>
    <NuxtLink  class="flex gap-2 py-[6px] pl-1 pr-2 rounded-[32px] text-sm items-center"
        :to="urlToRedirect">
        <IconsInfo />
        Saiba Mais
    </NuxtLink>
</template>

<script setup>
import IconsInfo from "../components/icons/Info.vue";

const props = defineProps({
    id: Number,
    type: {
        type: String,
        default: "Character"
    }
});

const urlToRedirect = computed(() => {
    if(props.type === 'character') {
        return `/character/${props.id}`
    }

    return `/epsodio/${props.id}`
})

</script>
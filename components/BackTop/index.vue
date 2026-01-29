<template>
    <button class="flex items-center gap-2 cursor-pointer" @click="scrollToTop">
        <p>
            Voltar ao topo
        </p>
        <IconsCircleArrow />
    </button>
</template>

<script setup>
 const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>
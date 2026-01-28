<template>
    <div class="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-0 gap-3">
        <NuxtLink to="/">
            <img src="/public/images/LogoB.png" alt="Logo" width="220" height="64"
                class="w-40 md:w-56 lg:w-64 lg:mb-0 mb-4">
        </NuxtLink>
        <button class="flex items-center gap-2 p-2 pr-3 bg-[#11B0C8] rounded-[32px]">
            <IconsHeartOutlined color="white" :width="24" :height="24" />
            Lista de Favoritos
        </button>
    </div>
</template>
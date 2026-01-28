<script setup lang="ts">
import Dark from '../icons/Dark.vue';
import White from '../icons/White.vue';

</script>

<template>
    <header class="bg-black pt-16">
        <PageContainer class="flex flex-col gap-5 lg:p-0 p-6">
            <div class="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-0 gap-3">
                <img src="/public/images/LogoB.png" alt="Logo" width="220" height="64" class="w-40 md:w-56 lg:w-64 lg:mb-0 mb-4">
                <button class="flex items-center gap-2 p-2 pr-3 bg-[#11B0C8] rounded-[32px]">
                    <IconsHeartOutlined color="white" :width="24" :height="24" />
                    Lista de Favoritos
                </button>
            </div>
            <div class="flex flex-col lg:flex-row gap-16">
                <div class="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 text-center lg:text-left">
                    <h1 class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        Saiba tudo em um só <span class="text-[#BFDE42]">Lugar.</span>
                    </h1>
                    <p class="text-gray-300 text-sm sm:text-lg">Personagens. localizações, episódios e muito mais.</p>
                    <div class="flex items-center lg:justify-start justify-center gap-4 mt-10">
                        <button class="flex items-center gap-2 p-2 pr-3 bg-[#11B0C8] rounded-[32px]">
                            <Dark />
                            Escuro
                        </button>
                        <button class="flex items-center gap-2 p-2 pr-3 bg-[#313234] rounded-[32px]">
                            <White />
                            Claro
                        </button>
                    </div>
                    <p class="text-[#BFDE42] ">Ai sim!</p>
                </div>
                <img src="/images/rick.png" alt="Rick" />
            </div>
        </PageContainer>
    </header>
</template>
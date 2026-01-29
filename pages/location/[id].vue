<template>
    <PageContainer class="pt-12">
        <Header />
        <section class="flex lg:items-start items-center  flex-col gap-4 pt-10 space-y-2">
            <Planet :width="72" :height="72" />
            <h1 class="flex lg:flex-row flex-col items-center gap-2 lg:text-[40px] text-[30px] font-bold">{{ data.name }}
                <HeartOutlined :width="56" :height="56" />
            </h1>
            <div class="flex items-center gap-6">
                <div class="flex items-center gap-2">
                    <Planet :width="32" height="32" />
                    <span class="lg:text-[24px] text-[18px]">{{ data.type
                        }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <Dimension />
                    <span class="lg:text-[24px] text-[18px]">{{ data.dimension
                        }}</span>
                </div>
            </div>

            <div class="flex items-center gap-2 lg:pt-8">
                <More :width="32" :height="32" />
                <span>{{ data.residents.length }} Personagens localizados aqui </span>
            </div>
            <div class="border-b-2 border-[#11B0C8] pt-24"></div>
            <section class="pt-7">
                <div class="flex items-center gap-3 w-54 lg:mx-0 mx-auto">
                    <Planet :width="39" :height="39" />
                    <h2 class="text-[24px] font-bold">Mais Localizações</h2>
                </div>
                <LocationCard />
            </section>
        </section>
    </PageContainer>
</template>


<script setup>
import Dimension from '~/components/icons/Dimension.vue';
import HeartOutlined from '~/components/icons/HeartOutlined.vue';
import More from '~/components/icons/More.vue';
import Planet from '~/components/icons/Planet.vue';

const route = useRoute();

const { id } = route.params

const { data } = await useFetch(`https://rickandmortyapi.com/api/location/${id}`);

console.log(data.value)
useHead({
    title: `${data.value.name} - Rick And Morty`,
    link: [{ rel: "icon", type: "image/x-icon", href: data.value.image }]
})
</script>
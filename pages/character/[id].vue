<template>
    <PageContainer class="pt-12">
        <Header />
        <div class="flex gap-16 pt-10">
            <img :src="data.image" :alt="data.name" width="369" height="461" class="rounded-[16px]">
            <div class="flex flex-col gap-8">
                <div class="flex items-center gap-4">
                    <h1 class="text-5xl ">{{ data.name }}</h1>
                    <HeartOutlined />
                </div>
                <p class="flex items-center gap-2">
                    <Play /> Participou de {{ data.episode.length }} episódios
                </p>

                <div class="flex gap-6">
                    <p class="flex items-center gap-2">
                        <Live /> {{ data.status === 'Alive' ? 'Vivo' : 'Morto' }}
                    </p>
                    <p class="flex items-center gap-2">
                        <Human /> {{ data.species }}
                    </p>
                    <p class="flex items-center gap-2">
                        <Planet :width="16" :height="16" />{{ data.gender }}
                    </p>
                </div>
            </div>
            <div class="flex self-end gap-4">
                <Card class="flex flex-col items-center justify-center gap-0 pt-6 mt-4 relative h-[170px] bg-[#313234]">
                    <div class="absolute top-[-30px]">
                        <Planet />
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <p class="text-center">{{ data.location.name }}</p>
                    </div>
                    <div class="flex flex-col items-center justify-center mt-auto gap-2">
                        <SeeDocumentDetails class="bg-[#11B0C8]" />
                        <HeartFilled :width="28" :height="23" />
                    </div>
                </Card>
                <Card class="flex flex-col items-center justify-center gap-0 pt-6 mt-4 relative h-[170px] bg-[#313234]">
                    <div class="absolute top-[-30px]">
                        <Location />
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <p class="text-center">{{ data.origin.name }}</p>
                    </div>
                    <div class="flex flex-col items-center justify-center mt-auto gap-2">
                        <SeeDocumentDetails class="bg-[#11B0C8]" />
                        <HeartFilled :width="28" :height="23" />
                    </div>
                </Card>
            </div>
        </div>
        <div class="border-b border-[#11B0C8] pt-6"></div>
        <section class="pt-10">
            <div class="flex items-center gap-3 w-[260px]"><More /> <h2 class="text-[24px] font-bold">Mais personagens</h2> </div>
            <CharacterCard />
        </section>
    </PageContainer>
</template>

<script setup>
import HeartFilled from '~/components/icons/HeartFilled.vue';
import Human from '~/components/icons/Human.vue';
import Live from '~/components/icons/Live.vue';
import Location from '~/components/icons/Location.vue';
import More from '~/components/icons/More.vue';
import Planet from '~/components/icons/Planet.vue';
import Play from '~/components/icons/Play.vue';

const route = useRoute();

const { id } = route.params

const { data } = await useFetch(`https://rickandmortyapi.com/api/character/${id}`);

console.log(data.value)

useHead({
    title: `${data.value.name} - Rick And Morty`,
    link: [{ rel: "icon", type: "image/x-icon", href: data.value.image }]
})
</script>
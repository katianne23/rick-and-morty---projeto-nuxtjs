<template>
    <PageContainer class="pt-12">
        <Header />
        <section class="flex flex-col gap-4 pt-10 space-y-2">
            <Play :height="72" :width="72" />
            <h1 class="flex items-center gap-2 text-[40px] font-bold">{{ data.name }}
                <HeartOutlined :width="56" :height="56" />
            </h1>
            <div class="flex items-center gap-6">
                <div class="flex items-center gap-2">
                    <Calendar />
                    <span class="text-[24px]">{{ data.air_date
                        }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <PlayThree />
                    <span class="text-[24px]">{{ data.episode
                        }}</span>
                </div>
            </div>

            <div class="flex items-center gap-2 pt-8">
                <More :width="32" height="32" />
                <span>{{ data.characters.length }} Personagens participaram deste episódio </span>
            </div>
        </section>

        <div class="border-b-2 border-[#11B0C8] pt-24"></div>
        <section class="pt-7">
            <div class="flex items-center gap-3 w-54">
                <Play :width="39" :height="39"/>
                <h2 class="text-[24px] font-bold">Mais episódios</h2>
            </div>
            <EpisodeCard />
        </section>
    </PageContainer>
</template>


<script setup>
import Calendar from '~/components/icons/Calendar.vue';
import HeartOutlined from '~/components/icons/HeartOutlined.vue';
import More from '~/components/icons/More.vue';
import Play from '~/components/icons/Play.vue';
import PlayThree from '~/components/icons/PlayThree.vue';


const route = useRoute();

const { id } = route.params

const { data } = await useFetch(`https://rickandmortyapi.com/api/episode/${id}`);

console.log(data.value)
useHead({
    title: `${data.value.name} - Rick And Morty`,
    link: [{ rel: "icon", type: "image/x-icon", href: data.value.image }]
})
</script>
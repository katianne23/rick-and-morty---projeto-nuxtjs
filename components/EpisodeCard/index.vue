<template>
    <section class="flex flex-col w-full mx-auto gap-8">
        <div class="flex gap-4 flex-wrap justify-center lg:grid lg:grid-cols-[repeat(5,1fr)] pt-8">
            <Card v-for="currentEpisode of data.results"
                class="flex flex-col gap-2  justify-between min-h-[150px] max-w-[250px]">
                <div class="flex gap-2 items-center">
                    <IconsPlay class="flex-[0_0_24px]" />
                    <p> {{ currentEpisode.name }} | {{ currentEpisode.episode }}</p>
                </div>

                <div class="flex items-center justify-between">
                    <SeeDocumentDetails class="my-auto bg-[#313234]" type="episode" :id="currentEpisode.id" />
                    <IconsHeartFilled :width="32" :height="32" />
                </div>

            </Card>
        </div>
        <div class="flex items-center justify-center pt-7">
            <UPagination v-if="data?.info" v-model:page="page" :items-per-page="20" :total="data.info.count" />
        </div>
    </section>
</template>

<script setup>
import Card from "../../components/Card/index.vue";
import SeeDocumentDetails from "../../components/SeeDocumentDetails/index.vue";
import IconsPlay from "../../components/icons/Play.vue";
import IconsHeartFilled from "../../components/icons/HeartFilled.vue";

const page = ref(1)

const { data, pending, refresh } = await useAsyncData(
    'episode',
    () => $fetch(`https://rickandmortyapi.com/api/episode?page=${page.value}`),
    {
        watch: [page],
    }
);

</script>
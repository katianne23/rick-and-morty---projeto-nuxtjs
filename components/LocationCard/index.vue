<template>
    <section class="flex flex-col w-full mx-auto gap-8">
        <div class="flex gap-4 flex-wrap justify-center lg:grid lg:grid-cols-[repeat(7,1fr)] mt-12">
            <Card v-for="currentLocation of data.results"
                class="flex flex-col items-center justify-center gap-0 pt-6 mt-4 relative">
                <div class="absolute top-[-30px]">
                    <Planet />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p>{{ currentLocation.type }}</p>
                    <p class="text-center text-[#11B0C8]">{{ currentLocation.name }}</p>

                </div>
                <div class="flex flex-col items-center justify-center mt-auto gap-2">
                    <SeeDocumentDetails class="bg-[#313234]" type="location" :id="currentLocation.id" />
                    <HeartFilled :width="28" :height="23" />
                </div>


            </Card>
        </div>
        <div class="flex items-center justify-center">
            <UPagination v-if="data?.info" v-model:page="page" :items-per-page="20" :total="data.info.count" />
        </div>
    </section>
</template>

<script setup>
import HeartFilled from '../icons/HeartFilled.vue';
import Planet from '../icons/Planet.vue';

const page = ref(1)

const { data, pending, refresh } = await useAsyncData(
    'episode',
    () => $fetch(`https://rickandmortyapi.com/api/location?page=${page.value}`),
    {
        watch: [page],
    }
);

</script>
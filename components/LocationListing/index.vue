<template>
    <section class="flex flex-col gap-8 py-4 items-center xl:items-start">
        <ListingHeader title="Localização" />
        <div class="flex gap-4 flex-wrap justify-center lg:grid lg:grid-cols-[repeat(7,1fr)]">
            <Card v-for="currentLocation of locationToShow" class="flex flex-col items-center justify-center gap-0 pt-6 mt-4 relative">
                <div class="absolute top-[-30px]">
                    <Planet />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p>{{ currentLocation.type }}</p>
                    <p class="text-center text-[#11B0C8]">{{ currentLocation.name }}</p>

                </div>
                <div class="flex flex-col items-center justify-center mt-auto gap-2">
                    <SeeDocumentDetails />
                    <HeartFilled :width="28" :height="23" />
                </div>


            </Card>
        </div>
    </section>
</template>

<script setup>
import HeartFilled from '../icons/HeartFilled.vue';
import Planet from '../icons/Planet.vue';

const { data } = await useFetch("https://rickandmortyapi.com/api/location");
const locationToShow = computed(() => {
    return data.value?.results?.slice(0,7) || [];
})
</script>
<template>
    <section class="flex flex-col w-full mx-auto gap-8">
        <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
            <div class="flex flex-wrap gap-4 justify-center">
                <Card v-for="currentCharacter of data.results">
                    <img :src="currentCharacter.image" :alt="currentCharacter.name" height="200" width="262"
                        class="rounded-2xl h-50 object-cover" />

                    <div class="grid grid-cols-[1fr,48px]">
                        <div class="flex flex-col gap-4">
                            <p class="text-base font-bold">{{ currentCharacter.name }}</p>

                            <div class="flex flex-col gap-2">
                                <p class="flex items-center gap-2">
                                    <Live /> {{ currentCharacter.status === "Alive" ? 'Vivo' : 'Morto' }}
                                </p>
                                <p class="flex items-center gap-2">
                                    <Human /> {{ currentCharacter.species }}
                                </p>
                                <p class="flex items-center gap-2">
                                    <Planet :height="16" :width="16" />{{ currentCharacter.origin.name }}
                                </p>
                            </div>
                        </div>

                        <span>
                            <IconsHeartFilled v-if="currentCharacter.status === 'Alive'" />
                            <IconsHeartOutlined v-if="currentCharacter.status !== 'Alive'" />
                        </span>
                    </div>

                    <SeeDocumentDetails :id="currentCharacter.id" class="mt-auto self-end bg-[#11B0C8]"
                        type="character" />

                </Card>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <UPagination v-if="data?.info" v-model:page="page" :items-per-page="20" :total="data.info.count" />
        </div>

    </section>
</template>

<script setup>
import IconsHeartFilled from "../../components/icons/HeartFilled.vue";
import IconsHeartOutlined from "../../components/icons/HeartOutlined.vue";
import SeeDocumentDetails from "../../components/SeeDocumentDetails/index.vue"
import Card from "../../components/Card/index.vue";
import Live from "../icons/Live.vue";
import Human from "../icons/Human.vue";
import Planet from "../icons/Planet.vue";

const page = ref(1)

const { data, pending, refresh } = await useAsyncData(
    'characters',
    () => $fetch(`https://rickandmortyapi.com/api/character?page=${page.value}`),
    {
        watch: [page],
    }
);;



</script>
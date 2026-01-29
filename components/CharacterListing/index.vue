<template>
    <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">
        <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
            <ListingHeader title="Personagens" />
            <div class="flex flex-wrap gap-4 justify-center">
                <Card v-for="currentCharacter of characterToShow">
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

                    <SeeDocumentDetails :id="currentCharacter.id" class="mt-auto self-end bg-[#11B0C8]" type="character" />

                </Card>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconsHeartFilled from "../../components/icons/HeartFilled.vue";
import IconsHeartOutlined from "../../components/icons/HeartOutlined.vue";
import SeeDocumentDetails from "../../components/SeeDocumentDetails/index.vue"
import Card from "../../components/Card/index.vue";
import ListingHeader from "../../components/ListingHeader/index.vue";
import Live from "../icons/Live.vue";
import Human from "../icons/Human.vue";
import Planet from "../icons/Planet.vue";

const { data } = await useFetch(
    "https://rickandmortyapi.com/api/character",
);

const characterToShow = computed(() => {
    return data.value?.results?.slice(0, 8) || [];
})
</script>
<template>
  <div class="flex flex-col gap-16">
    <HomeHeroHeader />
    <PageContainer>
      <CharactersListing />
      <EpisodesListing />
      <LocationListing />
    </PageContainer>
  </div>
</template>

<script lang="ts" setup>

import EpisodesListing from "../components/EpisodesListing/index.vue";
import CharactersListing from "../components/CharacterListing/index.vue";

useHead({
  title: `Rick And Morty`,
  link: [{ rel: "icon", type: "image/x-icon", href: "/public/FaviconA.svg" }]
})

</script>

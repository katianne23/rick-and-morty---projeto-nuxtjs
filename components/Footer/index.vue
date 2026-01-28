<template>
    <PageContainer >
    <footer class="flex flex-col">
        <div class="flex lg:flex-row flex-col justify-between items-center py-20 border-b-2">
            <img src="/public/images/LogoB.png" alt="Logo">
            <BackTop />
        </div>
        <div class="border-t-2 flex lg:flex-row flex-col items-center justify-between py-6">
            <p>&copy; {{ new Date().getFullYear() }}</p>
            <span class="flex items-center gap-2">
                <IconsCode />
                <p> Desenvolvido por <span class="text-[#11B0C8] font-bold">Katianne Aráujo</span></p>
            </span>
        </div>
    </footer>
    </PageContainer>
</template>

<script setup>
</script>
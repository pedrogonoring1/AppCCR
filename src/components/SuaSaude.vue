<template>
    <q-card class="bg-white text-dark">
        <q-bar>
            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
        </q-bar>

        <q-card-section>
            <div class="text-h4 q-mb-md">{{ title }}</div>
            <q-img class="rounded-borders" :src="imagem_url" style="width: 328px"/>
        </q-card-section>

        <q-card-section class="q-pt-none">{{ content }}</q-card-section>
    </q-card>
</template>

<script>
export default {
    name: "ComponentSuaSaude",

    props: {
        title: String,
        caption: String,
        content: String,
        imagem_url: String
    }
}
</script>
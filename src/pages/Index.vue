<template>
    <q-page>
        <div class="bg-primary bg-top full-width">
            <div class="q-pa-md">
                <q-card class="row full-width text-center">
                    <q-card-section>
                    <div class="q-pa-md">
                        <q-avatar><img :src="motorista['pessoais']['avatar_url']"></q-avatar>
                    </div>
                    <div>Level: {{ motorista["level"] }}</div>
                    </q-card-section>
                
                    <q-card-section class="q-mt-lg">
                        <div class="text-h6">{{ motorista["pessoais"]["nome"] }}</div>
                        <div class="q-pb-md">{{ motorista["pessoais"]["cidade"] }}</div>
                        <div>Dias ativo: {{ motorista["dias_ativo"] }} dias</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>

        <div class="q-pa-md container q-gutter-y-lg" align="center">
            <q-btn to="/suasaude" rounded push size="lg" class="block text-black full-width" color="green" label="SUA SAÚDE" />
            <q-btn to="/socialtruck" rounded push size="lg" class="block text-black full-width" color="blue" label="SOCIAL TRUCK" />
            <q-btn to="/entretenimento" rounded push size="lg" class="block text-black full-width" color="yellow" label="ENTRETENIMENTO" />
        </div>
    </q-page>
</template>

<script>
import { LocalStorage } from "quasar";

if (LocalStorage.getItem("motorista") === null) {
    const motorista = {
        pessoais: {
            nome: "Gabriel Lobo",
            cidade: "Guanambi, BA",
            avatar_url: "https://cdn.quasar.dev/img/avatar4.jpg",
        },
        level: 15,
        dias_ativo: 155
    };

    const motoristas = [
        { pessoais: { nome: "Sabrina Dias", cidade: "Guanambi, BA", avatar_url: "https://cdn.quasar.dev/img/avatar2.jpg", }, level: 9, dias_ativo: 155 },
        { pessoais: { nome: "João Pedro", cidade: "Guanambi, BA", avatar_url: "https://cdn.quasar.dev/img/avatar1.jpg", }, level: 16, dias_ativo: 155 },
        { pessoais: { nome: "Fernanda Rodrigues", cidade: "Guanambi, BA", avatar_url: "https://cdn.quasar.dev/img/avatar3.jpg", }, level: 12, dias_ativo: 155 },
    ]
    LocalStorage.set("motorista", motorista);
    LocalStorage.set("motoristas", motoristas);
}


export default {
    name: 'Index',
    data () {
        return {
            motorista: LocalStorage.getItem("motorista")
        }
    }
}
</script>
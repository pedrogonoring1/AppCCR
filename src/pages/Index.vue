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

        <div class="q-gutter-y-ls q-mt-lg" align="center">
            <q-btn to="/suasaude"  class="btn-Acoes btn-blue" color="green" label="SUA SAÚDE" />
            <q-btn to="/socialtruck"  class="btn-Acoes btn-blue" color="blue" label="SOCIAL TRUCK" />
            <q-btn to="/entretenimento"  class="btn-Acoes btn-blue" color="orange" label="ENTRETENIMENTO" />
        </div>
    </q-page>
</template>

<script>
import { LocalStorage } from "quasar";

export default {
    name: 'Index',
    data () {
        return {
            motorista: LocalStorage.getItem("motorista")
        }
    }
}
</script>
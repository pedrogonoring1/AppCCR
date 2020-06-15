<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-lg q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg">ENTRETENIMENTO</label>
        </div>
    </div>  


    <!-- Card para filtrar local de parada -->
    <div class="row text-center q-pr-sm q-mt-sm">
        <div class="col-4">
            <q-img
                src="~assets/img/iconSport.png"
                spinner-color="white"
                style="height: 43px; max-width: 43px; margin-bottom: 8px;"
                class="q-mb-sm"
            /> <br>
            <label for="">Esporte</label>
            
        </div>
        <div class="col-4">
            <q-img
                src="~assets/img/iconWheel.png"
                spinner-color="white"
                style="height: 45px; max-width: 45px"
                class="q-mb-sm"
            /> <br>
            <label for="">Caminhão</label>
        </div>
        <div class="col-4">
            <q-img
                src="~assets/img/iconMoney.png"
                spinner-color="white"
                style="height: 45px; max-width: 45px"
                class="q-mb-sm"
            /> <br>
            <label class="q-mb-lg">Economia</label>
        </div>
    </div>



    <!-- Cards Pontos Proximos -->

    <div class="row text-center q-mt-lg">
        <div class="col-12 q-mt-lg">
            <label class="text-subtitle1 text-weight-bolder">NOTICIAS PARA VOCÊ</label>
        </div>
    </div>


    <!-- Cards Noticias -->
    <div v-for="(noticia, index) in noticias" :key="index">
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card" flat bordered>
                <q-card-section horizontal>
                    <q-card-section class="q-pt-xs">
                        <div class="text-h5 q-mt-sm q-mb-xs">{{ noticia['title'] }}</div>
                        <div class="text-caption text-grey">{{ noticia['caption'] }}</div>
                    </q-card-section>

                    <q-card-section class="col-7 flex flex-center">
                        <q-img class="rounded-borders" :src="noticia['imagem_url']"/>
                    </q-card-section>
                </q-card-section>

                <q-separator />

                <q-card-actions>
                    <q-btn flat color="primary" @click="dialog = true; setAtual(noticia)">Ler agora</q-btn> 
                    <q-btn flat round color="primary" icon="share"/>
                </q-card-actions>
            </q-card>
        </div>

        <!-- Modal -->
        <div class="q-pa-md q-gutter-sm">
            <q-dialog v-model="dialog" persistent :maximized="maximizedToggle" transition-show="slide-up" transition-hide="slide-down">
                <ComponentEntretenimento v-bind="noticia_atual" />
            </q-dialog>
        </div>
    </div>

    <!-- Espaço para o final de página -->
    <div class="row q-mt-lg">
        <div class="col-12 q-mt-lg">
            <div class="q-mt-lg"></div>
        </div>
    </div>

  </q-page>
</template>

<script>
import { LocalStorage } from "quasar";
import ComponentEntretenimento from "components/Entretenimento";

LocalStorage.clear();

export default {
    name: 'PageEntretenimento',
    components: {
        ComponentEntretenimento
    },

    data () {
        return {
            dialog: false,
            maximizedToggle: true,
            noticia_atual: {},
            noticias: LocalStorage.getItem("noticias")
        }
    },
    methods: {
        setAtual(noticia) {
            this.noticia_atual = noticia;
        }
    }
}
</script>

<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-md q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg">SUA SAÚDE</label>
        </div>
    </div>  

    <!-- Cards Pontos Proximos -->
    <div class="row paddingPanel q-mt-xs">
        <div class="col-12  userInfo">
            <label class="text-subtitle1 text-weight-bolder">SUAS INFORMAÇÕES</label> <br>
            <label class="text-subtitle1 text-weight-bolder">Peso:</label> <label class="text-subtitle1 q-mr-md"> 78kg </label> <a href="">Atualizar</a> <br>
            <label class="text-subtitle1 text-weight-bolder">IMC:</label> <label class="text-subtitle1"> Está Excelente </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Humor:</label> <label class="text-subtitle1"> Feliz </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Água:</label> <label class="text-subtitle1"> Está bebendo regularmente. </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Noites de Sono:</label> <label class="text-subtitle1"> Excelente. </label> <br>
        </div>
    </div>


    <div class="row text-center q-mt-lg">
        <div class="col-12 q-mt-lg">
            <label class="text-subtitle1 text-weight-bolder">DICAS DE ESPECIAIS</label>
        </div>
    </div>

    <!-- Cards Noticias de Saúde-->
    <div v-for="(dica, index) in dicas" :key="index">
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card" flat bordered>
                <q-card-section horizontal>
                    <q-card-section class="q-pt-xs">
                        <div class="text-h5 q-mt-sm q-mb-xs">{{ dica['title'] }}</div>
                        <div class="text-caption text-grey">{{ dica['caption'] }}</div>
                    </q-card-section>

                    <q-card-section class="col-7 flex flex-center">
                    <q-img class="rounded-borders" :src="dica['imagem_url']" style="width: 150px"/>
                    </q-card-section>
                </q-card-section>

                <q-separator />

                <q-card-actions>
                    <q-btn flat color="primary" @click="dialog = true; setAtual(dica)">Ler agora</q-btn> 
                    <q-btn flat round color="primary" icon="share"/>
                </q-card-actions>
            </q-card>
        </div>
        
        <!-- Modal -->
        <div class="q-pa-md q-gutter-sm">
            <q-dialog v-model="dialog" persistent :maximized="maximizedToggle" transition-show="slide-up" transition-hide="slide-down">
                <ComponentSuaSaude v-bind="dica_atual" />
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
import ComponentSuaSaude from "components/SuaSaude";

LocalStorage.clear();

export default {
    name: 'PageSuaSaude',
    components: {
        ComponentSuaSaude
    },

    data () {
        return {
            dialog: false,
            maximizedToggle: true,
            dica_atual: {},
            dicas: LocalStorage.getItem("dicas")
        }
    },
    methods: {
        setAtual(dica) {
            this.dica_atual = dica;
        }
    }
}
</script>

<template>
    <q-page>
        <!-- Painel de Viagem -->
        <div class="row paddingPanel q-mt-lg">
            <div class="col-12 userInfo">
                <label class="text-weight-bolder"> 
                    VIAGEM ATUAL
                </label> <br> <br>

                <img src="~assets/img/iconLocation.png" alt="" class="tamanhoIconViagem">
                <label class="text-weight-bolder"> 
                    Inicio:
                </label>
                <label v-html="inicio"> 
                    
                </label> <br> <br>

                <img src="~assets/img/iconPin.png" alt="" class="tamanhoIconViagem"> 
                <label class="text-weight-bolder"> 
                    Destino:
                </label>
                <label v-html="destino"> 
                   
                </label>
            </div>
        </div>

        <div class="row text-center">
            <div class="col-12">
                <q-btn label="Pontos Paradas" class="btn-Acoes btn-blue" to="/paradasproximas"/>
            </div>
            <div class="col-12">
                <q-btn label="Adicionar Viagem" class="btn-Acoes btn-green" @click="alert = true"/>
            </div>
        </div>


        <!-- Troca de Óleo -->
            <q-dialog v-model="alert">
                 <q-card>
                    <q-card-section>
                    <div class="text-h6">Adicionar Viagem</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                    <div class="q-pa-md q-gutter-sm">
                        <label>Inicio</label>
                        <input type="text" v-model="inicio" class="q-mb-lg q-ml-lg">
                        <label >Destino</label>
                        <input type="text" v-model="destino">
                    </div>
                    </q-card-section>

                    <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

        
    </q-page>
</template>




<script>
export default {
    name: 'PageViagem',

    data () {
    return {
      inicio: "São Paulo, SP.",
      destino: "Rio de Janeiro, Rj.",
      alert: false,
      confirm: false,
      prompt: false,
    
      address: ''
    }
  }
}
</script>

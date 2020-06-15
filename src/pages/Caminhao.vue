<template>
    <q-page>

        <!-- Painel do Caminhão -->
        <div class="row paddingPanel q-mt-lg">
            <div class="col-12 userInfo">
                <label class="text-weight-bolder"> 
                    STATUS CAMINHÃO
                </label> <br> <br>

                <img src="~assets/img/iconGasoline.png" alt="" class="tamanhoIconViagem">
                <label class="text-weight-bolder" > 
                    Trocar Óleo em: 
                </label>
                <label v-html="dataOleo"> 
                  
                </label> <br> <br>

                <img src="~assets/img/iconTire.png" alt="" class="tamanhoIconViagem"> 
                <label class="text-weight-bolder"> 
                    Trocar Rodas em  :
                </label>
                <label v-html="dataRodas"> 
              
                </label> <br> <br>

                <img src="~assets/img/iconGps2.png" alt="" class="tamanhoIconViagem"> 
                <label class="text-weight-bolder"> 
                    KM rodado:
                </label>
                <label v-html="kmRodado"> 
                  
                </label>

                
            </div>
        </div>

        <div class="row text-center">
            <div class="col-12">
                <q-btn label="Oficinas" class="btn-Acoes btn-blue" to="/oficinas"/>
            </div>
            <div class="col-12">
                <q-btn label="Troca de Óleo" class="btn-Acoes btn-green" @click="alert1 = true"/>
            </div>
            <div class="col-12">
                <q-btn label="Troca de Rodas" class="btn-Acoes btn-blue" @click="alert2 = true"/>
            </div>
            <div class="col-12">
                <q-btn label="KM Rodados" class="btn-Acoes btn-green" @click="alert3 = true"/>
            </div>
        </div>


            <!-- Troca de Óleo -->
            <q-dialog v-model="alert1">
                 <q-card>
                    <q-card-section>
                    <div class="text-h6">Atualizar Troca de Óleo</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                    <div class="q-pa-md q-gutter-sm">
                        <input type="text" v-model="dataOleo">
                    </div>
                    </q-card-section>

                    <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>


            <!-- Troca de Rodas -->
            <q-dialog v-model="alert2">
                 <q-card>
                    <q-card-section>
                    <div class="text-h6">Atualizar Troca de Rodas</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                    <div class="q-pa-md q-gutter-sm">
                        <input type="text" v-model="dataRodas">
                    </div>
                    </q-card-section>

                    <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>


            <!-- Troca de KM -->
            <q-dialog v-model="alert3">
                 <q-card>
                    <q-card-section>
                    <div class="text-h6">Atualizar Km Rodado</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                    <div class="q-pa-md q-gutter-sm">
                        <input type="text" v-model="kmRodado">
                    </div>
                    </q-card-section>

                    <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

        


         <!-- Espaço para o final de página -->
        <div class="row q-mt-lg">
            <div class="col-12 q-mt-lg">
                <div class="q-mt-lg"></div>
            </div>
        </div>


    </q-page>
</template>

<script>


export default {
    name: 'PageCaminhao',

    methods: {
    showNotif(){
      this.$q.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })
    },

    triggerWarning () {
      this.$q.notify({
        type: 'warning',
        message: `Ei! Está na hora de trocar o óleo em!`
      })
    },
  },

  data () {
    return {
      dataOleo: "20/06/2020",
      dataRodas: "23/11/2022",
      kmRodado: "158.048 km",
      alert1: false,
      alert2: false,
      alert3: false,
      confirm: false,
      prompt: false,
    
      editor: 'Data',
      address: ''
    }
  }

}
</script>

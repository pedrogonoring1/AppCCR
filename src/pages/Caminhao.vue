<template>
    <q-page>

        <!-- Painel do Caminhão -->
        <div class="row paddingPanel q-mt-lg">
            <div class="col-12 userInfo">
                <label class="text-weight-bolder"> 
                    STATUS CAMINHÃO
                </label> <br> <br>

                <img src="~assets/img/iconGasoline.png" alt="" class="tamanhoIconViagem">
                <label class="text-weight-bolder"> 
                    Trocar Óleo em: 
                </label>
                <label> 
                    20/06/2021.
                </label> <br> <br>

                <img src="~assets/img/iconTire.png" alt="" class="tamanhoIconViagem"> 
                <label class="text-weight-bolder"> 
                    Trocar Rodas em  :
                </label>
                <label> 
                    23/11/2022.
                </label> <br> <br>

                <img src="~assets/img/iconGps2.png" alt="" class="tamanhoIconViagem"> 
                <label class="text-weight-bolder"> 
                    KM rodado:
                </label>
                <label> 
                    158.048 km.
                </label>

                
            </div>
        </div>

        <div class="row text-center">
            <div class="col-12">
                <q-btn label="Oficinas" class="btn-Acoes btn-blue" to="/oficinas"/>
            </div>
            <div class="col-12">
                <q-btn label="Troca de Óleo" class="btn-Acoes btn-green"/>
            </div>
            <div class="col-12">
                <q-btn label="Troca de Rodas" class="btn-Acoes btn-blue"/>
            </div>
            <div class="col-12">
                <q-btn label="KM Rodados" class="btn-Acoes btn-green"/>
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



const dataOleo = "20/06/2021";
const dataRodas = "23/11/2022";
const kmRodado = "158.048 km";

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
  }

}
</script>

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
                    15/05/2021.
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
                <q-btn label="Troca de Óleo" class="btn-Acoes btn-blue"/>
            </div>
            <div class="col-12">
                <q-btn label="Troca de Rodas" class="btn-Acoes btn-blue"/>
            </div>
            <div class="col-12">
                <q-btn label="KM Rodados" class="btn-Acoes btn-blue"/>
            </div>
        </div>




    </q-page>
</template>

<script>
export default {
    name: 'PageCaminhao',
}
</script>

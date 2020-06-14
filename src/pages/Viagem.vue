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
                <label> 
                    São Paulo, SP.
                </label> <br> <br>

                <img src="~assets/img/iconPin.png" alt="" class="tamanhoIconViagem"> 
                <label class="text-weight-bolder"> 
                    Destino:
                </label>
                <label> 
                    Rio de Janeiro, Rj.
                </label>
            </div>
        </div>

        <div class="row text-center">
            <div class="col-12">
                <q-btn label="Adicionar Viagem" class="btn-Acoes btn-green"/>
            </div>
            <div class="col-12">
                <q-btn label="Pontos Paradas" class="btn-Acoes btn-blue" to="/paradasproximas"/>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'PageViagem'
}
</script>

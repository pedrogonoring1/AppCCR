<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-lg">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg"> PARADAS PRÓXIMAS </label>
        </div>
    </div>  


    <!-- Card para filtrar local de parada -->
    <div class="row text-center q-pr-sm">
        <div class="col-4">
            <q-img
                src="~assets/img/hotel.png"
                spinner-color="white"
                style="height: 60px; max-width: 60px"
                class="q-mb-sm"
            /> <br>
            <label for="">Hoteis</label>
            
        </div>
        <div class="col-4">
            <q-img
                src="~assets/img/iconFork.png"
                spinner-color="white"
                style="height: 60px; max-width: 60px"
                class="q-mb-sm"
            /> <br>
            <label for="">Comida</label>
        </div>
        <div class="col-4">
            <q-img
                src="~assets/img/iconConfig.png"
                spinner-color="white"
                style="height: 60px; max-width: 60px"
                class="q-mb-sm"
            /> <br>
            <label class="q-mb-lg">Oficinas</label>
        </div>
    </div>


    <!-- Button avaliar -->
    <div class="row text-center q-mt-lg q-mb-lg">
        <div class="col-12">
            <br>
            <q-btn label="Avalie um local" class="btn-Acoes btn-blue"/>
        </div>
    </div>


    <!-- Painel de Pontos próximos do motorista -->
    <div class="row paddingPanel">
        
        <div class="col-12 userInfo text-subtitle1">
            <label class="text-weight-bolder"> 
                Posto Point Brasil
            </label> <br>
            
            <label> 15 km de você. </label>

            <div class="text-right">
                <label> 786 curtidas </label>
                <q-img
                src="~assets/img/iconLike.png"
                spinner-color="white"
                style="height: 30px; max-width: 30px"
                class="q-mb-sm"
            />
            </div>
        </div>



    </div>







  </q-page>
</template>

<script>

export default {
  name: 'PageParadasProximas'
}
</script>

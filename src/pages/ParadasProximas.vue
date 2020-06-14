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
            <br>
        </div>
    </div>


    <div class="row">
        
    </div>




    

  
    


    



  </q-page>
</template>

<script>

export default {
  name: 'PageParadasProximas'
}
</script>

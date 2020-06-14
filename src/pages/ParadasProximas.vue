<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-lg q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg"> PARADAS PRÓXIMAS </label>
        </div>
    </div>  


    <!-- Card para filtrar local de parada -->
    <div class="row text-center q-pr-sm q-mt-sm">
        <div class="col-4">
            <q-img
                src="~assets/img/hotel.png"
                spinner-color="white"
                style="height: 45px; max-width: 45px"
                class="q-mb-sm"
            /> <br>
            <label for="">Hoteis</label>
            
        </div>
        <div class="col-4">
            <q-img
                src="~assets/img/iconFork.png"
                spinner-color="white"
                style="height: 45px; max-width: 45px"
                class="q-mb-sm"
            /> <br>
            <label for="">Comida</label>
        </div>
        <div class="col-4">
            <q-img
                src="~assets/img/iconConfig.png"
                spinner-color="white"
                style="height: 45px; max-width: 45px"
                class="q-mb-sm"
            /> <br>
            <label class="q-mb-lg">Oficinas</label>
        </div>
    </div>


    <!-- Button avaliar -->
    <div class="row text-center q-mt-lg">
        <div class="col-12">
            <br>
            <q-btn label="Avalie um local" class="btn-Acoes btn-blue"/>
        </div>
    </div>



    <!-- Cards Pontos Proximos -->

    <div class="row text-center">
        <div class="col-12 q-mt-lg">
            <label class="text-subtitle1 text-weight-bolder">LOCAIS PRÓXIMOS DE VOCÊ</label>
        </div>
    </div>


    <!-- Cards -->

    <div class="q-pa-lg row items-start q-gutter-md q-pl-md">

    <q-card class="my-card col">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Parada Bom Prato
          </div>
          <div class="col-auto text-primary text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            150 Km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="23px" />
      </q-card-section>

      </q-card>
    </div>


    <div class="q-pa-lg row items-start q-gutter-md q-pl-md">

    <q-card class="my-card col">
      <q-img src="https://i0.wp.com/www.transamerica.com.br/blog/wp-content/uploads/2018/07/Esplanada-1.jpg?resize=870%2C576&ssl=1" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Hotel Sono Bom
          </div>
          <div class="col-auto text-primary text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            176 Km
          </div>
        </div>

        <q-rating v-model="starsTest" :max="5" size="23px" />
      </q-card-section>

      </q-card>
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

export default {
  name: 'PageParadasProximas',
  data () {
    return {
      stars: 4,
      starsTest: 5,
    }
  }
}
</script>

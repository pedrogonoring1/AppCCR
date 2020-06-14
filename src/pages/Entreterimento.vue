<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-lg q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg"> ENTRETERIMENTO </label>
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
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">Estradas Seguras</div>
                    <div class="text-caption text-grey">
                        Com o apoio das tecnologias, as estradas cada vez mais estão seguras.
                    </div>
                </q-card-section>

                <q-card-section class="col-7 flex flex-center">
                <q-img
                    class="rounded-borders"
                    src="https://cdn.quasar.dev/img/parallax2.jpg"/>
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat color="primary">
                Ler agora
                </q-btn> 
                <q-btn flat round color="primary" icon="share"/>
            </q-card-actions>
        </q-card>
    </div>



    <!-- Noticia 2 -->
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">Social Truck</div>
                    <div class="text-caption text-grey">
                        10 fotos mais curtidas do Social Truck.
                    </div>
                </q-card-section>

                <q-card-section class="col-7 flex flex-center">
                <q-img
                    class="rounded-borders"
                    src="https://cdn.quasar.dev/img/parallax1.jpg"
                    style="width: 150px"/>
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat color="primary">
                Ler agora
                </q-btn> 
                <q-btn flat round color="primary" icon="share"/>
            </q-card-actions>
        </q-card>
    </div>


    <!-- Noticia 3 -->
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">Corona Vírus</div>
                    <div class="text-caption text-grey">
                        Veja algumas dicas que ajudará a previnir contra COVID-19.
                    </div>
                </q-card-section>

                <q-card-section class="col-7 flex flex-center">
                <q-img
                    class="rounded-borders"
                    src="https://lh3.googleusercontent.com/proxy/yhl1UnOVY--VIwCwMygHTxqpe4DiUbJHFoMV18BqUtqT-IwUX8aCbhnDl-TPHE0WUlfUi2ylgEHtl1WFpK1Jq2XGOrJV2roP6CQxcf9HS1Omq2Ft"
                    style="width: 150px"/>
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat color="primary">
                Ler agora
                </q-btn> 
                <q-btn flat round color="primary" icon="share"/>
            </q-card-actions>
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
  name: 'PageEntreterimento',
  data () {
    return {
      stars: 4,
      starsTest: 5,
    }
  }
}
</script>

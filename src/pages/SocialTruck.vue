<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-sm q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg"> SOCIAL TRUNCK </label>
        </div>
    </div>  



<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
        <q-item>
            <q-item-section avatar>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
            </q-item-section>

            <q-item-section>
                <q-item-label style="font-size: 16px">Sabrina Dias</q-item-label>
                <q-item-label caption>Rodovia 101</q-item-label>
            </q-item-section>
        </q-item>

        <img src="https://cdn.quasar.dev/img/parallax2.jpg" class="q-mb-sm">

        <!-- Curtidas -->
        <q-item>
            <div class="col-12">
             <q-img
                src="~assets/img/iconLike.png"
                spinner-color="white"
                style="height: 20px; max-width: 20px"
                class="q-mb-xs"/>
                <label class="text-weight-bolder q-ml-sm " style="font-size: 16px">158 Curtidas</label>

                <!-- Descrição Post -->
                <div class="col-12 q-mt-xs q-ml-sm q-mr-sm q-mb-sm text-justify">
                <label class="" style="font-size: 15px">
                    Fazer algumas paradas é muito bom! Olha a foto massa que tirei da ponte 101.
                </label>
                </div>
            
            </div>
        </q-item>

        
     

    </q-card>
</div>






  </q-page>
</template>

<script>

export default {
  name: 'PageSocialTrunck',

}
</script>

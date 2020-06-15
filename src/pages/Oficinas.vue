<template>
    <q-page>

        <!-- Title -->
        <div class="row">
            <div class="col-12 q-pt-lg q-mb-md q-mt-sm">
                <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg"> OFICINAS PRÓXIMAS </label>
            </div>
        </div>  


        <!-- Cards -->

        <div class="q-pa-lg row items-start q-gutter-md q-pl-md">

        <q-card class="my-card col">
        <q-img src="https://casadoalinhador.com/images/bl/diferenca-entre-auto-center-e-oficina-mecanica-3.jpg" />

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
                Oficina 2 Irmãos
            </div>
            <div class="col-auto text-primary text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" />
                30 Km
            </div>
            </div>

            <q-rating v-model="stars" :max="5" size="23px" />
        </q-card-section>

        </q-card>
        </div>


        <div class="q-pa-lg row items-start q-gutter-md q-pl-md">

        <q-card class="my-card col">
        <q-img src="https://fotos-estradao.estadao.com.br/wp-content/uploads/2017/12/28122957/volvo-Argentina-1024x683.jpg" />

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
                Center Trunck
            </div>
            <div class="col-auto text-primary text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" />
                48 Km
            </div>
            </div>

            <q-rating v-model="starsTest" :max="5" size="23px" />
        </q-card-section>

        </q-card>
        </div>




        <div class="q-pa-lg row items-start q-gutter-md q-pl-md">

        <q-card class="my-card col">
        <q-img src="https://chiptronic.com.br/blog/wp-content/uploads/2016/10/Voc%C3%AA-sabe-o-que-deve-ter-em-uma-oficina-de-ve%C3%ADculos-pesados.jpg" />

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
                Auto Silva
            </div>
            <div class="col-auto text-primary text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" />
                45 Km
            </div>
            </div>

            <q-rating v-model="starsTest2" :max="5" size="23px" />
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
    name: 'PageOficinas',
    data () {
        return {
            stars: 4,
            starsTest: 5,
            starsTest2: 3,
        }
    }
}
</script>

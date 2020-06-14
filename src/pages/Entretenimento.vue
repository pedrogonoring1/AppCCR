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
                <q-btn flat color="primary" @click="dialog3 = true">
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
                <q-btn flat color="primary" @click="dialog2 = true">
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
                    <div class="text-h5 q-mt-sm q-mb-xs">{{ posts.post1.title }}</div>
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
                <q-btn flat color="primary" @click="dialog = true">
                Ler agora
                </q-btn> 
                <q-btn flat round color="primary" icon="share"/>
            </q-card-actions>
        </q-card>
    </div>



    <!-- Dialogo / Modal -->

    <!-- 1º Modal -->
    <div class="q-pa-md q-gutter-sm">

        <q-dialog
        v-model="dialog3"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
        >
        <q-card class="bg-white text-dark">
            <q-bar>
            <q-space />

            <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
            </q-bar>

            <q-card-section>
            <div class="text-h4 q-mb-md">{{ posts.post3.title }}</div>
            <q-img
                    class="rounded-borders"
                    src="https://cdn.quasar.dev/img/parallax2.jpg"
                    style="width: 328px"/>
            </q-card-section>

            <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
            </q-card-section>
        </q-card>
        </q-dialog>
    </div>


    <!-- 2º Modal -->
    <div class="q-pa-md q-gutter-sm">

        <q-dialog
        v-model="dialog2"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
        >
        <q-card class="bg-white text-dark">
            <q-bar>
            <q-space />

            <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
            </q-bar>

            <q-card-section>
            <div class="text-h4 q-mb-md">{{ posts.post2.title }}</div>
            <q-img
                    class="rounded-borders"
                    src="https://cdn.quasar.dev/img/parallax1.jpg"
                    style="width: 328px"/>
            </q-card-section>

            <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
            </q-card-section>
        </q-card>
        </q-dialog>
    </div>



    <!-- 3º Modal -->
    <div class="q-pa-md q-gutter-sm">

        <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
        >
        <q-card class="bg-white text-dark">
            <q-bar>
            <q-space />

            <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
            </q-bar>

            <q-card-section>
            <div class="text-h4 q-mb-md">{{ posts.post1.title }}</div>
            <q-img
                    class="rounded-borders"
                    src="https://lh3.googleusercontent.com/proxy/yhl1UnOVY--VIwCwMygHTxqpe4DiUbJHFoMV18BqUtqT-IwUX8aCbhnDl-TPHE0WUlfUi2ylgEHtl1WFpK1Jq2XGOrJV2roP6CQxcf9HS1Omq2Ft"
                    style="width: 328px"/>
            </q-card-section>

            <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
            </q-card-section>
        </q-card>
        </q-dialog>
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

//Post
const post = {
    post1: {title: "Corona Virus", text: "Veja algumas dicas que ajudará a previnir contra COVID-19.", img: "https://lh3.googleusercontent.com/proxy/yhl1UnOVY--VIwCwMygHTxqpe4DiUbJHFoMV18BqUtqT-IwUX8aCbhnDl-TPHE0WUlfUi2ylgEHtl1WFpK1Jq2XGOrJV2roP6CQxcf9HS1Omq2Ft"},
    post2: {title: "Social Truck", text: "10 fotos mais curtidas do Social Truck.", img: "https://cdn.quasar.dev/img/parallax1.jpg"},
    post3: {title: "Estradas Seguras", text: "Com o apoio das tecnologias, as estradas cada vez mais estão seguras..", img: "https://cdn.quasar.dev/img/parallax2.jpg"}
}

//Visu

export default {
  name: 'PageParadasProximas',
  data () {
    return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        maximizedToggle: true,
        stars: 4,
        starsTest: 5,
        posts: post
    }
  }
}
</script>

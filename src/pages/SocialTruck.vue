<template>
  <q-page>
    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-sm q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg">SOCIAL TRUCK</label>
        </div>
    </div>  

    <div class="row q-ml-md">
        <div class="col-12">
             <q-btn color="white" text-color="black" label="Publicar" />
              <q-btn color="white" text-color="black" label="Perfil" />
        </div>
    </div>

    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" v-for="(socialTruck, index) in socialTrucks" :key="index">
            <q-item>
                <q-item-section avatar>
                    <q-avatar>
                        <img :src="socialTruck['autor']['avatar_url']"/>
                    </q-avatar>
                </q-item-section>

                <q-item-section>
                    <q-item-label style="font-size: 16px">{{ socialTruck['autor']['nome'] }}</q-item-label>
                    <q-item-label caption>{{ socialTruck['local'] }}</q-item-label>
                </q-item-section>
            </q-item>

            <img :src="socialTruck['social']['imagem_url']" class="q-mb-sm">

            <!-- Curtidas -->
            <q-item>
                <div class="col-12">
                <q-img src="~assets/img/iconLike.png" spinner-color="white" style="height: 20px; max-width: 20px" class="q-mb-xs"/>
                    <label class="text-weight-bolder q-ml-sm " style="font-size: 16px">{{ socialTruck['social']['likes'] }}</label>

                    <!-- Descrição Post -->
                    <div class="col-12 q-mt-xs q-ml-sm q-mr-sm q-mb-sm text-justify">
                        <label style="font-size: 15px">{{ socialTruck['social']['content'] }}</label>
                    </div>
                </div>
            </q-item>

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

<style lang="scss" scoped>
.my-card { }
</style>

<script>
import { LocalStorage } from "quasar";

LocalStorage.clear();

export default {
    name: 'PageSocialTruck',

    data () {
        return {
            socialTrucks: LocalStorage.getItem("socialTrucks")
        }
    }
}
</script>
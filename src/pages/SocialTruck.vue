<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-sm q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg"> SOCIAL TRUCK </label>
        </div>
    </div>  


    <div class="row q-ml-md">
        <div class="col-12">
             <q-btn color="white" text-color="black" label="Publicar" />
              <q-btn color="white" text-color="black" label="Perfil" />
        </div>
    </div>


    <div id="contents" class="q-pa-md row items-start q-gutter-md"></div>

    <!-- Espaço para o final de página -->
    <div class="row q-mt-lg">
        <div class="col-12 q-mt-lg">
            <div class="q-mt-lg"></div>
        </div>
    </div>


  </q-page>
</template>

<script>
import SocialTruck from "../socialtruck.js";

/*const socialtruck = new SocialTruck();

socialtruck.addSocialTruck({
    autor: {
        nome: "Sabrina Dias",
        avatar_url: "https://cdn.quasar.dev/img/avatar2.jpg"
    },
    local: "Rodovia 101",
    social: {
        imagem_url: "https://cdn.quasar.dev/img/parallax2.jpg",
        content: "Fazer algumas paradas é muito bom! Olha a foto massa que tirei da ponte 101.",
        likes: 158
    }
});*/

export default {
    name: 'PageSocialTruck',
}
</script>

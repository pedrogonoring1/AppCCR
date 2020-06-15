<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Header -->
    <q-header elevated class="bg-white">
        <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" class="text-dark" />
            <router-link to="/" style="text-decoration: none;">
                <q-toolbar-title class="text-dark">Nas Estradas</q-toolbar-title>
            </router-link>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
        <q-list>
            <q-item-label header class="text-grey-8">Menu</q-item-label>
            <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>

    <!-- Menu Footer -->
    <div class="row items-center text-center fixed-bottom footer">
        <router-link tag="div" class="col-4 item item-link" to="/" >
            <img src="~assets/img/iconUser.png" alt="" class="iconFooter responsive">
        </router-link>
        <router-link tag="div" class="col-4 item item-link" to="/caminhao">
        <a @click="triggerWarning"> 
            <img src="~assets/img/iconTruck.png" alt="" class="iconFooter2 responsive">
        </a>
        </router-link>
        <router-link tag="div" class="col-4 item item-link" to="/viagem">
            <img src="~assets/img/iconMap.png" alt="" class="iconFooter2 responsive">
        </router-link>
    </div>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink';

export default {
    name: 'MainLayout',

    components: {
        EssentialLink
    },

    methods: {
    showNotif(){
      this.$q.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })
    },

    triggerWarning () {
      this.$q.notify({
        type: 'warning',
        message: `Ei! Está na hora de trocar o óleo em!`
      })
    },
  },

    data () {
        return {
            leftDrawerOpen: false,
            essentialLinks: [
                {
                    title: 'Pontos de Paradas',
                    caption: 'Locais de parada',
                    icon: 'school',
                    link: 'https://quasar.dev'
                },
                {
                    title: 'Social Truck',
                    caption: 'Rede social do caminhoneiro',
                    icon: 'code',
                    link: '/socialtruck'
                },
                {
                    title: 'Entretenimento',
                    caption: 'Leia algumas boas notícias',
                    icon: 'chat',
                    link: 'https://chat.quasar.dev'
                },
                {
                    title: 'Oficinas',
                    caption: 'Oficinas próximas de você',
                    icon: 'record_voice_over',
                    link: 'https://forum.quasar.dev'
                }
            ]
        }
    }
}
</script>

<template>
  <q-page>

    <!-- Title -->
    <div class="row">
        <div class="col-12 q-pt-lg q-mb-lg q-mt-sm">
            <label class="text-subtitle1 text-weight-bolder q-ml-lg q-mt-lg"> </label>
            
        </div>
    </div> 

    <div class="row">
        <div class="col-">
            <q-img
                src="~assets/img/iconSport.png"
                spinner-color="white"
                style="height: 43px; max-width: 43px; margin-bottom: 8px;"
                class="q-mb-sm"
            />
        </div>
    </div> 


  </q-page>
</template>

<script>

import { LocalStorage } from "quasar";


// postVisu = { id: "0",
//             title: "Title",
//             texto: "x",
//             img_url: "x",
// };

// posts = [];


// if(LocalStorage.getItem("postEntretenimento") === null){
    
//   const  postVisu = {
//             id: 1,
//             title: "Estradas Seguras",
//             texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos praesentium dolor temporibus sint exercitationem numquam aperiam consectetur! Voluptate cum provident soluta quia ratione rem quod vel consequatur praesentium eius.",
//             img_url: "https://cdn.quasar.dev/img/parallax2.jpg",
//     }

//     console.log(postVisu);
// }


// const postsSet = [
//         { post: { id: "2", title: "Estradas Seguras", texto: "Lorem ipsum isicing elit. Deserunt eos praes", img_url: "https://cdn.quasar.dev/img/parallax2.jpg"}},
//         { post: { id: "3", title: "Estradas ", texto: "Lorem ipsum isicing elit. Deserunt eos praes", img_url: "https://cdn.quasar.dev/img/parallax2.jpg"}},
//         { post: { id: "4", title: "Seguras", texto: "Lorem ipsum isicing elit. Deserunt eos praes", img_url: "https://cdn.quasar.dev/img/parallax2.jpg"}},
//     ]
    
//     LocalStorage.set("posts", postsSet);



export default {
  name: 'PageEntretenimento',
  data () {
    return {
      id: 1

    }
  }
}

</script>

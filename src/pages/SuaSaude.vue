<template>
  <q-page>

    <!-- Cards Pontos Proximos -->
    <div class="row paddingPanel q-mt-lg">
        <div class="col-12  userInfo">
            <label class="text-subtitle1 text-weight-bolder">SUAS INFORMAÇÕES</label> <br>
            <label class="text-subtitle1 text-weight-bolder">Peso:</label> <label class="text-subtitle1 q-mr-md"> 78kg </label> <a href="">Atualizar</a> <br>
            <label class="text-subtitle1 text-weight-bolder">IMC:</label> <label class="text-subtitle1"> Está Excelente </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Humor:</label> <label class="text-subtitle1"> Feliz </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Água:</label> <label class="text-subtitle1"> Está bebendo regularmente. </label> <br>
            <label class="text-subtitle1 text-weight-bolder">Noites de Sono:</label> <label class="text-subtitle1"> Excelente. </label> <br>
        </div>
    </div>





    <div class="row text-center q-mt-xs">
        <div class="col-12 q-mt-lg">
            <label class="text-subtitle1 text-weight-bolder">DICAS ESPECIAIS</label>
        </div>
    </div>




    <!-- Cards Noticias de Saúde-->
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">Exercicio Fisico</div>
                    <div class="text-caption text-grey">
                        10 dicas de como exercitar no caminhão.
                    </div>
                </q-card-section>

                <q-card-section class="col-7 flex flex-center">
                <q-img
                    class="rounded-borders"
                    src="https://i0.wp.com/trucao.com.br/wp-content/uploads/2019/09/quando_dia_do_caminhoneiro.jpg?fit=1920%2C1080&ssl=1"
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



    <!-- Noticia 2 -->
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">Exames de Rotina</div>
                    <div class="text-caption text-grey">
                        Dicas de como se organizar para exames de rotina.
                    </div>
                </q-card-section>

                <q-card-section class="col-7 flex flex-center">
                <q-img
                    class="rounded-borders"
                    src="https://uploads.metropoles.com/wp-content/uploads/2019/01/24092950/exame-de-sangue.jpg"
                    style="width: 150px"/>
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
                <q-btn flat color="primary" >
                Ler agora
                </q-btn> 
                <q-btn flat round color="primary" icon="share"/>
            </q-card-actions>
        </q-card>
    </div>



    <!-- Modal -->






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
    name: 'PageSuaSaude'
}
</script>

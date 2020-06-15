import { LocalStorage } from "quasar";

const LocalStorageSocialTrucks = LocalStorage.getItem("socialTrucks");
const LocalStorageMotorista = LocalStorage.getItem("motorista");
const LocalStorageMotoristas = LocalStorage.getItem("motoristas");
const LocalStorageNoticias = LocalStorage.getItem("noticias");
const LocalStorageDicas = LocalStorage.getItem("dicas");

if (!LocalStorageMotorista) {
    const motorista = {
        pessoais: {
            nome: "Gabriel Lobo",
            cidade: "Guanambi, BA",
            avatar_url: "https://cdn.quasar.dev/img/avatar4.jpg",
        },
        level: 15,
        dias_ativo: 155
    };
    LocalStorage.set("motorista", motorista);
}

if (!LocalStorageMotoristas) {
    const motoristas = [
        { pessoais: { nome: "Sabrina Dias", cidade: "Guanambi, BA", avatar_url: "https://cdn.quasar.dev/img/avatar2.jpg", }, level: 9, dias_ativo: 155 },
        { pessoais: { nome: "João Pedro", cidade: "Guanambi, BA", avatar_url: "https://cdn.quasar.dev/img/avatar1.jpg", }, level: 16, dias_ativo: 155 },
        { pessoais: { nome: "Fernanda Rodrigues", cidade: "Guanambi, BA", avatar_url: "https://cdn.quasar.dev/img/avatar3.jpg", }, level: 12, dias_ativo: 155 },
    ]
    LocalStorage.set("motoristas", motoristas);
}

if (!LocalStorageSocialTrucks) {
    const socialTrucks = [
        {
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
        },
        {
            autor: {
                nome: "Rodrigo Santos",
                avatar_url: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
            },
            local: "Rodovia Avidos Cardoso",
            social: {
                imagem_url: "https://img.elo7.com.br/product/zoom/224F2DF/painel-caminhao-g-frete-gratis-lona.jpg",
                content: "O sucesso existe, mas você só vai encontrar ele trabalhando. #VamoQVamo",
                likes: 1.786
            }
        },
        {
            autor: {
                nome: "Marta Vieira",
                avatar_url: "https://pbs.twimg.com/profile_images/874196000747003905/N8kxcjRw.jpg"
            },
            local: "BR 202",
            social: {
                imagem_url: "https://conteudo.imguol.com.br/c/entretenimento/12/2018/05/30/mulheres-caminhoneiras-1527716926017_v2_450x337.jpg",
                content: "#MulherNoVolanteSim.",
                likes: 20.458
            }
        },
        {
            autor: {
                nome: "Denilton Cargas",
                avatar_url: "https://pbs.twimg.com/profile_images/1165754931791314945/FRdmYcK0.jpg"
            },
            local: "BR 202",
            social: {
                imagem_url: "https://canal4.tv.br/wp-content/uploads/2019/09/des453.jpg",
                content: "Viagem realizada com segurança total 🙏.",
                likes: 789
            }
        }
    ];
    LocalStorage.set("socialTrucks", socialTrucks);
}

if (!LocalStorageNoticias) {
    const noticias = [
        {
            title: "Estradas Seguras",
            caption: "Com o apoio das tecnologias, as estradas cada vez mais estão seguras.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.",
            imagem_url: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
            title: "Social Truck.",
            caption: "10 fotos mais curtidas do Social Truck.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.",
            imagem_url: "https://cdn.quasar.dev/img/parallax1.jpg"
        },
        {
            title: "COVID-19",
            caption: "Veja algumas dicas que ajudará a previnir contra COVID-19.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.",
            imagem_url: "https://static.poder360.com.br/2020/03/23312-868x644.png"
        }
    ]
    LocalStorage.set("noticias", noticias);
}

if (!LocalStorageDicas) {
    const dicas = [
        {
            title: "Exercicio Fisico",
            caption: "10 dicas de como exercitar no caminhão.",
            content: "Quem vive na estrada, sabe como é complicado manter a forma. Porém, mesmo em trânsito constante, é fundamental encontrar maneiras de cuidar da saúde do caminhoneiro, mesmo que para isso seja necessário fazer alguns improvisos.\nSe você trabalha ao volante de um caminhão, certamente sabe que nem sempre é possível dormir em hotéis confortáveis, dispondo de estruturas como academias, alimentação saudável etc. Aliás, até mesmo encontrar um hotel, por mais simples que seja, pode ser uma tarefa complicada.",
            imagem_url: "https://i0.wp.com/trucao.com.br/wp-content/uploads/2019/09/quando_dia_do_caminhoneiro.jpg"
        },
        {
            title: "Exames de Rotina",
            caption: "Dicas de como se organizar para exames de rotina.",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.",
            imagem_url: "https://uploads.metropoles.com/wp-content/uploads/2019/01/24092950/exame-de-sangue.jpg"
        }
    ]
    LocalStorage.set("dicas", dicas);
}
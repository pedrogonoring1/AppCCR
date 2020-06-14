import { LocalStorage } from "quasar";

const LocalStorageSocialTrucks = LocalStorage.getItem("socialTrucks");
const LocalStorageMotorista = LocalStorage.getItem("motorista");
const LocalStorageMotoristas = LocalStorage.getItem("motoristas");

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
                nome: "Sabrina Dias",
                avatar_url: "https://cdn.quasar.dev/img/avatar2.jpg"
            },
            local: "Rodovia 101",
            social: {
                imagem_url: "https://cdn.quasar.dev/img/parallax2.jpg",
                content: "Fazer algumas paradas é muito bom! Olha a foto massa que tirei da ponte 101.",
                likes: 158
            }
        }
    ];
    LocalStorage.set("socialTrucks", socialTrucks);
}
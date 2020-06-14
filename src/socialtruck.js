export default class SocialTruck {
    constructor() {
        this.socialtruck = [];

        this.contents = document.getElementById("contents");
    }

    addSocialTruck(social) {
        this.socialtruck.push(social);

        this.renderSocialTruck();
    }

    renderSocialTruck() {
        this.contents.innerHTML = "";

        this.socialtruck.forEach(social => {
            let card = document.createElement("q-card");
            card.setAttribute("class", "my-card");

            let firstItem = document.createElement("q-item");

            let firstItemSection = document.createElement("q-item-section");
            firstItemSection.setAttribute("avatar", "");

            let avatar = document.createElement("q-avatar");
            let avatarimg = document.createElement("img");
            avatarimg.setAttribute("src", "https://cdn.quasar.dev/img/avatar4.jpg");
            avatar.appendChild(avatarimg);
            firstItemSection.appendChild(avatar);

            let secondItemSection = document.createElement("q-item-section");
            let firstItemLabel = document.createElement("q-item-label");
            firstItemLabel.style.fontSize = 16;
            firstItemLabel.appendChild(document.createTextNode("Sabrina Dias"));
            let secondItemLabel = document.createElement("q-item-label");
            secondItemLabel.setAttribute("caption", "");
            secondItemLabel.appendChild(document.createTextNode("Rodovia 101"));
            secondItemSection.appendChild(firstItemLabel);
            secondItemSection.appendChild(secondItemLabel);
            firstItemSection.appendChild(secondItemSection);

            firstItem.appendChild(firstItemSection);
            firstItem.appendChild(secondItemSection);

            // Imagem
            let foto = document.createElement("img");
            foto.setAttribute("src", "https://cdn.quasar.dev/img/parallax2.jpg");
            foto.setAttribute("class", "q-mb-sm");


            // Curtidas
            let secondItem = document.createElement("q-item");
            let divcurtidas = document.createElement("div");
            divcurtidas.setAttribute("class", "col-12");

            let imgcurtidas = document.createElement("q-img");
            imgcurtidas.setAttribute("src", "~assets/img/iconLike.png");
            imgcurtidas.setAttribute("spinner-color", "white");
            imgcurtidas.style.height = 20;
            imgcurtidas.style.maxWidth = 20;
            imgcurtidas.setAttribute("class", "q-mb-xs");

            let label = document.createElement("label");
            label.setAttribute("class", "text-weight-bolder q-ml-sm");
            label.style.fontSize = 16;
            label.appendChild(document.createTextNode("158 curtidas"));

            let divdescricao = document.createElement("div");
            divdescricao.setAttribute("class", "col-12 q-mt-xs q-ml-sm q-mr-sm q-mb-sm text-justify");
            let labeldescricao = document.createElement("label");
            labeldescricao.style.fontSize = 15;
            labeldescricao.appendChild(document.createTextNode("Fazer algumas paradas é muito bom! Olha a foto massa que tirei da ponte 101."));
            divdescricao.appendChild(labeldescricao);

            divcurtidas.appendChild(imgcurtidas);
            divcurtidas.appendChild(label);
            divcurtidas.appendChild(divdescricao);
            secondItem.appendChild(divcurtidas);

            card.appendChild(firstItem);
            card.appendChild(foto);
            card.appendChild(secondItem);

            this.contents.appendChild(card);
        });
    }
}
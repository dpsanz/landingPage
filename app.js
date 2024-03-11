const body = document.body

    const banner = () => {
        let div = document.createElement("div");
        div.setAttribute('class', 'banner');
        
        var textoBanner = document.createElement("h1");
        textoBanner.innerText = 'Bem-Vindo ao nosso Portfólio';
    
        div.appendChild(textoBanner);
        body.append(div);
    
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
    
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('.banner h1', { duration: 4000 });
    }
    banner();


    function cards() {

    const nomesIntegrantes = ['Henrique', 'Daniel', 'Eric'];

    let divAreaCards = document.createElement("div");
    divAreaCards.setAttribute('class', 'areaCards');
    divAreaCards.innerText = 'Integrantes (hover)';
    body.append(divAreaCards);

    let divCards = document.createElement("div");
    divCards.setAttribute('class', 'cardsContainer');

    body.append(divCards);

    for (let i = 0; i < 3; i++) {
        let card = document.createElement("div");
        card.setAttribute('class', `card card-${i+1}`);
        card.innerText = nomesIntegrantes[i];
        divCards.append(card);
    }
}

    cards();


    const Habilidades = () => {
        let div = document.createElement("div");
        div.setAttribute('class', 'habilidades');
        
        var textoBanner = document.createElement("h1");
        textoBanner.innerText = 'Todas as nossas Habilidades  ';
    
        div.appendChild(textoBanner);
        body.append(div);
    
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
    
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('.banner h1', { duration: 4000 });
    }
    Habilidades();


    const HabilidadesHenrique = () => {
        let div = document.createElement("div");
        div.setAttribute('class', 'habilidadesHenrique');
        
        var textoBanner = document.createElement("h1");
        textoBanner.innerText = 'As Habilidades do Henrique é : Na área de tecnologia é Front-End, e fora da escola é futebol e jogos online';
    
        div.appendChild(textoBanner);
        body.append(div);
    
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
    
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('.banner h1', { duration: 4000 });
    }
    HabilidadesHenrique();


    const HabilidadesEric = () => {
        let div = document.createElement("div");
        div.setAttribute('class', 'habilidadesEric');

        var textoBanner = document.createElement("h1");
        textoBanner.innerText = 'As Habilidades do Eric é : Na área de tecnologia é Front-End, e fora da escola é jogos online';
    
        div.appendChild(textoBanner);
        body.append(div);
    
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
    
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('.banner h1', { duration: 4000 });
    }
    HabilidadesEric();


    
    const HabilidadesDaniel = () => {
        let div = document.createElement("div");
        div.setAttribute('class', 'habilidadesDaniel');

        var textoBanner = document.createElement("h1");
        textoBanner.innerText = 'As Habilidades do Daniel é : Na área de tecnologia é Front-End, e fora da escola é jogos online';
    
        div.appendChild(textoBanner);
        body.append(div);
    
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
    
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('.banner h1', { duration: 4000 });
    }
    HabilidadesDaniel();

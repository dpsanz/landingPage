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
        sr.reveal('.banner ', { duration: 4000 });
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
    

        const habilidades = () => {
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
        habilidades();


        const habilidadesHenrique = () => {
            let div = document.createElement("div");
            div.setAttribute('class', 'habilidadesHenrique');
            
            var textoBanner = document.createElement("h1");
            textoBanner.innerText = 'Henrique, 17 anos, estuda na FIAP desde 2022. Suas principais habilidades na área escolar é : Front-end. Fora da escola é o futebol, jogos online e musculação';
        
            div.appendChild(textoBanner);
            body.append(div);
        
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'flex-start';
            div.style.padding='15px'
        
            window.sr = ScrollReveal({ reset: true });
            sr.reveal('.banner h1', { duration: 4000 });
        }
        habilidadesHenrique();

        const habilidadesDaniel = () => {
          let div = document.createElement("div");
          div.setAttribute('class', 'habilidadesDaniel');
  
          var textoBanner = document.createElement("h1");
          textoBanner.innerText = 'Daniel, 17 anos, estuda na FIAP desde 2023. Suas principais habilidades na área escolar é : Front-end/Desing. Fora da escola é o futebol, jogos online, xadrez e musculação';
      
          div.appendChild(textoBanner);
          body.append(div);
      
          div.style.display = 'flex';
          div.style.justifyContent = 'flex-start';
          div.style.padding='15px'
      
          window.sr = ScrollReveal({ reset: true });
          sr.reveal('.banner h1', { duration: 4000 });
      }
      habilidadesDaniel();
    
    
        const habilidadesEric = () => {
          let div = document.createElement("div");
          div.setAttribute('class', 'habilidadesHenrique');
          
          var textoBanner = document.createElement("h1");
          textoBanner.innerText = 'Eric, 17 anos, estuda na FIAP desde 2020. Suas principais habilidades na área escolar é : Front-end e Back-end. Fora da escola so atleta de boxe e pratico musculação';
      
          div.appendChild(textoBanner);
          body.append(div);
      
          div.style.display = 'flex';
          div.style.alignItems = 'center';
          div.style.justifyContent = 'flex-start';
          div.style.padding='15px'
      
          window.sr = ScrollReveal({ reset: true });
          sr.reveal('.banner h1', { duration: 4000 });
      }
      habilidadesEric();
    
        const form = () => {
          
          const div = document.createElement("div");
          div.setAttribute('class', 'contato');
        
          
          const textoBanner = document.createElement("h1");
          textoBanner.innerText = 'Entre em contato conosco';
          div.appendChild(textoBanner);
        
          
          div.style.display = 'flex';
          div.style.alignItems = 'center';
          div.style.justifyContent = 'center';
        
          
          document.body.appendChild(div);
        
         
          const form = document.createElement('form');
          form.id = 'contactForm';
          form.style.maxWidth = '400px';
          form.style.margin = '20px auto';
          form.style.fontFamily = 'Arial, sans-serif';
        
          
          function createField(labelText, inputType, inputName, isRequired) {
            const div = document.createElement('div');
            div.style.marginBottom = '10px';
        
            const label = document.createElement('label');
            label.textContent = labelText;
            label.style.display = 'block';
            label.style.fontWeight = 'bold';
            label.style.color = 'white';
        
            const input = document.createElement('input');
            input.type = inputType;
            input.name = inputName;
            input.required = isRequired;
            input.style.width = '100%';
            input.style.padding = '8px';
            input.style.boxSizing = 'border-box';
            input.style.border = '1px solid #ccc';
            input.style.borderRadius = '4px';
            input.placeholder = 'Digite aqui...';
        
            div.appendChild(label);
            div.appendChild(input);
        
            return div;
          }
        
          
          const nameField = createField('Nome:', 'text', 'name', true);
          const emailField = createField('Email:', 'email', 'email', true);
        
          const messageDiv = document.createElement('div');
          messageDiv.style.marginBottom = '10px';
        
          const messageLabel = document.createElement('label');
          messageLabel.textContent = 'Mensagem:';
          messageLabel.style.display = 'block';
          messageLabel.style.fontWeight = 'bold';
        
          const messageTextarea = document.createElement('textarea');
          messageTextarea.name = 'message';
          messageTextarea.rows = '4';
          messageTextarea.required = true;
          messageTextarea.style.width = '100%';
          messageTextarea.style.padding = '8px';
          messageTextarea.style.boxSizing = 'border-box';
          messageTextarea.style.border = '1px solid #ccc';
          messageTextarea.style.borderRadius = '4px';
          messageTextarea.placeholder = 'Digite sua mensagem aqui...';
        
          messageDiv.appendChild(messageLabel);
          messageDiv.appendChild(messageTextarea);
        
          form.appendChild(nameField);
          form.appendChild(emailField);
          form.appendChild(messageDiv);
        
        
          const submitButton = document.createElement('button');
          submitButton.type = 'submit';
          submitButton.textContent = 'Enviar';
          submitButton.style.width = '100%';
          submitButton.style.padding = '10px';
          submitButton.style.backgroundColor = '#007bff';
          submitButton.style.border = 'none';
          submitButton.style.color = 'white';
          submitButton.style.borderRadius = '4px';
          submitButton.style.cursor = 'pointer';
        
         
          submitButton.addEventListener('mouseover', function() {
            submitButton.style.backgroundColor = '#0056b3';
          });
        
          submitButton.addEventListener('mouseout', function() {
            submitButton.style.backgroundColor = '#007bff';
          });
        
          form.appendChild(submitButton);
        
          
          document.body.appendChild(form);
        
          // Adicionando evento de envio do formulário
          form.addEventListener('submit', function(event) {
            event.preventDefault();
        
            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const message = form.elements['message'].value;
        
            setTimeout(function() {
              alert('Obrigado por entrar em contato, ' + name + '! Nós responderemos em breve, no email: ' + email);
              form.reset();
            }, 1000);
          });
        }
        
        
        form();


        function footer() {
          let footer = document.createElement("footer");
          footer.setAttribute("class", "footer");
      
          let container = document.createElement("div");
          container.setAttribute("class", "container");
      
          let footerText = document.createElement("p");
          footerText.setAttribute("class", "footer-text");
          footerText.textContent = "Footer:";
      
          let copyrightText = document.createElement("p");
          copyrightText.setAttribute("class", "copyright");
          copyrightText.innerHTML = "&copy; 2024 Daniel, Eric e Henrique. Todos os direitos não reservados.";
  
          container.appendChild(footerText);
          container.appendChild(copyrightText);
          footer.appendChild(container);
          document.body.appendChild(footer);
      }
      footer();
      
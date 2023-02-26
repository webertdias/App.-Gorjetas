
            const entrada = document.querySelector('#entrada')
            const resultado = document.querySelector('#resultado')

            function cincoPorCento(){
                event.preventDefault();
                const porcentagem = parseFloat(entrada.value) / 100 *5;
                resultado.innerHTML += parseInt(entrada.value) + porcentagem;
            }

            function dezPorCento() {
                event.preventDefault();
                console.log(resultado.innerHTML)
                const porcentagem = (parseInt(entrada.value) / 100) * 10;
                resultado.innerHTML += parseInt(entrada.value) + porcentagem;
               
            }
            function quinzePorCento() {
                event.preventDefault();
                console.log(resultado.innerHTML)
                const porcentagem = (parseInt(entrada.value) / 100) * 15;
                resultado.innerHTML += parseInt(entrada.value) + porcentagem;
               
            }
            function vinteCincoPorCento() {
                event.preventDefault();
                console.log(resultado.innerHTML)
                const porcentagem = (parseInt(entrada.value) / 100) * 25;
                resultado.innerHTML += parseInt(entrada.value) + porcentagem;
               
            }
            function cinquentaPorCento() {
                event.preventDefault();
                console.log(resultado.innerHTML)
                const porcentagem = (parseInt(entrada.value) / 100) * 50;
                resultado.innerHTML += parseInt(entrada.value) + porcentagem;
               
            }
            
            
           
           
           
            
           


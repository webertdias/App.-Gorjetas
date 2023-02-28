
            const entrada = document.querySelector('#entrada')
            const gorjetas = document.querySelector('#gorjetas')
            const pessoas = document.querySelector('#pessoas')
            const dividido = document.querySelector('#dividido')

            function cincoPorCento(){
                event.preventDefault();
                const porcentagem = (parseFloat(entrada.value) * 5) / 100;
                gorjetas.innerHTML += porcentagem;
                dividir();
            }

            function dezPorCento(){
                event.preventDefault();
                const porcentagem = (parseFloat(entrada.value) * 10) / 100;
                gorjetas.innerHTML += porcentagem;
                dividir();
            }

            function quinzePorCento(){
                event.preventDefault();
                const porcentagem = (parseFloat(entrada.value) * 15) / 100;
                gorjetas.innerHTML += porcentagem;
                dividir();
            }
            
            function vinteCincoPorCento(){
                event.preventDefault();
                const porcentagem = (parseFloat(entrada.value) * 25) / 100;
                gorjetas.innerHTML += porcentagem;
                dividir();
            }
            
            function cinquentaPorCento(){
                event.preventDefault();
                const porcentagem = (parseFloat(entrada.value) * 50) / 100;
                gorjetas.innerHTML += porcentagem;
                dividir();
            }


            function dividir(){
                const divisao = parseFloat(entrada.value) / parseFloat(pessoas.value);
                dividido.innerHTML = divisao;
            }

           
            
           
           
           
            
           


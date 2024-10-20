# 🎮 Desafio Bootcamp Santander 2024 - Criando Jogos com Godot

Este código é um classificador de nível de heróis, nele foi utilizada uma biblioteca para geração aleatória de nomes já que nele é possivel fazer um teste gerando múltiplos heróis ao mesmo tempo, abaixo segue uma melhor explicação de sua estrutura e também um passo a passo para como rodar o código em seu computador.

## ⛓ Estrutura do Código

- **faker-js**  
  Importação de biblioteca que está sendo utilizada para a geração de nomes aleatórios dos heróis.

- **verificarNivelEAtualizar(heroi)**  
  Recebe um herói como parâmetro, verifica seu nível baseado em sua experiência e salva o novo nível correspondente.

- **gerarVariosHerois()**  
  Cria vários heróis, com experiência e nomes aleatórios; seu nível corresponde à sua experiência.  
  Dentro desta função, existe outra chamada **gerarHeroi()**, que retorna um herói gerado aleatoriamente.

## 📃 Pré-requisitos Para Rodar o Código

- Necessário **Node.js** instalado em sua máquina.

- Passo a passo:
  
  1. Após ter instalado o Node.js em sua máquina, abra o projeto no Visual Studio Code ou em sua IDE de preferência.
  
  2. Abra o terminal na IDE e digite o seguinte comando para garantir que o faker-js esteja instalado:
     ```bash
     npm install
     ```
  
  3. Após isso, para rodar o código, digite em seu terminal:
     ```bash
     node nivelheroi.js
     ```

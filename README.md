# 🎮 Desafio Bootcamp Santander 2024 - Criando Jogos com Godot

Neste código, foi utilizada uma biblioteca para a geração de nomes aleatórios dos heróis.

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

- Necessário ter a biblioteca **faker.js** instalada no ambiente. Segue um passo a passo:
  
  1. Após ter instalado o Node.js em sua máquina, abra o projeto no Visual Studio Code ou em sua IDE de preferência.
  
  2. Abra o terminal no local onde se encontra o projeto e digite o seguinte comando:
     ```bash
     npm install
     ```
  
  3. Após isso, para rodar o código, digite em seu terminal:
     ```bash
     node nivelheroi.js
     ```

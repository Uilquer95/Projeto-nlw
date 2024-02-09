const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        respostas: [
            "Brasília",
            "Rio de Janeiro",
            "São Paulo"
        ],
        correta: "Brasília"
    },
    {
        pergunta: "Qual é o maior rio do Brasil?",
        respostas: [
            "Rio Amazonas",
            "Rio Paraná",
            "Rio São Francisco"
        ],
        correta: "Rio Amazonas"
    },
    {
        pergunta: "Em que ano o Brasil foi descoberto?",
        respostas: [
            "1500",
            "1492",
            "1550"
        ],
        correta: "1500"
    },
    {
        pergunta: "Quantos estados o Brasil possui?",
        respostas: [
            "26",
            "27",
            "28"
        ],
        correta: "26"
    },
    {
        pergunta: "Qual é o símbolo nacional do Brasil?",
        respostas: [
            "Arara-azul",
            "Jabuti",
            "Mico-leão-dourado"
        ],
        correta: "Arara-azul"
    },
    {
        pergunta: "Qual é a maior cidade do Brasil em população?",
        respostas: [
            "São Paulo",
            "Rio de Janeiro",
            "Belo Horizonte"
        ],
        correta: "São Paulo"
    },
    {
        pergunta: "Qual é a moeda do Brasil?",
        respostas: [
            "Peso",
            "Real",
            "Dólar"
        ],
        correta: "Real"
    },
    {
        pergunta: "Qual é a maior floresta tropical do Brasil?",
        respostas: [
            "Mata Atlântica",
            "Cerrado",
            "Amazônia"
        ],
        correta: "Amazônia"
    },
    {
        pergunta: "Quem foi o primeiro presidente eleito do Brasil?",
        respostas: [
            "Getúlio Vargas",
            "Juscelino Kubitschek",
            "Deodoro da Fonseca"
        ],
        correta: "Deodoro da Fonseca"
    },
    {
        pergunta: "Qual é a maior festa popular do Brasil?",
        respostas: [
            "Carnaval",
            "Festa Junina",
            "Oktoberfest"
        ],
       correta: "Carnaval"
    }
];


    const quiz = document.querySelector('#quiz');
    const template = document.querySelector('template');
    const mostrarTotal = document.querySelector('#acertos span');
    let corretas = new Set();
    let totalDePerguntas = perguntas.length;

    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

    for (const item of perguntas) {
      const quizItem = template.content.cloneNode(true);
      quizItem.querySelector('h3').textContent = item.pergunta;

      for (let resposta of item.respostas) {
        const dt = document.createElement('dt');
        const input = document.createElement('input');
        const span = document.createElement('span');

        input.setAttribute('type', 'radio');
        input.setAttribute('name', item.pergunta);
        input.value = resposta;

        span.textContent = resposta;

        dt.appendChild(input);
        dt.appendChild(span);
        quizItem.querySelector('dl').appendChild(dt);
      }

      quizItem.querySelector('dl dt').remove();
      quizItem.querySelector('dl').addEventListener('change', (event) => {
        const estaCorreta = event.target.value == item.correta;

        if (estaCorreta) {
          corretas.add(item);
        } else {
          corretas.delete(item);
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      });

      quiz.appendChild(quizItem);
    }
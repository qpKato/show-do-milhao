const readline = require('readline-sync');

const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    alternativas: ["São Paulo", "Brasília", "Rio de Janeiro"],
    correta: 'b'  
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    alternativas: ["Leonardo da Vinci", "Michelangelo", "Van Gogh"],
    correta: 'a'
  },
  {
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    alternativas: ["Terra", "Júpiter", "Saturno"],
    correta: 'b'
  },
  {
    pergunta: "Quanto é 7 x 8?",
    alternativas: ["56", "48", "64"],
    correta: 'a'
  },
  {
    pergunta: "Quem descobriu o Brasil?",
    alternativas: ["Pedro Álvares Cabral", "Dom Pedro I", "Tiradentes"],
    correta: 'a'
  },
  {
    pergunta: "Qual é o símbolo químico da água?",
    alternativas: ["H2O", "O2", "CO2"],
    correta: 'a'
  },
  {
    pergunta: "Qual o menor país do mundo?",
    alternativas: ["Vaticano", "Mônaco", "Malta"],
    correta: 'a'
  },
  {
    pergunta: "Quem é o autor de 'Dom Casmurro'?",
    alternativas: ["Machado de Assis", "José de Alencar", "Carlos Drummond"],
    correta: 'a'
  },
  {
    pergunta: "Quantos lados tem um triângulo?",
    alternativas: ["3", "4", "5"],
    correta: 'a'
  },
  {
    pergunta: "Qual é a moeda oficial dos EUA?",
    alternativas: ["Euro", "Dólar", "Libra"],
    correta: 'b'
  },
  {
    pergunta: "Quem foi o primeiro homem a pisar na Lua?",
    alternativas: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"],
    correta: 'a'
  },
  {
    pergunta: "Em que continente fica o Egito?",
    alternativas: ["África", "Ásia", "Europa"],
    correta: 'a'
  },
  {
    pergunta: "Qual animal é símbolo da sabedoria?",
    alternativas: ["Coruja", "Leão", "Cachorro"],
    correta: 'a'
  },
  {
    pergunta: "Quantas cores tem o arco-íris?",
    alternativas: ["7", "6", "8"],
    correta: 'a'
  },
  {
    pergunta: "Qual é o maior oceano do planeta?",
    alternativas: ["Atlântico", "Pacífico", "Índico"],
    correta: 'b'
  }
];

const premiacoes = [1000, 5000, 10000, 30000, 100000];

function jogar() {
  console.clear();
  console.log(" BEM-VINDO AO SHOW DO MILHÃO!\n");

  const nome = readline.question("Digite seu nome: ");
  console.log(`\nBoa sorte, ${nome}!\n`);

  let premioFinal = 0;
  let rodadaAtual = 0;

  const letras = ['a', 'b', 'c'];

  for (let i = 0; i < 5; i++) {
    const pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];
    console.log(` Rodada ${i + 1}`);
    console.log(` Premiação se acertar: R$ ${premiacoes[i].toLocaleString('pt-BR')}`);
    console.log(` Se errar: R$ 0`);
    console.log(` Se parar agora: R$ ${premioFinal.toLocaleString('pt-BR')}`);

    console.log(`\n Pergunta: ${pergunta.pergunta}`);
    pergunta.alternativas.forEach((alt, idx) => {
      console.log(` ${letras[idx]}) ${alt}`);
    });

    const escolha = readline.question("\nDigite a letra da resposta (a, b, c) ou 0 para PARAR: ").toLowerCase();

    if (escolha === '0') {
      console.log("\n Você decidiu parar o jogo.");
      break;
    }

    if (!letras.includes(escolha)) {
      console.log(" Entrada inválida! Tente novamente.");
      i--; 
      continue;
    }

    if (escolha === pergunta.correta) {
      console.log(" Resposta correta!");
      premioFinal = premiacoes[i];
      rodadaAtual++;
    } else {
      console.log(" Resposta errada!");
      const indexCorreta = letras.indexOf(pergunta.correta);
      console.log(`A resposta correta era: ${pergunta.correta}) ${pergunta.alternativas[indexCorreta]}`);
      premioFinal = 0;
      break;
    }

    console.log("\n----------------------------\n");
  }

  console.log("🎉 FIM DO JOGO 🎉\n");
  console.log(` Jogador: ${nome}`);
  console.log(` Rodadas jogadas: ${rodadaAtual} de 5`);
  console.log(` Premiação final: R$ ${premioFinal.toLocaleString('pt-BR')}\n`);

  const jogarNovamente = readline.question("Deseja jogar novamente? (s/n): ");
  if (jogarNovamente.toLowerCase() === 's') {
    jogar();
  } else {
    console.log("\nObrigado por jogar!");
  }
}

jogar();

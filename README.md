# 🌾 EcoSimulador Agrinho 2026 — Calculadora de Impacto AgroAmbiental

## 1. Do Tema e Contextualização
Este projeto foi desenvolvido especialmente para o Concurso Agrinho 2026.

*   **Tema Oficial:** “Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente”
*   **Subcategoria:** Subcategoria 3 — Programação Front-End (Ensino Médio)
*   **Componente Curricular:** Educação Digital e Computação: Programação e IA

## 🎯 2. Objetivo do Projeto
O objetivo principal deste software é aplicar na prática os conhecimentos de lógica de programação e desenvolvimento web adquiridos no Ambiente Virtual de Aprendizagem da Alura durante o ano letivo de 2026. 

Através de uma interface interativa, o projeto simula o dilema real de um produtor rural paranaense, calculando como o volume de produção, a escolha de tecnologias modernas e as ações de reflorestamento impactam diretamente o equilíbrio ecológico. O simulador busca conscientizar sobre a viabilidade de manter um ecossistema produtivo, rentável e ao mesmo tempo preservado.

## 🛠️ 3. Tecnologias Utilizadas e Estrutura
O projeto foi construído do zero utilizando tecnologias nativas do desenvolvimento web (Front-End):

*   **HTML5:** Estruturação semântica de dados, formulários e elementos de interface.
*   **CSS3:** Estilização responsiva, layout moderno e feedback visual dinâmico com base em cores contextuais (verde para sustentável, laranja para alerta e vermelho para crítico).
*   **JavaScript (ES6):** Manipulação do DOM (Document Object Model), validação de formulários, operadores lógicos e estruturas condicionais para o cálculo de pontuação em tempo real.

### Organização de Diretórios:
```text
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

## ⚙️ 4. Como Funciona a Lógica do Simulador
O algoritmo em JavaScript recebe três variáveis de entrada fornecidas pelo usuário:
1.  **Produção Anual (Toneladas):** Simula a escala do agronegócio. Produções excessivas sem manejo geram pequenos decréscimos na nota ecológica devido ao desgaste natural do solo.
2.  **Tecnologias Sustentáveis:** Permite selecionar práticas recomendadas pelo SENAR-PR, como *Plantio Direto na Palha*, *Energia Solar/Irrigação Gota a Gota* ou *Integração Lavoura-Pecuária-Floresta (ILPF)*. Cada escolha soma pontos bônus à métrica ambiental.
3.  **Preservação de Árvores Nativas:** Avalia o índice de reflorestamento da propriedade. Índices baixos penalizam o status final da fazenda.

Ao final, o programa calcula um índice de 0 a 100 pontos e classifica a fazenda em um dos três cenários do edital: **Equilíbrio Perfeito**, **Produção Regular** ou **Desequilíbrio Ambiental**.

## 🚀 5. Como Executar o Projeto
1. Faça o download ou clone este repositório no seu computador.
2. Certifique-se de manter a estrutura das pastas `css/` e `js/` intactas.
3. Dê um duplo clique no arquivo `index.html` para abrir o simulador diretamente em qualquer navegador de internet moderno (Google Chrome, Microsoft Edge, Firefox, etc.).

---
*Desenvolvido por EMANUELLY GUEDES DOS SANTOS.*

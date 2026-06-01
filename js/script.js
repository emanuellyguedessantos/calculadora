function calcularImpacto() {
    // Captura os valores digitados na tela
    const producao = parseFloat(document.getElementById('producao').value);
    const tecnologia = document.getElementById('tecnologia').value;
    const arvores = parseInt(document.getElementById('arvores').value);

    // Validação simples para não deixar campos vazios
    if (isNaN(producao) || isNaN(arvores)) {
        alert("Por favor, preencha todos os campos numéricos!");
        return;
    }

    // Lógica do cálculo de pontos sustentáveis (Base: 50 pontos iniciais)
    let pontosEco = 50;

    // 1. Impacto da Produção (produzir gera riqueza, mas desgasta se for muito alta)
    if (producao > 100) {
        pontosEco -= 15; // Grande produção exige mais cuidado
    } else {
        pontosEco += 5;
    }

    // 2. Impacto da Tecnologia escolhida
    if (tecnologia === "direto") pontosEco += 15;
    if (tecnologia === "solar") pontosEco += 20;
    if (tecnologia === "rotacao") pontosEco += 25;

    // 3. Impacto das Árvores (reflorestamento)
    if (arvores >= 150) {
        pontosEco += 15;
    } else if (arvores >= 50) {
        pontosEco += 8;
    } else {
        pontosEco -= 10; // Poucas árvores derrubam a nota ambiental
    }

    // Limitadores para a nota ficar estritamente entre 0 e 100
    if (pontosEco > 100) pontosEco = 100;
    if (pontosEco < 0) pontosEco = 0;

    // Exibe o painel de resultados tirando a classe 'Oculto'
    const painelResultado = document.getElementById('resultado');
    painelResultado.classList.remove('Oculto');
    painelResultado.className = "resultado"; // Reseta classes antigas

    // Elementos da tela que vão mudar
    const campoPontos = document.getElementById('pontos-eco');
    const campoStatus = document.getElementById('status-fazenda');
    const campoFeedback = document.getElementById('feedback-texto');

    campoPontos.innerText = pontosEco;

    // Classificação final baseada no equilíbrio do tema do Agrinho
    if (pontosEco >= 75) {
        campoStatus.innerText = "Equilíbrio Perfeito! Agro Forte e Sustentável";
        painelResultado.classList.add('sucesso');
        campoFeedback.innerText = "Excelente! Sua fazenda produz muito bem utilizando os recursos da tecnologia moderna sem agredir o meio ambiente do Paraná.";
    } else if (pontosEco >= 45) {
        campoStatus.innerText = "Alerta: Produção Regular";
        painelResultado.classList.add('alerta');
        campoFeedback.innerText = "Você está produzindo, mas o meio ambiente está sofrendo pequenos danos. Tente plantar mais árvores nativas ou investir em rotação de culturas.";
    } else {
        campoStatus.innerText = "Crítico: Desequilíbrio Ambiental";
        painelResultado.classList.add('perigo');
        campoFeedback.innerText = "Cuidado! Sua produção não vai se sustentar no futuro. Alto risco de esgotamento do solo e poluição da água.";
    }
}

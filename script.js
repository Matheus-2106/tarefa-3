const cotacoes = {
    // Cotações no dia 30/07/2024
    "BRL": { "USD": 0.18, "EUR": 0.16, "JPY": 27.21 },
    "USD": { "BRL": 5.61, "EUR": 0.92, "JPY": 152.71 },
    "EUR": { "BRL": 6.07, "USD": 1.08, "JPY": 165.27 },
    "JPY": { "BRL": 0.037, "USD": 0.0065, "EUR": 0.006 }
};

function converterMoeda() {
    const quantia = document.getElementById('quantia').value;
    const moedaOrigem = document.getElementById('moeda-origem').value;
    const moedaDestino = document.getElementById('moeda-destino').value;
    const resultado = document.getElementById('resultado');

    if (moedaOrigem === moedaDestino) {
        // Bloco if para evitar adicionar uma cotação 1:1 nos dados
        resultado.textContent = quantia;
    } else {
        const taxa = cotacoes[moedaOrigem][moedaDestino];
        resultado.textContent = (quantia * taxa).toFixed(2);
    }
}

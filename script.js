// Função que será chamada quando clicar no botão
// Função: um bloco de código reutilizável que executa uma tarefa específica 
function calcular(){
    // =============================
    // 1. PEGAR OS ELEMENTOS DA TELA
    //==============================

    // Aqui pegamos cada checkbox pelo Id
    let ted = document.getElementById("ted")
    let marleyEEu = document.getElementById("Marly e Eu")
    let norbit = document.getElementById("NORBIT")
    let beeMovie = document.getElementById("Bee Movie")
    let oCabeçaDaFamilia = document.getElementById("O Cabeça da Familia")
    let vovózona = document.getElementById("Vovózona")
    // =========================================
    // 2. VARIÁVEIS INICIAIS
    //============================================
    // Total começa com 0
    let total = 0
    // String para guardar os itens escolhidos
    let itens = ""
    //===================================
    // 3. VERIFICAR CADA PRODUTO
    //==================================
    // Se o checkbox estiver marcado (true)
    if(ted.checked){
        total = total +13 // soma o valor do hambúrguer
        itens = itens +" Ted <br>" // adiciona ao texto dos produtos
    }
    if(marleyEEu.checked){
        total = total + 13
        itens = itens + " Marley e Eu <br>"
    }
    if(norbit.checked){
        total = total + 15
        itens = itens + " NORBIT <br>"
    }
    if(beeMovie.checked){
        total = total + 15
        itens = + " Bee Movie <br>"
    }
    if(oCabeçaDaFamilia.checked){
        total = total + 15
        itens = itens + " O Cabeçada da Familia <br>"
    }
    if( vovózona.checked){
        total = total + 15
        itens = itens  + " Vovózona <br>"
    }
    // =======================================
    // 4. PEGAR DIV DO RESULTADO
    //======================================
    let resultado = document.getElementById("resultado")

    //============================================
    // 5. VALIDAÇÃO
    //=============================================
    // Se não escolheu nada 
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui
    }

    //===============================================
    // 6. DESCONTO
    //==============================================
    let subtotal = total
    let desconto = 0
    // Se o valor for maior ou igual a 30, aplicamos o desconto de 10%
    if(subtotal >= 30){
        desconto = subtotal * 0.10 // 10% 
    }
    // ================================================
    // 8. TOTAL FINAL
    //==================================================
    let totalFinal = subtotal - desconto

    //==================================================
    // 9. MOSTRAR O RESULTADO
    //=================================================
    resultado.innerHTML =
    "<strong>Itens:</strong><br>"+
    itens +
    "<br> Subtotal: R$ " + subtotal.toFixed(2)+
    "<br> Desconto: R$ " + desconto.toFixed(2)+
    "<br><strong> Total: R$  " + totalFinal.toFixed(2) + "</strong>"


}

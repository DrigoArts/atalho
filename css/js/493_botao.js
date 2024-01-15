// Função para criar um botão e adicionar ao menu
    function criarBotao(classe, onClickFunction) {
        var botao = document.createElement("button");
        botao.className = classe;
        botao.onclick = onClickFunction;
        document.getElementById("meuMenu").appendChild(botao);
    }
    
    // Adicionando botões dinamicamente
    criarBotao("alana", function() {
        abrirPopup('GGL');
    });
    
    criarBotao("botao1", function() {
        abrirLinkEmGuiaAnonima();
    });
    
    criarBotao("botao6", function() {
        abrirLinkPerformanceLoja('Gráfico de vendas');
    });
    
    criarBotao("botao2", function() {
        abrirPopup('Power Bi');
    });

    criarBotao("botao3", function() {
        abrirPopup('Pix');
    });

    criarBotao("botao5", function() {
        abrirLinkGarantia('');
    });

    criarBotao("botao7", function() {
        abrirPopup('Acom');
    });

    criarBotao("botao8", function() {
        abrirPopup('Vitrine');
    });

    criarBotao("botao4", function() {
        abrirPopup('Ame');
    });

    criarBotao("botao9", function() {
        abrirPopup('DCP');
    });

    criarBotao("botao10", function() {
        abrirWhatsapp('');
    });

    criarBotao("botao12", function() {
        abrirPopup('Boletim de Ocorrência');
    });

    
    //COLUNA 1
    // Função para criar um botão e adicionar à linha
function criarBotao2(classe, texto, onClickFunction) {
    var botao = document.createElement("button");
    botao.className = classe;
    botao.textContent = texto;
    botao.onclick = onClickFunction;

    var celula = document.createElement("td");
    celula.appendChild(botao);

    document.getElementById("minhaLinha").appendChild(celula);
}

// Adicionando botões dinamicamente
criarBotao2("botaogrey", "ATLAS", function() {
    Atlas();
});

criarBotao2("botaogrey2", "BROKER", function() {
    Broker();
});

criarBotao2("botaogrey3", "CENTRALWEB", function() {
    CentralWeb();
});

criarBotao2("botaogrey4", "CITRIX", function() {
    Citrix();
});

criarBotao2("botaogrey", "CTF", function() {
    Ctf();
});

criarBotao2("botaogrey", "E-MAIL", function() {
    abrirLinkEmGuiaAnonima();
});

criarBotao2("botaogrey", "FLASH", function() {
    Flash();
});

criarBotao2("botaogrey", "FLASH DINÂMICO", function() {
    FlashDinamico();
});

criarBotao2("botaogrey", "GENTE & GESTÃO", function() {
    Gente();
});

criarBotao2("botaogrey", "LOGISTICA REVERSA", function() {
    Troca();
});

criarBotao2("botaogrey", "HYDRA", function() {
    NovoHydra();
});

criarBotao2("botaogrey", "MAESTRO", function() {
    Maestro();
});

criarBotao2("botaogrey", "MIDAS", function() {
    Midas();
});

criarBotao2("botaogrey", "PRODUTOS NÃO CADASTRADOS", function() {
    Cadastro();
});

criarBotao2("botaogrey", "RDV", function() {
    Rdv();
});

criarBotao2("botaogrey", "RONDA WEB", function() {
    Ponto();
});

criarBotao2("botaogrey", "SAFE", function() {
    Safe();
});

criarBotao2("botaogrey", "WEBLOJA", function() {
    Webloja();
});

criarBotao2("botaogrey", "WORKPLACE", function() {
    Workplace();
});


//COLUNA 2

// Função para criar um botão e adicionar à coluna
function criarBotao3(classe, onClickFunction) {
    var botao = document.createElement("button");
    botao.className = classe;
    botao.onclick = onClickFunction;
    document.getElementById("minhaLinha2").appendChild(botao);
}

// Adicionando botões dinamicamente
criarBotao3("botaoA1", function() {
    suporteame();
});

criarBotao3("botaoA2", function() {
    rotina();
});

criarBotao3("botaoA3", function() {
    abrirPopup('Caminhão');
});

criarBotao3("botaoA4", function() {
    ConsultaPix();
});

criarBotao3("botaoA5", function() {
    flash();
});

criarBotao3("botaoA6", function() {
    garantia();
});

criarBotao3("botaoA7", function() {
    rdv();
});

criarBotao3("botaoA8", function() {
    pulses();
});

criarBotao3("botaoA9", function() {
    rotativo();
});

criarBotao3("botaoA10", function() {
    isv();
});

criarBotao3("botaoA11", function() {
    citrix();
});

    //COLUNA 3
// Função para criar um card e adicionar à coluna
function criarCard(classe, onClickFunction) {
    var card = document.createElement("div");
    card.className = classe;
    card.onclick = onClickFunction;
    document.getElementById("minhaColuna").appendChild(card);
}

// Adicionando cards dinamicamente
criarCard("card1x1", function() {
    abrir1x1();
});

criarCard("card2x1", function() {
    abrir2x1();
});

criarCard("cardtelefonia", function() {
    abrirTelefonia();
});

criarCard("cardpanfletofgts", function() {
    abrirPanfleto();
});

criarCard("cardfgts1", function() {
    abrirfgts1();
});

criarCard("cardfgts2", function() {
    abrirfgts2();
});

// Adicionando mais cards se necessário
criarCard("novaClasse", function() {
    // Adicione a lógica desejada para este card
});


    //COLUNA 4
// Função para criar um botão e adicionar ao menu
function criarBotao4(classe, texto, onClickFunction) {
    var botao = document.createElement("button");
    botao.className = classe;
    botao.textContent = texto;
    botao.onclick = onClickFunction;
    document.getElementById("meuMenu2").appendChild(botao);
}

// Adicionando botões dinamicamente
criarBotao4("botaofiscal", "SANGRIA", function() {
    sangria();
});

criarBotao4("botaofiscal", "MIUDOS", function() {
    miudos();
});

criarBotao4("botaofiscal", "MAPA DE COLETA", function() {
    MapaColeta();
});

criarBotao4("botaofiscal", "CONTROLE CEDULAS", function() {
    ControleCedulas();
});

criarBotao4("numerario", "CONTROLE DE NUMERARIO DEPOSITADO", function() {
    Numerario();
});

criarBotao4("botaofiscal", "FOLHA DE FREQUENCIA", function() {
    FolhaFrequencia();
});

criarBotao4("botaofiscal", "COMPROVANTE CAIXA PDF", function() {
    ComprovantePdf();
});

criarBotao4("botaofiscal", "COMPROVANTE CAIXA EXCEL", function() {
    ComprovanteExcel();
});

criarBotao4("botaofiscal", "*ADVERTÊNCIA", function() {
    advertencia();
});

criarBotao4("botaofiscal", "GE OPERADORES", function() {
    GeOperador();
});

    //COLUNA 5
// Função para criar um botão e adicionar ao menu
function criarBotao5(classe, texto, onClickFunction) {
    var botao = document.createElement("button");
    botao.className = classe;
    botao.innerHTML = texto;
    botao.onclick = onClickFunction;
    document.getElementById("meuMenu3").appendChild(botao);
}

// Adicionando botões dinamicamente
criarBotao5("botaopapeleta", "FAIXA", function() {
    faixa();
});

criarBotao5("botaopapeleta", "MODELO 1X1", function() {
    modelo1x1();
});

criarBotao5("botaopapeleta", "MODELO 2X1", function() {
    modelo2x1();
});

criarBotao5("botaopapeleta", "PAPELETA AME", function() {
    PapeletaAme();
});

criarBotao5("botaopapeleta", "PAPELETA NORMAL", function() {
    PapeletaNormal();
});

criarBotao5("botaopapeleta", "IMPERDIVEL leve 3 por 9,99", function() {
    imperdivel();
});

//QUEBRA DE LINHA

//TITULOS DA ULTIMA COLUNA
    // Suponha que você queira mudar o texto para "NOVO TÍTULO"
var novoTitulo = "FISCAL";
document.getElementById("tituloFiscal").textContent = novoTitulo;

    // Suponha que você queira mudar o texto para "NOVO TÍTULO"
var novoTitulo = "PAPELETAS";
document.getElementById("titulopapeleta").textContent = novoTitulo;

    // Suponha que você queira mudar o texto para "NOVO TÍTULO"
    var novoTitulo = "Versão 14.8.0";
    document.getElementById("versao").textContent = novoTitulo;

// Suponha que você queira mudar o texto para "NOVO TÍTULO"
var novoTexto = "LASA 493";
document.querySelector("titulo1").textContent = novoTexto;


criarBotao5("botaopapeleta", "", function() {
    colocaronomedafunção();
});



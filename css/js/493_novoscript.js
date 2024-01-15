//função mobile
//1function isMobile() {
    // Verifica se o usuário está acessando o site de um celular
    //2return window.screen.width <= 768;
  //3}

  //4if (isMobile()) {
    // Se o usuário estiver acessando o site de um celular, redirecione-o para o site móvel
    //5window.location.href = "https://rduartes.web.app/loja.html";
  //6}

//fim da função mobile
function abrirPopup(titulo) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('tituloPopup').innerText = titulo;

    // Limpa a lista de links antes de adicionar novos
    document.getElementById('listaLinks').innerHTML = '';

    // Verifica o título para adicionar a lista de links correspondente
    if (titulo === 'Power Bi') {
        adicionarListaLinks([
            //{ texto: 'RDV_Físico_On-line', link: 'https://app.powerbi.com/groups/me/reports/5b6f7b51-0ed6-44d1-9ae9-3f6349a851af/ReportSection?experience=power-bi' },
            //{ texto: 'Desvio de venda', link: 'https://app.powerbi.com/groups/me/reports/7915d54e-6348-4800-af74-9d9b015e7e4f/ReportSectione9821335c5b6b11b80c8?experience=power-bi' },
            //{ texto: 'Item sem venda', link: 'https://app.powerbi.com/groups/me/reports/4a7ef69d-8397-48e7-a019-bf4aa5c33a8a/ReportSectionb594dee3000ca7d1cd09?redirectedFromSignup=1&experience=power-bi' },
            { texto: 'Estoque negativo', link: 'https://app.powerbi.com/groups/me/reports/1da2dc8b-099c-4fa9-9be0-6eb0442d10ed/ReportSectionf806a2cbdd9b2c732c84?redirectedFromSignup=1&experience=power-bi' },
            { texto: 'Mercadoria em trânsito', link: 'http://estoquetransito/ind_est_trans_loja.php' }
        ]);
    } else if (titulo === 'Pix') {
        adicionarListaLinks([
            { texto: 'Consultar PIX', link: 'https://mp-pamp.internal.b2w.io/login' },
            { texto: 'Manual do PIX', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao2wk2hoJCar_svkV?e=o32a0f' },
            { texto: 'Painel PIX Power Bi', link: 'https://app.powerbi.com/groups/me/reports/ebfbb417-6fab-4add-9896-19a367306459/ReportSection4cee9bbadf977134f3b8?experience=power-bi' },
            //{ texto: 'Painel do PIX', link: 'https://lookerstudio.google.com/embed/u/0/reporting/2a8f6917-0232-451d-9acb-722533b50d11/page/p_604lru0t5c' },
        ]);
    } else if (titulo === 'Ame') {
        adicionarListaLinks([
            { texto: 'Suporte Ame', link: 'https://amedigital.force.com/lasa' },
            { texto: 'Pré Cadastro', link: 'https://precadastro.amedigital.com/login' },
            //{ texto: '# PDF Treinamento', link: '' },
            //{ texto: '# Site Ame Minha conta', link: '' }
        ]);
    } else if (titulo === 'Garantia') {
        adicionarListaLinks([
            { texto: 'Resultado Mês', link: 'https://docs.google.com/spreadsheets/d/1CqvGBHiR82z7-52pY6whX1P1KtYODP8tuZ-17kBqBuc/edit?usp=sharing' },
            //{ texto: '# Associados', link: '' },
            //{ texto: 'Total', link: '' }
        ]);
    } else if (titulo === 'Gráfico de vendas') {
        adicionarListaLinks([
            { texto: 'Perfomance Loja', link: 'https://docs.google.com/spreadsheets/d/1ohixDwn_4t7t3Xk7_yTp4Y5Ldyuwli52SddzK1wDxqo/edit?usp=sharing' },
            //{ texto: 'Painel do GGL', link: 'https://amer3-my.sharepoint.com/:x:/r/personal/scravo_americanas_io/Documents/PAINEL%20DO%20GGL%20GUARULHOS.xlsx?d=w332bc9baa49c478bbd8ef5e5685c9fcc&csf=1&web=1&e=1Yk2rv' },
            //{ texto: '# Resultado Mês', link: '' },
            //{ texto: '# meses', link: '' },
            //{ texto: 'Total', link: '' }
        ]);
    } else if (titulo === 'Vitrine') {
        adicionarListaLinks([
            { texto: 'CONTAGEM DA VITRINE', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao1P11dz2I6N8xeOj?e=kbwmuJ' },
            { texto: 'CONTROLE DE IMEI', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao1Q_D1YDzmD3xVql?e=ni9IVL' },
            { texto: 'N.O.', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao1bGQfxPVrFYL0Ws?e=YIyhta' },
            //{ texto: '# NÃO TROCA TV', link: '/Pdf/vitrine/tv.pdf' },
            { texto: 'NÃO TROCA POSITIVO', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao1jP2BhOFSt_PwMl?e=4VjLlK' },
            //{ texto: '# NÃO TROCA ELETROLUX', link: '/Pdf/vitrine/eletrolux.pdf' },
            //{ texto: '# NÃO TROCA CONSOLE', link: '/Pdf/vitrine/console.pdf' },
            { texto: 'NÃO TROCA DOREL', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao1dVpPZfmkOdHtUW?e=V0Bcu3' },
            { texto: 'NÃO TROCA APPLE', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao1FLzVUs-ztr4OyV?e=uiQulq' },
            { texto: 'LISTA DE SUPORTE FORNECEDOR', link: '' },
            //{ texto: 'Total', link: '' }
        ]);
    } else if (titulo === 'Acom') {
        adicionarListaLinks([
            { texto: 'Entrega Manual', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao2h9k0fGr0s2cLsd?e=JCjJKE' },
            { texto: 'Devolução Manual', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao2dmgL-2H1ud1neD?e=DAfgoX' },
            { texto: 'Maestro', link: 'https://maestro.americanas.io/all-orders' },
            { texto: 'Cupom App', link: 'https://lookerstudio.google.com/u/0/reporting/3db784a0-19b9-4718-a398-1102d60c3ab2' }
        ]);
    } else if (titulo === 'DCP') {
        adicionarListaLinks([
            { texto: 'Quebra', link: 'https://app.powerbi.com/groups/me/apps/dbc63c6b-7527-49b8-aeae-b80e730701b5/reports/aed8791f-72b5-4722-9e6b-20a96a5345d0/ReportSection44c9459fd32c02e91db0?experience=power-bi' },
            { texto: 'Quebra líqüida', link: 'https://app.powerbi.com/groups/me/apps/dbc63c6b-7527-49b8-aeae-b80e730701b5/reports/aed8791f-72b5-4722-9e6b-20a96a5345d0/ReportSection2a69cc8cfdbdbba2656d?experience=power-bi' },
            //{ texto: '# Solicitar Baixa', link: '' },
            //{ texto: '# Realizar Quebra', link: '' },
            { texto: 'Consultar Solicitação de baixas', link: 'https://app.powerbi.com/groups/me/apps/dbc63c6b-7527-49b8-aeae-b80e730701b5/reports/aed8791f-72b5-4722-9e6b-20a96a5345d0/ReportSection65b4f7b60aa072e79bee?experience=power-bi' },
            { texto: 'Cancelamento Físico', link: 'https://app.powerbi.com/groups/me/reports/4fab2634-70ad-4b46-9fe1-15da5db795b8/ReportSection4a0cb3e6b4d664cf65f3?ctid=e316d1ac-42c8-4d30-817c-12c7a71f8ab2&experience=power-bi' }
        ]);
    } else if (titulo === 'Caminhão') {
        adicionarListaLinks([
            { texto: 'Check List', link: 'https://1drv.ms/b/s!AuQoFkcGDDSao2YYtd3Mz4VkALnR?e=kAk3yw' },
            { texto: 'Conferencia de caminhão', link: 'https://app.powerbi.com/groups/me/apps/dbc63c6b-7527-49b8-aeae-b80e730701b5/reports/bf1f9760-3899-4d6a-8891-c3fb4fe27b09/ReportSection58428bc6939ea2e7266c?experience=power-bi' },
            { texto: 'Fotos de caminhão', link: 'https://amer3-my.sharepoint.com/:f:/r/personal/rduarte_americanas_io/Documents/CaminhaoL493?csf=1&web=1' }
        ]);
    } else if (titulo === 'GGL') {
        adicionarListaLinks([
            { texto: 'Reunião de abertura', link: 'https://bee-explorer.internal.b2w.io/relatorio-lojas/d7f4fa9a-79b3-4cd3-8166-ccf47bb40556' },
            { texto: 'Painel estoque crítico', link: 'https://lookerstudio.google.com/reporting/d23376c3-e176-4050-9c3c-396c0b8a6dff/page/p_7ykaaree8c' },
            { texto: 'TOP 30 itens', link: 'https://lookerstudio.google.com/u/0/reporting/5217fe47-a1c2-4836-8739-3c63aa95c84a/page/tEnnC' },
            { texto: 'Venda D-1 e dia atual', link: 'https://lookerstudio.google.com/reporting/d7f4fa9a-79b3-4cd3-8166-ccf47bb40556/page/p_00m0i53t6c?pli=1' },
            //{ texto: 'Venda D-1 e dia atual', link: 'https://bee-explorer.internal.b2w.io/relatorio-lojas/d7f4fa9a-79b3-4cd3-8166-ccf47bb40556' }
        ]);
    } else if (titulo === 'Variáveis') {
        adicionarListaLinks([
            { texto: 'Adicionar Garantia', link: 'https://docs.google.com/spreadsheets/d/1CqvGBHiR82z7-52pY6whX1P1KtYODP8tuZ-17kBqBuc/edit?usp=sharing' },
            { texto: 'Adicionar Pix', link: 'https://docs.google.com/spreadsheets/d/1W8JNMFZ2oKO9dqkA6B3lcpBAt2zoKBHre9SrTC8di94/edit?usp=sharing' },
            { texto: '', link: '' },
            { texto: '', link: '' }
            
        ]);
    } else if (titulo === 'Planeta Criança') {
        adicionarListaLinks([
            { texto: 'Editar venda', link: 'https://docs.google.com/spreadsheets/d/1jX3qMVFDLVLzgGs3Gcqq-ABKA4BiAvwRbsd-cdw3AB4/edit?usp=sharing' },
            { texto: 'Editar venda de itens', link: 'https://docs.google.com/spreadsheets/d/12UA_-gkOW57jQd3qczzQU_pkmLwrdKfe-qSxDwBy4ow/edit?usp=sharing' },
            { texto: 'Gráfico', link: 'https://lookerstudio.google.com/reporting/ca1a5bdf-7463-4810-8752-7831f05ee95a' },
            //{ texto: '', link: '' }
            
        ]);
    } else if (titulo === 'Boletim de Ocorrência') {
        adicionarListaLinks([
            { texto: 'Fazer B.O.', link: 'https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia' },
            { texto: 'Forms do monitoramento', link: 'https://forms.office.com/pages/responsepage.aspx?id=rNEW48hCME2BfBLHpx-KskmNsV3nNJBNpvNw2jLR3fBUNTIyWUY5UUJQSTJLVklUQlBHQzQ5WE1EUS4u' },
            //{ texto: '', link: '' }
            
        ]);
    }
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

function adicionarListaLinks(links) {
    var listaLinks = document.getElementById('listaLinks');
    links.forEach(function (linkItem) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = linkItem.link;
        link.target = '_blank';
        link.innerText = linkItem.texto;
        listItem.appendChild(link);
        listaLinks.appendChild(listItem);
    });
}

function abrirLinkEmGuiaAnonima() {
    var url = "https://outlook.office365.com/mail/inbox";
    var target = "_blank";

    window.open(url, target);
}
//link Performance de Loja
function abrirLinkPerformanceLoja() {
    var url = "https://docs.google.com/spreadsheets/d/1ohixDwn_4t7t3Xk7_yTp4Y5Ldyuwli52SddzK1wDxqo/edit?usp=sharing";
    var target = "_blank";

    window.open(url, target);
}
//link Garantia da Loja
function abrirLinkGarantia() {
    var url = "https://docs.google.com/spreadsheets/d/1CqvGBHiR82z7-52pY6whX1P1KtYODP8tuZ-17kBqBuc/edit#gid=284184721";
    var target = "_blank";

    window.open(url, target);
}


function abrirWhatsapp() {
    var url = "https://web.whatsapp.com/";
    var target = "_blank";

    window.open(url, target);
}

function Atlas() {
    var url = "https://atlas.lasa.com.br/";
    var target = "_blank";

    window.open(url, target);
}
function Broker() {
    var url = "https://broker.lasa.lojasamericanas.com.br/";
    var target = "_blank";

    window.open(url, target);
}
function CentralWeb() {
    var url = "http://centralweb/index.php";
    var target = "_blank";

    window.open(url, target);
}
function Citrix() {
    var url = "http://citrixcloud.lasa.lojasamericanas.com.br/Citrix/LasaWeb/";
    var target = "_blank";

    window.open(url, target);
}
function Ctf() {
    var url = "http://teflasa.lasa.lojasamericanas.com.br/ctf/";
    var target = "_blank";

    window.open(url, target);
}
function Flash() {
    var url = "http://flashloja/paginaDeAcesso.php";
    var target = "_blank";

    window.open(url, target);
}
function FlashDinamico() {
    var url = "http://flashloja/Flash2010/rdv_v2/";
    var target = "_blank";

    window.open(url, target);
}
function Gente() {
    var url = "http://gentegestao.lasa.lojasamericanas.com.br/psp/hr/EMPLOYEE/HRMS/?cmd=login&LanguageCd=POR";
    var target = "_blank";

    window.open(url, target);
}
function Troca() {
    var url = "http://reversadhc/";
    //var url = "https://trocafacil.americanas.io/";
    var target = "_blank";

    window.open(url, target);
}
function Hydra() {
    var url = "http://backoffice.hydrapdv.com.br/login/auth?login_error=1";
    var target = "_blank";

    window.open(url, target);
}
function Maestro() {
    var url = "https://maestro.americanas.io/all-orders";
    var target = "_blank";

    window.open(url, target);
}
function Midas() {
    var url = "http://midas.lasa/sessions/login";
    var target = "_blank";

    window.open(url, target);
}
function Cadastro() {
    var url = "http://itemnaocadastrado/users/login";
    var target = "_blank";

    window.open(url, target);
}
function Rdv() {
    var url = "http://lasanet/rdv/";
    var target = "_blank";

    window.open(url, target);
}
function Ponto() {
    var url = "http://rondaweb/";
    var target = "_blank";

    window.open(url, target);
}
function Safe() {
    var url = "http://10.23.94.84/safe/asp/";
    var target = "_blank";

    window.open(url, target);
}
function Webloja() {
    var url = "http://webloja/";
    var target = "_blank";

    window.open(url, target);
}
function Workplace() {
    var url = "https://lojasamericanas.workplace.com/";
    var target = "_blank";

    window.open(url, target);
}


//COLUNA 2 bolinha
function suporteame() {
    var url = "https://ameorg.my.site.com/lasa/s/";
    var target = "_blank";

    window.open(url, target);
}
function rotina() {
    var url = "https://rotinacomercial.lasa.com.br/";
    var target = "_blank";

    window.open(url, target);
}
function caminhao() {
    var url = "/Pdf/caminhao/checklist.pdf";
    var target = "_blank";

    window.open(url, target);
}
function ConsultaPix() {
    var url = "https://mp-pamp.internal.b2w.io/login";
    var target = "_blank";

    window.open(url, target);
}
function flash() {
    //var url = "http://flashloja/deptos.php?loja=493";
    //var url = "http://lxflashloja/";
    var url = "http://lxnflashprd.lasa.lojasamericanas.com.br/vendas/azure/lojas/total";
    var target = "_blank";

    window.open(url, target);
}
//codigo antigo de acesso a garantia
//function garantia() {
    //var url = "http://novoflash/vnd_lojaGarantia_roubo_furto.php?SCOL1=1&=1&data=&dat2=tipo=&regiao=GR04&distrito=0411&cidade=&agrupar=3&consolidado=0";
    //var target = "_blank";

    //window.open(url, target);
//}


//Novo codigo para acessar o link garantia com adição de data
function garantia() {

    var url = "http://novoflash/vnd_lojaGarantia_roubo_furto.php?SCOL1=1&SCOL2=1&SCOL3=1&SCOL4=1&SCOL5=1&SCOL6=1&SCOL7=1&SCOL8=1&SCOL9=1&SCOL10=1&SCOL11=1&SCOL12=1&SCOL13=1&SCOL14=1&SCOL15=1&SCOL16=1&data=";
   
    // Obter a data atual
    var currentDate = new Date();

    // Extrai o ano, mês, e dia
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');

    // Concatenate a data com a URL
    //url += year + '-' + month + '-' + day + '&loja=493&consolidado=0';
    url += year + '-' + month + '-' + day + '&dat2=' + year + '-' + month + '-' + day + '&tipo=&regiao=&distrito=0411&cidade=&agrupar=3&consolidado=0';

    var target = "_blank";

    // Abre a URL em nova guia
    window.open(url, target);
}

//CODIGO PARA VER A VENDA DA LOJA
function titulo() {
    var url = "http://lxnflashprd.lasa.lojasamericanas.com.br/vendas/deptos/total/";
    
    // Obter a data atual
    var currentDate = new Date();

    // Extrai o ano, mês, e dia
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');

    // Concatenate a data com a URL
    url += year + month + day + '/' + year + month + day + '/493';

    var target = "_blank";

    // Abre a URL em nova guia
    window.open(url, target);
}

//NOVO CODIGO PARA ACESSAR O HYDRA
function NovoHydra() {

    var url = "http://backoffice.hydrapdv.com.br/sale/index?startDate=";
   
    // Obter a data atual
    var currentDate = new Date();

    // Extrai o ano, mês, e dia
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');

    // Concatenate a data com a URL
    //url += year + '-' + month + '-' + day + '&loja=493&consolidado=0';
    url += day + '%2F' + month + '%2F' + year + '&endDate=' + day + '%2F' + month + '%2F' + year + '&stores=493&types=&pos=&_action_index=Buscar';

    var target = "_blank";

    // Abre a URL em nova guia
    window.open(url, target);
}


//
function rdv() {
    var url = "https://app.powerbi.com/groups/me/reports/37551f08-a1d3-41a5-90bd-3357d15c59fe/ReportSectionb3943ac073ebe2560310?ctid=4d82ae86-159a-4004-8c19-be72402ebcb9";
    var target = "_blank";

    window.open(url, target);
}
function pulses() {
    var url = "https://www.pulses.com.br/app/engage/survey?ctoken=NzBkNmU0N2E1NzViNjkxZWU3OThjYjQzMjkwOTUyM2M2ZnhhOTM2a3hhbzY";
    var target = "_blank";

    window.open(url, target);
}
function rotativo() {
    var url = "http://10.115.69.132/RF/Login";
    var target = "_blank";

    window.open(url, target);
}
function isv() {
    var url = "http://itenssemvenda/";
    var target = "_blank";

    window.open(url, target);
}
function citrix() {
    var url = "http://citrixcloud/Citrix/LasaWeb/";
    var target = "_blank";

    window.open(url, target);
}
function nps() {
    var url = "https://www.workplace.com/";
    var target = "_blank";

    window.open(url, target);
}


//COLUNA 4
function sangria() {
    var url = "/Pdf/Fiscal/SANGRIA%20MIDAS.pdf";
    var target = "_blank";

    window.open(url, target);
}
function miudos() {
    var url = "/Pdf/Fiscal/SANGRIA%20MIUDOS%20493.pdf";
    var target = "_blank";

    window.open(url, target);
}
function MapaColeta() {
    var url = "/Pdf/Fiscal/mapa%20de%20coleta%2026112018.pdf";
    var target = "_blank";

    window.open(url, target);
}
function ControleCedulas() {
    var url = "/Pdf/Fiscal/Controle%20cedulas.pdf";
    var target = "_blank";

    window.open(url, target);
}
function Numerario() {
    var url = "/Pdf/Fiscal/CONTROLE%20DE%20NUMERARIO%20DEPOSITADO%20revisao09.2015.pdf";
    var target = "_blank";

    window.open(url, target);
}
function FolhaFrequencia() {
    var url = "/Pdf/Fiscal/folha%20de%20Frequencia.pdf";
    var target = "_blank";

    window.open(url, target);
}
function ComprovantePdf() {
    var url = "/Pdf/Fiscal/COMPROVANTE%20DE%20CAIXA%20NOVO.pdf";
    var target = "_blank";

    window.open(url, target);
}
function ComprovanteExcel() {
    var url = "/Pdf/Fiscal/COMPROVANTE%20DE%20CAIXA%20493%20NOVO.xlsx";
    var target = "_blank";

    window.open(url, target);
}
function advertencia() {
    var url = "/Pdf/Fiscal/advertencia/advertencia.doc";
    var target = "_blank";

    window.open(url, target);
}
function GeOperador() {
    var url = "/Pdf/Fiscal/Controle%20GE%20operadores.pdf";
    var target = "_blank";

    window.open(url, target);
}


//PAPELETAS
function faixa() {
    var url = "/papeleta/XBOX360.doc";
    var target = "_blank";

    window.open(url, target);
}
function modelo1x1() {
    var url = "/papeleta/MODELO%201X1.pdf";
    var target = "_blank";

    window.open(url, target);
}
function modelo2x1() {
    var url = "/papeleta/MODELO%202X1.pdf";
    var target = "_blank";

    window.open(url, target);
}
function PapeletaAme() {
    var url = "/papeleta/Papeletas_V12_Ame.xlsm";
    var target = "_blank";

    window.open(url, target);
}
function PapeletaNormal() {
    var url = "/papeleta/normal.xlsm";
    var target = "_blank";

    window.open(url, target);
}
function imperdivel() {
    var url = "/papeleta/IMPERDIVEL%20PARA%20EDITAR%20leve%203%20por%209,99.docx";
    var target = "_blank";

    window.open(url, target);
}

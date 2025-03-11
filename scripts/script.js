/** FUNÇÕES DE ABRIR E FECHAR MENU QUANDO MOBILE*/
function mostrar_menu(){
    $('nav#nav-esquerda ul.menu-principal').css('display', 'flex');/* quando aceionada muda no path a configuração do css para a dada */ 
    $('nav#nav-esquerda ul.menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');/** animação do menu para click*/
    
    $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'none');/**quando clicar o menu hamburger vai sumir e o menuX vai abrir*/
    $('nav#nav-esquerda ul#icone-menu li#menuX').css('display', 'flex');
}

function esconder_menu(){
    $('nav#nav-esquerda ul.menu-principal').css('display', 'none');/*nessa função ele faz basicamente o contrario da anterior* */
    
    $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'flex');
    $('nav#nav-esquerda ul#icone-menu li#menuX').css('display', 'none');
}

let control = true;

$('nav#nav-esquerda ul#icone-menu').click(function(){/**função de clique para abrir e fechar */
    if(control == true){
        mostrar_menu();
        control = false;
    }
    else{
        esconder_menu();
        control = true;
    }
})

/**____________________________________________________________________________ */
/*------------------MODAL---------------*/

const abrir_modal = document.querySelectorAll(".abrir_modal");
const modals = document.querySelectorAll(".modal");
const fechar_modal = document.querySelectorAll(".fechar_modal");
const link_modal = document.querySelectorAll(".link_modal")

link_modal.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const modal = link.closest(".modal");
        if(modal){
            modal.close();
            document.body.classList.remove("modal_aberto");
        }
        const href = link.getAttribute("href");
        if(href && href.startsWith("#")){
            const secao = document.querySelector(href);
            if(secao){
                secao.scrollIntoView({behavior: "smooth"});
            }
        }
    });
});


abrir_modal.forEach((button, index) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        modals[index].showModal();
        document.body.classList.add("modal_aberto");        
    });
});



fechar_modal.forEach((button, index) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        modals[index].close();
        document.body.classList.remove("modal_aberto");
    });
});











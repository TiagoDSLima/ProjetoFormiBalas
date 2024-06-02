function pesquisa() {
    let input = document.getElementById('barraPesquisa').value.toLowerCase();
    let containers = document.getElementsByClassName('conteiner');
    
    for (let i = 0; i < containers.length; i++) {
        let container = containers[i];
        let content = container.innerText.toLowerCase();
        
        if (content.includes(input)) {
            container.style.display = '';
        } else {
            container.style.display = 'none';
        }
    }
}

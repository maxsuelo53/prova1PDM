var contatos = [];


function nextID() {
    var id = 1;
    contatos.forEach(function(contato, index) {
		if (contato.id >= id) id = contato.id + 1;
	});
	
	return id;	
}


function add(){
    var contato = {"id":nextID(contato),"nome": $("#nome").val(), "telefone":$("#telefone").val()};

    contatos.push(contato);
    $("#nome").val("");
    $("#telefone").val("");

    list(contato);
}

function createHTML(contato){

    var html = "";

    html+= "<li class='collection-item '> <div> <i class='material-icons icone'>account_box</i><br/>" + contato.nome + "<br/>" + contato.telefone + " <a class='secondary-content' onclick='del(" + contato.id + ")'><i class='material-icons iconedel'>delete</i></a></div></li>";

    return html;

}

function list(contato){
    var html = "";

    contatos.forEach(function(contato,index){
        
        html += createHTML(contato);
    })

    $("#contatos").html(html);
}

function del(id) {

    var contato = {"id":id,"nome": $("#nome").val(), "telefone":$("#telefone").val()};
		
	contatos.forEach(function(contato, index) {
		if (contato.id == id) contatos.splice(index, 1);
	});
	
	
	list(contato);
	
}
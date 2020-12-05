var firebaseConfig = {
    apiKey: "AIzaSyBVt99EqencDOWJlFLoQ6z5Wa80GiDF6Yg",
    authDomain: "prova1-96428.firebaseapp.com",
    projectId: "prova1-96428",
    storageBucket: "prova1-96428.appspot.com",
    messagingSenderId: "572504713660",
    appId: "1:572504713660:web:1a565064bdf18ef4cee3b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var contatosDB = firebase.database().ref("contatos");


var contatos = [];


function add(){
    var contato = {"nome": $("#nome").val(), "telefone":$("#telefone").val()};

    contatosDB.push(contato);
    $("#nome").val("");
    $("#telefone").val("");

    list(contato);
}

function createHTML(id, contato){

    var html = "";

    html+= "<li class='collection-item '> <div> <i class='material-icons icone'>account_box</i><br/>" + contato.nome + "<br/>" + contato.telefone + " <a class='secondary-content' onclick='del(event,\"" +id+ "\")'><i class='material-icons iconedel'>delete</i></a></div></li>";

    return html;

}

function list(contato){

    contatosDB.once("value",function(contato){    

        var html = "";

        contatos.forEach(function(contato,index){
            
            html += createHTML(contato.key,contato.val());
        })

        $("#contatos").html(html);

    });
}

function del(id) {

    evt.stopPropagation();
	contatosDB.child(id).remove();
	
	
	list(contato);
	
}
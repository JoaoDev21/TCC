var db = openDatabase("MeuBanco", "2.2.0", "BaseUsers", 4048)

        db.transaction(function(criar){
        criar.executeSql("CREATE TABLE users (ID PRIMARY KEY, nome TEXT, senha TEXT)")
        })

        function Salvar(){

            var nome = document.getElementById('nome').value
            var senha = document.getElementById('senha').value
            var email = document.getElementById('email').value

            db.transaction(function(armazenar){
            armazenar.executeSql("INSERT INTO users (nome,senha) VALUES (?,?)",[nome,senha,email])
            })

            const login = document.getElementById('login');

            function Red_Login() {
            window.location = "login.html"
            }
        }

       /*var nome = document.getElementById('nome')
        var senha = document.getElementById('senha')

        function ViewUsuario(){

            var nomeValue = nome.value
            var senhaValue = senha.value

            if(nomeValue == ''){
                alert('Preencha o Campo Nome!')
            }
            else if(senhaValue == ''){
                alert('Preencha o Campo Senha!')
            }
            else{
                document.getElementById("lbResultaNome").innerHTML = lbResultaNome;
                document.getElementById("lbResultaSenha").innerHTML = lbResultaSenha;
            }
        }*/

/* CODIGO DADO PELO CHAT GPT

const sql = require('mssql');

const config = {
    user: 'seu_usuario',
    password: 'sua_senha',
        server: 'nome_do_servidor',
        database: 'nome_do_banco_de_dados',
    };
        
    sql.connect(config).then(() => {
        console.log('Conexão bem sucedida!');
    }).catch((err) => {
        console.error('Erro ao conectar ao banco de dados', err);
    });
        
*/
function showPassword(){
    var eye = document.getElementById('eye');
    var eyeSlash =  document.getElementById('eyeSlash');
    var ExibeSenha = document.getElementById('ExibeSenha');

    if(eye.style.display === 'none')
    {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        senha.type = 'text';
        senha1.type = 'text'
    }
    else
    {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        senha.type = "password";
        senha1.type = "password";
    }
}
form.addEventListener('click', (e) => {

    e.preventDefault()

    //checkInputs()
})
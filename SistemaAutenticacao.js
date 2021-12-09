/*
 Ser autenticavel significa ter o metodo autenticar "senha"
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}
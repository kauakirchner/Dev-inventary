
export default {
    namespaced: true,
    state(){
        return{
            colaboradores: []
        }
    },
    mutations:{
        //Função que insere colaboradores e salva no localStorage.
        insertColaborador(state, colaborador){
            state.colaboradores.push(colaborador);
            const colaboradorJson = JSON.stringify(state.colaboradores);
            localStorage.setItem('infosColaborador', colaboradorJson);

        },
        getLocalStorage(state){
            //Função que puxa o colaborador do localStorage.
            state.colaboradores = localStorage.getItem('infosColaborador') ? JSON.parse(localStorage.getItem('infosColaborador')) : []
        }
        
    }
}
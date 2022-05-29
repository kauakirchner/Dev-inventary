export default {
    namespaced: true,
    state(){
        return{
            itens: []
        }
    },
    mutations:{
        //Função que cadastra item e salva no localStorage.
        insertItem(state, item){
            state.itens.push(item);
            const itemJson = JSON.stringify(state.itens);
            localStorage.setItem('item', itemJson);
        },
        //Função que puxa o item do localStorage.
        getItemLocalStorage(state){
            state.itens = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item'))  : []
        }
    }
}
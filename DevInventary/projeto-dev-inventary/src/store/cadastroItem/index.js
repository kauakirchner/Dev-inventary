export default {
    namespaced: true,
    state(){
        return{
            itens: []
        }
    },
    mutations:{
        //Função que cadastra item e salva no local storage
        insertItem(state, item){
            state.itens.push(item);
            const itemJson = JSON.stringify(state.itens);
            localStorage.setItem('item', itemJson);
            console.log('teste',state.itens);
        },
        //Função que puxa o item do localStorage
        getItemLocalStorage(state){
            state.itens = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item'))  : []
        }
    }
}
export default {
    namespaced: true,
    state(){
        return{
            itens: []
        }
    },
    mutations:{
        insertItem(state, item){
            state.itens.push(item);
            const itemJson = JSON.stringify(state.itens);
            localStorage.setItem('item', itemJson);
        },
        getItemLocalStorage(state){
            state.itens = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item'))  : []
        }
    }
}
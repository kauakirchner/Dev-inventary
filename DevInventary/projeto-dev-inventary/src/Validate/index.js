import {defineRule} from 'vee-validate'

const campoObrigatorio = defineRule('required', campo =>{
    if(!campo || campo.length === 0){
        return 'Campo obrigatório!!'
    }
    return true
})

export {campoObrigatorio}
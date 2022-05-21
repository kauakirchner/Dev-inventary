import {defineRule} from 'vee-validate'

const requiredRule = defineRule('required', campo =>{
    if(!campo || campo.length === 0){
        return 'Campo obrigatório!!'
    }
    return true
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const requiredEmail = defineRule('emailValidation',campo =>{
    if(!campo || campo.length === 0){
        console.log('1')
        return 'Campo obrigatório!!'
    }
    if(!validateEmail(campo)){
        return 'Email inválido!!'
    } 
    return true
})





export {requiredRule, requiredEmail}
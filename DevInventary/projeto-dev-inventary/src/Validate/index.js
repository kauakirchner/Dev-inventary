import {defineRule} from 'vee-validate'

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const requiredRule = defineRule('required', campo =>{
    if(!campo || campo.length === 0){
        return 'Campo obrigatório!!'
    }
    return true
});

const minLength = defineRule('minLength',  (campo, [target]) =>{
    if(!campo || campo.length === 0){
        return 'Campo obrigatório!!'
    }
    console.log('target', target)
    if(campo.length < target ){
        return 'A senha deve conter no mínimo de 8 caracteres'
    }
    return true
});

const requiredEmail = defineRule('emailValidation',campo =>{
    if(!campo || campo.length === 0){
        console.log('1')
        return 'Campo obrigatório!!'
    }
    if(!validateEmail(campo)){
        return 'Email inválido!!'
    } 
    return true
});

const equalPasswords = defineRule('confirmed', (value, [target], ctx) => {
    console.log('ctx', ctx.form)
    if (value === ctx.form[target]) {
      return true;
    }
    return 'Senhas diferentes!!';
  });





export {requiredRule, requiredEmail, equalPasswords, minLength}
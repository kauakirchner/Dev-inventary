import {defineRule} from 'vee-validate'

const validateEmail = (email) => {
    //Função que valida email.
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const requiredRule = defineRule('required', campo =>{
    //Função que torna o campo obrigatório.
    if(!campo || campo.length === 0){
        return 'Campo obrigatório!!'
    }
    return true
});

const minLength = defineRule('minLength',  (campo, [target]) =>{
    //Função que valida se a senha tem ao menos 8 caracteres.
    if(!campo || campo.length === 0){
        return 'Campo obrigatório!!'
    }
    if(campo.length < target ){
        return 'A senha deve conter no mínimo de 8 caracteres'
    }
    return true
});

const requiredEmail = defineRule('emailValidation',campo =>{
    //Função que chama a de validação de email e a torna um campo obrigatório.
    if(!campo || campo.length === 0){
        return 'Campo obrigatório!!'
    }
    if(!validateEmail(campo)){
        return 'Email inválido!!'
    } 
    return true
});

const equalPasswords = defineRule('confirmed', (value, [target], ctx) => {
    //Função que valida se a senha e a senha confirmada são iguais
    if (value === ctx.form[target]) {
      return true;
    }
    return 'Senhas diferentes!!';
  });

  const lengthCep = defineRule('lengthCep', (campo, [target]) =>{
      //Função que define um mínimo de caracteres para o cep
      if(campo.length != target){
          return 'Cep inválido!!'
      }
  })





export {requiredRule, requiredEmail, equalPasswords, minLength, lengthCep}
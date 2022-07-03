// "use strict"


// document.addEventListener('DOMContentLoaded', function (){
//     const form_s = document.getElementById('form');
//     form_s.addEventListener('submit', formSend);

//     async function formSend(e){
//         e.preventDefault();

//         let error_r = formValidate(form);

//         if(error_r === 0){
//             //Костыль
//             var form = document.getElementById("form");
//             form.classList.add('_sending');
//             sleep(2000).then(() => { form.classList.remove('_sending'); });
//             sleep(2000).then(() => { alert('Ваше сообщение доставлено!'); });

//             /*let response = await fetch('',{
//                 method = 'POST',
//                 body:formData
//             });

//             if(response.ok){

//                 let result = await response.json();
//                 alert('result.message');
//                 formPreview.innerHTML = '';
//                 form.reset();

//             }else{
//                 alert('Ошибка');
//             }*/

//         }else{
//             alert('Заполните поля или исправьте ошибки!');
//         }
        


//     }

//     function formValidate(form_s){
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for(let index = 0; index < formReq.length; index++){
//             const input = formReq[index];
//             formRemoveError(input);

//             if(input.classList.contains('_email')){
//                 if(emailTest(input)){
//                     formAddError(input);
//                     error++;
//                 }
//             }else{
//                 if(input.value === ''){
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//         return error
//     }
//     function formAddError(input){
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formRemoveError(input){
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     //Валидация email
//     function emailTest(input){
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
//     function sleep(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//       }
    
// });
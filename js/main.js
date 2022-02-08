// // 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();

// // 2. Настраиваем его
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // Меняем `Адрес сервера` на свой

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function() {
//     console.log('Onload');
//     const result = xhr.response; //  Получаем ответ, это JSON строка
//     const object = JSON.parse(result); // Преобразуем строку в JS объект
//     let newObject = object.map( element => {
//         return{
//             id : element.id,
//             name : element.name, 
//             phone : element.phone, 
//             locationStreet : element.address.street, 
//             locationCode : element.address.zipcode, 
//             locationNumber : element.address.suite,
//         }
//     })
    
//     newObject.map( element => { 
//             const space = element.name.indexOf(' ')
//             element.name = element.name.slice(0,space)
//             element.name = element.name.toUpperCase()
//             return element.name
//     });
//     newObject.map( element => { 
//         element.phone = element.phone.replaceAll('-','').replaceAll('x','')
//         return element.phone
//     });
//     newObject.map( element => { 
//         space = element.locationNumber.indexOf(' ')
//         element.locationNumber = element.locationNumber.slice(space)
//         element.locationNumber = parseInt(element.locationNumber)
//         return element.locationNumber
//     });
//     newObject.map( element => {
//         element.phone = element.phone.split('')
//         let sum = 0;
//         element.phone.forEach( e => {
//             if( e % 2 === 0){
//                 sum += +e
//             }
//         })
//         element.phone = sum;
//         return element.phone;
//     })
//     // function sortedNames(){
//     //     newObject = newObject.sort( (a,b) => a.name - b.name)
//     //     return newObject                             // почему не сортируются по именам???????????????????????
//     // }
//     // sortedNames()

//     newObject.forEach( (element,i) =>{
//         const index = element.address.locationNumber.indexOf('1')
//         if (index != -1){
//             delete newObject[i]
//         }
//         })
        
//     }
//     let sum = 0;
//     newArr = []
//     newObject.forEach( (element) => {
//         newArr += element.id
//         newArr1 = newArr.split('')
//         // newArr2 = newArr1.reduce( (a,b) => a + b)
        
        
//     })
//     newArr1.forEach( element => {
//         sum += +element
//     })
//     console.log('сумма ID всех жильцов',Math.ceil(sum/2));
//     console.log(newObject)
//     console.log(object);  // Выводим результат по необходимости
// };

// // Этот код сработает если мы не получим ответ от сервера
// xhr.onerror = function() {
//   console.error("Запрос не удался");
// };

// // ----------------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------------
// // ----------------------------------------------------------------------------------------




// // let xhr = new XMLHttpRequest();


// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // Меняем `Адрес сервера` на свой


// xhr.send();


// xhr.onload = function() {
//     console.log('Onload');
//     const result = xhr.response; 
//     const object = JSON.parse(result); 
    
//     let secondObject = object.map( element => {
//         return{
//             userId: element.userId,
//             id : element.id,
//             title : element.title, 
//             body : element.body,
//         }
//     })
//     // secondObject = secondObject.map( element => {
//     //     if(  element.title.length > 25){
//     //         delete secondObject[element]
//     //     }
//     //     return secondObject
//     // })
     
    
    
//         secondObject.map( element => {})
    
//     secondObject = secondObject.sort( (a,b)  => {
//         if ( a.body.length > b.body.length ){ 
//             return 1
//         }
//         else if ( a.body.length < b.body.length){
//             return -1
//         }
//         return 0
//     })

//     secondObject = secondObject.forEach( e => { 
//         for (let key in e){
//             if( key == 0){
//                 delete secondObject[e[key]]
//             }
//         }
                                                           
//     })

//     console.log(secondObject);
//     console.log(object); 
//     console.log(JSON.stringify(secondObject))
// };


// xhr.onerror = function() {
//   console.error("Запрос не удался");
// };


// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его
xhr.open('GET', 'http://192.168.0.200:3000/1'); // Меняем `Адрес сервера` на свой

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; //  Получаем ответ, это JSON строка
    const object = JSON.parse(result); // Преобразуем строку в JS объект
    // const f = object.users.name 
    const f = object.users.sort( (a,b) => {
        if( a.name > b.name){
            return 1
        }
        else if( a.name < b.name){
            return -1
        }
        return 0
    })
    
    object.users.forEach( (user) => {
        user.posts = object.posts.filter( post => post.userId === user.id)
    })
    object.posts.forEach( (post) => {
        post.user = object.users.find( user => user.id === post.userId)
    })
    
    
    console.log(object);  // Выводим результат по необходимости
};

// Этот код сработает если мы не получим ответ от сервера
xhr.onerror = function() {
  console.error("Запрос не удался");
};
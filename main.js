console.log("=======================Asynchronous====================")

function asynchronous(){
    new Promise(resolve => {
        setTimeout(() => {
            resolve("h")
        }, 1000)
    })
        .then(value => {
            console.log(value)
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve("e")
                }, 1000)
            })
            
            .then(value => {
                console.log(value)
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve("l")
                    }, 1000)
                })
    
                .then(value => {
                    console.log(value)
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve("l")
                        }, 1000)
                    })
    
                    .then(value => {
                        console.log(value)
                        return new Promise(resolve => {
                            setTimeout(() => {
                                resolve("o")
                            }, 1000)
                        })
    
                        .then(value => {
                            console.log(value)
                        })
                    })
                })
            })
        })
    
    // або можна трішки скоротити код, створишви функцію: (don't forget about RETURN!!!)
    
    setTimeout(() => {
        let promiseFn = (letter) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(letter)
                }, 1000)
            })
        }
        
        new Promise(resolve => {
            setTimeout(() => {
                resolve(" ")
            }, 1000)
        })

            .then(value => {
                console.log(value)
                return promiseFn("w")
            })
            .then(value => {
                console.log(value)
                return promiseFn("o")
            })
            .then(value => {
                console.log(value)
                return promiseFn("r")
            })
            .then(value => {
                console.log(value)
                return promiseFn("l")
            })
            .then(value => {
                console.log(value)
                return promiseFn("d")
            })
            .then(value => {
                console.log(value)
                return promiseFn(":)")
            })
            .then(value => {
                console.log(value)
            })
    }, 5000)
}


// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json())
//     .then(user => fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id))
//     .then(response => response.json())
//     .then(posts => fetch("https://jsonplaceholder.typicode.com/comments?postId=" + posts[0].id))
//     .then(response => response.json())
//     .then(comments => {console.log(comments)})

// async function asy(){
//     let user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(value => value.json())
//     let posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id).then(value => value.json())
//     let comments = await fetch("https://jsonplaceholder.typicode.com/comments?postId=" + posts[0].id).then(value => value.json())
//     return [user, posts, comments]
// }
// asy().then(value => console.log(value))

// function user(){
//     return fetch("https://jsonplaceholder.typicode.com/users")
//         .then(value => value.json())
//         .then(value => {
//             return value
//         })
// }
// function posts() {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(value => value.json())
//         .then(value => {
//             return value
//         })
// }
// function comments() {
//     return fetch("https://jsonplaceholder.typicode.com/comments")
//         .then(value => value.json())
//         .then(value => {
//             return value
//         })
// }
// let promise = Promise.all([user(), posts(), comments()])
// promise.then(value => console.log(value[1]))

// - Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let input = document.getElementById("input")
let button = document.getElementById("button")
let text = document.createElement("h3")
document.body.appendChild(text)

let letter = (x) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x)
        }, 1000)
    })
}

button.onclick = async function () {
    for (let i = 0; i < input.value.length; i++) {
        await letter(input.value[i])
        .then(value => {
            console.log(value)
            text.innerHTML += value
        })
    }
}
// -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//         console.log(users)
//     })


//  За допомогою document.createElement вивести їх в браузер. 

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(value => value.json())
//     .then(users => {
//         for (const user of users) {
//             let container = document.createElement("div")
//             let userName = document.createElement("h4")
//             userName.innerText = user.name
//             container.appendChild(userName)
//             document.body.appendChild(container)
//         }
//     })

//  Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(value => value.json())
//     .then(users => {
//         let wrap = document.createElement("div")
//         for (const user of users) {
//             let container = document.createElement("div")
//             let name = document.createElement("h1")
//             let userName = document.createElement("h2")
//             let email = document.createElement("h3")
//             name.innerText = user.name
//             userName.innerText = user.username
//             email.innerText = user.email
//             container.appendChild(name)
//             container.appendChild(userName)
//             container.appendChild(email)
//             wrap.appendChild(container)
//         }
//         document.body.appendChild(wrap)
//     })

// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(value => value.json())
//     .then(posts => {
//         console.log(posts)
//     })

// За допомогою document.createElement вивести їх в браузер. 

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//             let p = document.createElement("h3")
//             p.innerText = post.title
//             document.body.appendChild(p)
//         }
//     })

// -при помощи fetch (как в примере) получить от jsonplaceholder все posts. 
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. 
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

// fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then(value => value.json())
//     .then(post => fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id))
//     .then(value => value.json())
//     .then(comments => console.log(comments))
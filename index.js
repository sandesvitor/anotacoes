class User {
    #name;
    #email;

    constructor(name, email){
        this.#name = name
        this.#email = email
    }

    getEmail(){
        console.log(this.#email)
    }

    setEmail(newEmail){
        this.#email = newEmail
    }
}

// class MathForDumies {
//     static getPiValue(){
//         return 3.145143
//     }

//     static sum(a, b){
//         return a + b
//     }
// }

// jonas é uma instância de Human
const jonas = new User("jonas", "jonas@gmail.com")
// jonas.getEmail()
// jonas.setEmail("novoemail@gmail.com")

import axios from 'axios';

export class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

export class UserClient {
    /**
     *
     */
    constructor() {
        
    }

    getAllUsers = async () => {
    
            const response = await axios.get('https://curriculum-vitae-39869-default-rtdb.firebaseio.com/users/user1.json?print=pretty')
                .then((data) => {
                    return data;
                });
            console.log('response', response.data)
            return new User(response.data.name, response.data.email);
       
    }

}

import fs from 'fs';
import path from 'path';

const USERS_FOLDER = 'users';
const USERS = 'users';

const usersDirectory = path.join(process.cwd(), USERS);

console.log("USER DIR", usersDirectory);

/**
 * 
 * @param {string} name 
 * @returns boolean
 */
export function addUser(name) {
    
    //if(!fs.access(USERS_FOLDER)) return false;

}


export function getUsers() {
    //if(!fs.access(USERS_FOLDER)) return false;

    fs.readFile(usersDirectory+'/users.json', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        console.log(JSON.parse(data));

        return data;
   })
}


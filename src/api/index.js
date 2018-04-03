
interface UserInfoModel {
    id: string,
    company: string,
    depart: string,
    clas: string,
    email: string,
}



/**
 * 
 * 
 * @export
 * @param {UserInfoModel} user 
 */
export async function register(user) {
    try{

    }catch(error){
        console.error('api::register::error ',error)
    }
}
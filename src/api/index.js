
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
export async function sendUserInfo(user) {
    try {
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: user,
        });

    } catch (error) {
        console.error('api::register::error ', error)
    }
}
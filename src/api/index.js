
import UserInfo from './models';
export { UserInfo };

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
        const res = await fetch('https://mywebsite.com/endpoint/', {
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


/**
 * 
 * get Announcement from server
 * 
 * @export
 */
export async function getAnnouncement() {
    try {
        const res = await fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: user,
        });

    } catch (error) {
        console.error('api::getAnnouncement::error ', error)
    }
}


/**
 * get program from server
 * 
 * @export
 */
export async function getProgram() {
    try {
        const res = await fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: user,
        });

    } catch (error) {
        console.error('api::getProgram::error ', error)
    }
}
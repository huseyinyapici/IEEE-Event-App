
import UserInfo from './models';
export { UserInfo };

interface UserInfoModel {
    id: string,
    name: string,
    institution: string,
    dept: string,
    grade: string,
    email: string,
    phone: string,
}


/**
 * 
 * 
 * @export
 * @param {UserInfoModel} user 
 */
export async function sendUserInfo(user) {
    try {
        // console.error(user)

        const res = await fetch('http://18.219.156.91:3001/dev/v0.1_alpha/participants/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        const json = await res.json();

        return json.id;

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
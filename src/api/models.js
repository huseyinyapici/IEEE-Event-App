






/**
 * 
 * {
    "name": "Muhammet Demirci",
    "institution": "ODTÜ",
    "dept": "CENG",
    "grade": "2",
    "email": "assdad@ac.com",
    "phone": ""
}
 * 
 * 
/**
 * 
 * 
 * @export
 * @class UserInfo
 * @extends {Object}
 */
export default class UserInfo extends Object {

    id: string;
    name: string;
    institution: string;
    dept: string;
    grade: string;
    email: string;
    phone: string;

    constructor(props) {
        super(props);

        this.id = "";
        this.institution = "";
        this.dept = "";
        this.grade = "";
        this.email = "";
        this.phone = "";
        
    }
}


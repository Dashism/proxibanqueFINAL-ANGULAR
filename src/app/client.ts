// Définition des attributs liés à un client.
export class Client {
        id: number;
        serialNumber: string;
        lastname: string;
        firstname: string;
        phone: string;
        email: string;
        constructor (serialNumber: string, firstname: string, lastname: string, phone: string , email: string , id: number) {
            this.serialNumber = serialNumber;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.phone = phone;
            this.id = id;
        }
}




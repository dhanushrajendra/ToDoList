import axios from 'axios';

export const Configuration = {
    'ApplicationApiDomain': 'https://tiny-list.herokuapp.com/',
};

class RestApi {
    constructor() {
        this.apiDomain = Configuration.ApplicationApiDomain;
    }

    getApplicationDomain() {
        return this.apiDomain;
    }

    create(createUrl, parameters) {
        return axios.post(createUrl, parameters);
    }

    update(updateUrl, parameters) {
        return axios.patch(updateUrl, parameters);
    }

    delete(deleteUrl, parameters) {
        return axios.delete(deleteUrl, parameters);
    }

    list(listUrl) {
        return axios.get(listUrl);
    }
}

class ToDoList extends RestApi {

    constructor(id) {
        super();
        this.id = id;
    }

    list() {
        const domain = super.getApplicationDomain();
        const listUrl = `${domain}api/v1/users/${this.id}/tasks`;
        return super.list(listUrl);
    }
}

export default {
    ToDoList,
};

export default class DropboxService {
    private readonly CLIENT_ID: string = '';

    private dbx: any;

    constructor() {
        const fetch = require('isomorphic-fetch');
        const Dropbox = require('dropbox').Dropbox;
        this.dbx = new Dropbox({ accessToken: 'YOUR_ACCESS_TOKEN_HERE', fetch });
    }
}

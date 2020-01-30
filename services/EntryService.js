import Api from './Api'

export default {
    getEntries() {
        
        return Api().post('/entries/')
    },
    
    postEntry(form) {
        
        const postData = {
            name: form.name,
            email: form.email
        }
        return Api().put('/entries/', postData)
    }
}

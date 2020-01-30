import Api from './Api'

export default {
    getEntries() {
        return Api().post('/entries/')
    },
    
    postEntry(form) {
        
        const postData = {
            name: form.name,
            email: form.email,
            // gdpr: form.checked
        }
        return Api().put('/entries/', postData)
    }
}

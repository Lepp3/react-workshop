const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
   async getAll(){
        const response = await fetch(baseUrl);
        const result = await response.json();
        const users = Object.values(result);
        return users
    },
    async getOne(userId){
        const response = await fetch(`${baseUrl}/${userId}`);
        const user = await response.json();

        return user;
    },

    async create(userData){
        const {country,city,street,streetNumber,...postData} = userData;

        postData.address = {country,city,street,streetNumber};
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();
        
        

        const response = await fetch(baseUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        const result = await response.json();

        return result
    },
    async deleteOne(userId){
        const response = await fetch(`${baseUrl}/${userId}`,{
            method: 'DELETE',
        });

        const result = await response.json();

        return result
    }
}
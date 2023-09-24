import modelUser from "../model/user.js";

export const serverTest = async (request, response) => {
    try{
        response.status(200).json({message: "Server is up and runnig"})
    }catch (error){
        response.status(409).json({message: "Something went wrong"})
    }
}

export const addUser = async (request, response) => {
    const userData = request.body;
    const verifyData = new modelUser(userData);
    console.log(verifyData)
    console.log(request.body)
    try{
        await verifyData.save()
        response.status(201).json({verifyData, message: "user added successfuly"});
    } catch (error) {
        response.status(409).json({messaverifyDatage: error.message});
        console.log("error while adding user data", error);
    }
}

export const getUser = async (request, response) => {
    try {
        const query = modelUser.where({username: request.params.user})
        const user = await query.findOne()
        user===null ? response.status(404).json({message: `NOT FOUND :( ${request.params.user}`}) : response.status(200).json(user) 
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}

export const getUsers = async (request, response) => {
    try{
        const users = await modelUser.find();
        response.status(200).json(users)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}

export const deleteUserAc = async (request, response) => {
    try {
        const query = modelUser.where({username : request.params.user})
        const user = await query.deleteOne();
        response.status(201).json({message: `user a/c deleted ${request.params.user}`})
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}
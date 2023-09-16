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
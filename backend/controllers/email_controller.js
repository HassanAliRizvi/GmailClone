import { Email } from "../Models/email_model.js";

export const createEmail = async(req,res) =>{
    try{

        const userId = req.id;
        const {to,subject,message} = req.body;
        if(!to || !subject || !message) return res.status(400).json({message: "All fields are required", success:false});

        const email = await Email.create({
            to,
            subject,
            message,
            userId
        });

        return res.status(200).json({
            email
        })

    }

    catch(error) {
        console.log(error);
    }
}

export const deleteEmail = async(req,res) =>{
    try{

        const email_id = req.params.id;
        if (!email_id) return res.status(400).json({message:"Email Id is required!"});


        const email = await Email.findOneAndDelete(email_id);

        if (!email) return res.status(400).json({message:"Email Id is not found!"});

        return res.status(200).json({
            message: "Email was deleted successfully!"
        })

    }

    catch(error) {
        console.log(error);
    }
}


export const getAllEmailsById = async(req,res) => {
    try {

        const userId = req.id;

        const emails = await Email.find({userId});

        return res.status(200).json({emails});

    }

    catch(error) {
        console.log(error);
    }


}
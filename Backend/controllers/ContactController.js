import ContactModel from "../models/Contact.js"


export const Contact = async (request, response) => {
    const { first_name, last_name, email, message } = request.body

    try {
        if (!first_name || !last_name || !email || !message) {
            return response.status(400).json({
                error: true,
                success: false,
                message: "Please Provide the full information"
            })
        }

        const mailExists = await ContactModel.findOne({email})
        if (mailExists) {
            return response.status(400).json({
                success: false,
                error: true,
                message: "Mail already exists"
            })
        }

        const newConatct = new ContactModel({
            first_name,
            last_name,
            email,
            message
        })
       await newConatct.save()
        return response.status(201).json({
            success: true,
            error: false,
            message: "Data added Successfully",
            data: newConatct
        })
    } catch (error) {
        console.error("Error while adding quote:", error);
        response.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}
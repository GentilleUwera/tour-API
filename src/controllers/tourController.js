import TourInfos from "../models/tours";
class TourController{
    //create tour in db
    static async createTour(req,res){
        req.body.user= req.user._id;
        const tour= await TourInfos.create(req.body); // return generated data
        if(!tour){
            return res.status(404).json({error:"tour not registered"})
        }
        return res
        .status(200)
        .json({message:"Tour created successfully" , data: tour});
    }
    //get all tours
    static async getAllTours(req,res){
        const tours= await TourInfos.find(); // return generated data
        if(!tours){
            return res.status(404).json({error:"no tours registered"})
        }
        return res
        .status(200)
        .json({message:"Successfully retrieved tours" , data: tours});
    }

    //getting one specific tour

    static async getOneTour(req,res){
        const tour = await TourInfos.findById(req.params.id);
        if(!tour){
            return res.status(404).json({error: "tour not found"});
        }
        return res
           .status(200)
           .json({message: "tour not found successfully", data:tour})
           
    }

    //delete a tour

        static async deleteOneTour(req,res) {
            const tour = await TourInfos.findByIdAndDelete(req.params.id);
            if(!tour){
                return res.status(404).json({error: "tour not found"});
            }
            return res
               .status(200)
               .json({message: "tour deleted successfully", data:tour})
               
    }

}
export default TourController;
// controller is the one directlly connected on database
// controller is where all the action are done
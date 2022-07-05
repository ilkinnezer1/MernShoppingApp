import SaleDetail from "../models/Sale.js"

export const createSalingOrder = async (req, res) => {
    const createNewSaleOrder = new SaleDetail(req.body)
    try{
        const createdSaleOrder = await createNewSaleOrder.save()
        res.status(200).json(createdSaleOrder)
    }catch(err){
        res.status(500).json(err)
    }
}

export const updateSalingOrder = async (req, res) => {
    try{
        const updatedSalingOrder = await SaleDetail.findByIdAndUpdate(req.params.id , {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedSalingOrder)

    }catch(error){
        res.status(500).json(error)
    }
}

export const deleteSalingOrder = async (req, res) => {
    try{
        await SaleDetail.findByIdAndDelete(req.params.id);
        res.status(200).json("Your sale order succesfully deleted.")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getSingleSaleOrder= async (req, res) => {
    try{
       const orderData = await SaleDetail.find({userId: req.params.id})
       res.status(200).json(orderData)
    }catch(err){
        res.status(500).json(err)
    }
}
export const getAllSalingOrder = async (req, res) => {
    try{ 
        const salingOrder = await SaleDetail.find()
        res.status(200).json(salingOrder)
    }catch(error){
        res.status(500).json(error)
    }
}
export const profitOfSaling = async (req, res) => {
    const date = new Date();
    const lsMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lsMonth.getMonth() - 1));
  
    try {
      const profit = await SaleDetail.aggregate([
        { $match: { createdAt: { $gte: prevMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(profit);
    } catch (err) {
      res.status(500).json(err);
    }
};
  
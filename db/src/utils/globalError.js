
export const globalError = (err, req, res, next)=>{
    res.status(500).json({message:err.message, success:false})

}
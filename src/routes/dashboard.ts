import {Request,Response,Router} from 'express'

const router = Router();

// @route GET /auth
// @desc view dashboard
// @access PROTECTED
router.get('/',(req:Request,res:Response)=>{
  res.sendStatus(200)
})


export default router;
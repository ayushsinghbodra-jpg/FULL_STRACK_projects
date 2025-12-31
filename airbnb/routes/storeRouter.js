const path =require ("path");
const express =require ("express");
const storeRouter= express.Router();
const rootDir=require ("utils/pathUtil");

storeRouter.get("/",(req,res,next)=>{
    res.render("home")
})
const db= require('../db.js')
const express=require('express')

const getLocations = (req,res) => {
    let q= 'SELECT location FROM `job_post` GROUP BY location';

    db.query(q,(err,data)=>{
        if(err)
            {
                return res.json(err)
            }
            else
            {
                return res.json(data)
            }
    })
}

module.exports ={getLocations}
const db= require('../db.js')
const express=require('express')

const getJobapplications = (req,res) => {
    let q= 'SELECT a. * ,b.category_name,c.user_name FROM `job_application` a,job_category b,user_manage c WHERE a.job_category_id=b.job_category_id AND a.user_id=c.user_id;';

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

const getJobapplication = (req,res) => {
    let q= 'SELECT * FROM `job_application` WHERE app_id =?'
    db.query(q,[req.params.id],(err,data)=>{
        console.log(req.params.id)
        if(err)
            {
                console.log(err)
                return res.json(err)
            }
        else
        {
            return res.json(data[0])
        }
    })
}

const deleteJobapplication = (req,res) => {
    let q= 'DELETE FROM `job_application` WHERE app_id=?'
    db.query(q,[req.params.id],(err,data)=>{
        if(err)
            {
                return res.json(err)
            }
            else
            {
                return res.json("Record Has been deleted")
            }
    })
}
const AddJobapplication = (req,res) => {
    console.log(req.body)
    let q = 'INSERT INTO `job_application`(`job_category_id`, `user_id`, `resume`, `status`, `entry_dt`, `entry_by`, `role`) VALUES (?)'
    const values = [
        req.body.job_category_id,
        req.body.user_id,
        req.file?.filename,
        req.body.status,
        new Date,
        req.body?.entry_by || 1,
        req.body?.role || 1,
    ]
    db.query(q,[values],(err,data)=>{
        if(err)
            {
                console.log(err)
                return res.json(err)
            }
            else
            {
                return res.json("Record Has been Inserted")
            }
    })
}
const updateJobapplication = (req,res) => {
    let q = 'UPDATE `job_application` SET `job_category_id`=?,`user_id`=?,`resume`=?,`status`=?,`entry_by`=?,`updated_dt`=?,`role`=? WHERE app_id=?'
    const values = [
        req.body.job_category_id,
        req.body.user_id,
        req.file?.filename,
        req.body.status,
        req.body.entry_by,
        new Date,
        req.body.role
    ]
    db.query(q,[...values,req.params.id],(err,data)=>{
        if(err)
            {
                return res.json(err)
            }
            else
            {
                return res.json("Record has been updated")
            }
    })
}

module.exports = {getJobapplications,getJobapplication,deleteJobapplication,AddJobapplication,updateJobapplication}
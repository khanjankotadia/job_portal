const db= require('../db.js')
const express=require('express')

const getJobs = (req,res) => {
    let q= 'SELECT a. * ,b.company_name,c.category_name FROM `job_post` a,company_manage b,job_category c WHERE a.company_id=b.company_id AND a.job_category_id=c.job_category_id;';

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

const getJob = (req,res) => {
    let q= 'SELECT * FROM `job_post` WHERE 	job_id=?'
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

const deleteJob = (req,res) => {
    let q= 'DELETE FROM `job_post` WHERE job_id=?'
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
const AddJob = (req,res) => {
    let q = 'INSERT INTO `job_post`( `company_id`, `job_title`, `job_desc`, `job_category_id`, `location`, `salary`, `status`, `entry_dt`, `entry_by`, `role`) VALUES (?)'
    const values = [
        req.body.company_id,
        req.body.job_title,
        req.body.job_desc,
        req.body.job_category_id,
        req.body.location,
        req.body.salary,
        req.body.status,
        new Date,
        req.body?.entry_by || 1,
        req.body?.role || 1
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
const updateJob = (req,res) => {
    let q = 'UPDATE `job_post` SET `company_id`=?,`job_title`=?,`job_desc`=?,`job_category_id`=?,`location`=?,`salary`=?,`status`=?,`entry_by`=?,`updated_dt`=?,`role`=? WHERE job_id=?'
    const values = [
        req.body.company_id,
        req.body.job_title,
        req.body.job_desc,
        req.body.job_category_id,
        req.body.location,
        req.body.salary,
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

module.exports = {getJobs,getJob,deleteJob,AddJob,updateJob}
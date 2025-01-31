const db= require('../db.js')
const express=require('express')

const getJobcategories = (req,res) => {
    let q= 'SELECT * FROM `job_category`';

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

const getJobcategory = (req,res) => {
    let q= 'SELECT * FROM `job_category` WHERE job_category_id=?'
    db.query(q,[req.params.id],(err,data)=>{

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

const deleteJobcategory = (req,res) => {
    let q= 'DELETE FROM `job_category` WHERE job_category_id=?'
    db.query(q,[req.params.id],(err,data)=>{
        if(err)
            {
                console.log(err)
                return res.json(err)
            }
            else
            {
                return res.json("Record Has been deleted")
            }
    })
}
const AddJobcategory = (req,res) => {
    let q = 'INSERT INTO `job_category`(`category_name`, `description`, `location`, `salary`, `entry_dt`, `entry_by`, `role`, `status`) VALUES (?)'
    const values = [
        req.body.category_name,
        req.body.description,
        req.body.location,
        req.body.salary,
        new Date,
        req.body?.entry_by || 1,
        req.body?.role || 1,
        req.body.status
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
const updateJobcategory = (req,res) => {
    let q = 'UPDATE `job_category` SET `category_name`=?,`description`=?,`location`=?,`salary`=?,`entry_by`=?,`updated_dt`=?,`role`=?,`status`=? WHERE job_category_id=?'
    const values = [
        req.body.category_name,
        req.body.description,
        req.body.location,
        req.body.salary,
        new Date,
        req.body.entry_by,
        req.body.role,
        req.body.status
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

module.exports = {getJobcategories,getJobcategory,deleteJobcategory,AddJobcategory,updateJobcategory}
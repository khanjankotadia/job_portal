const db= require('../db.js')
const express=require('express')

const getCompanies = (req,res) => {
    let q= 'SELECT a. * ,b.category_name FROM `company_manage` a,company_category b WHERE a.category_id=b.category_id;';

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

const getCompany = (req,res) => {
    const companyId = req?.userid || req?.params?. id
    let q= 'SELECT * FROM `company_manage` WHERE company_id=?'
    db.query(q,companyId,(err,data)=>{
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

const deleteCompany = (req,res) => {
    let q= 'DELETE FROM `company_manage` WHERE company_id=?'
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
const AddCompany = (req,res) => {
    let q = 'INSERT INTO `company_manage`(`company_name`, `category_id`, `address`, `password`, `email`, `mobile`, `status`, `entry_dt`, `entry_by`, `role`) VALUES (?)'
    const values = [
        req.body.company_name,
        req.body.category_id,
        req.body.password,
        req.body.address,
        req.body.password,
        req.body.email,
        req.body.mobile,
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
const updateCompany = (req,res) => {
    let q = 'UPDATE `company_manage` SET `company_name`=?,`category_id`=?,`address`=?,`password`=?,`email`=?,`mobile`=?,`status`=?,`entry_by`=?,`updated_dt`=?,`role`=? WHERE company_id=?'
    const values = [
        req.body.company_name,
        req.body.category_id,
        req.body.password,
        req.body.address,
        req.body.password,
        req.body.email,
        req.body.mobile,
        req.body.status,
        new Date,
        req.body.entry_by,
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

module.exports = {getCompanies,getCompany,deleteCompany,AddCompany,updateCompany}
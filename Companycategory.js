const db= require('../db.js')
const express=require('express')

const getCategories = (req,res) => {
    let q= 'SELECT * FROM `company_category`';

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

const getCategory = (req,res) => {
    let q= 'SELECT * FROM `company_category` WHERE category_id=?'
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

const deleteCategory = (req,res) => {
    let q= 'DELETE FROM `company_category` WHERE category_id=?'
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
const AddCategory = (req,res) => {
    let q = 'INSERT INTO `company_category`( `category_name`, `description`, `entry_dt`, `entry_by`, `role`, `status`) VALUES (?)'
    const values = [
        req.body.category_name,
        req.body.description,
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
const updateCategory = (req,res) => {
    let q = 'UPDATE `company_category` SET `category_name`=?,`description`=?,`entry_by`=?,`updated_dt`=?,`role`=?,`status`=? WHERE category_id=?'
    const values = [
        req.body.category_name,
        req.body.description,
        req.body.entry_by,
        new Date,
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

module.exports = {getCategories,getCategory,deleteCategory,AddCategory,updateCategory}
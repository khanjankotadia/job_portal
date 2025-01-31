const db= require('../db.js')
const express=require('express')

const getAdmins = (req,res) => {
    let q= 'SELECT * FROM `admin_login`';

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

const getAdmin = (req,res) => {
    const adminId = req?.userid || req?.params?. id
    let q= 'SELECT * FROM `admin_login` WHERE admin_id=?'
    db.query(q, adminId,(err,data)=>{
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

const deleteAdmin = (req,res) => {
    let q= 'DELETE FROM `admin_login` WHERE admin_id=?'
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
const AddAdmin = (req,res) => {
    let q = 'INSERT INTO `admin_login`( `email`, `password`, `entry_dt`, `entry_by`, `role`, `last_login`, `status`) VALUES (?)'
    const values = [
        req.body.email,
        req.body.password,
        new Date,
        req.body.entry_by||1,
        req.body?.role || 1,
        new Date,
        req.body?.status || 1,
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
const updateAdmin = (req,res) => {
    let q = 'UPDATE `admin_login` SET `email`=?,`password`=?,`entry_by`=?,`role`=?,`last_login`=?,`updated_dt`=?,`status`=? WHERE company_id=?'
    const values = [
        req.body.email,
        req.body.password,
        new Date,
        req.body.entry_by||1,
        req.body.role,
        new Date,
        req.body.status,
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

module.exports = {getAdmins,getAdmin,deleteAdmin,AddAdmin,updateAdmin}
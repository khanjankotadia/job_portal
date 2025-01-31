const db= require('../db.js')
const express=require('express')

const getUsers = (req,res) => {
    let q= 'SELECT * FROM `user_manage`';

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

const getUser = (req,res) => {
    let q= 'SELECT * FROM `user_manage` WHERE user_id=?'
    db.query(q,[req.params.id],(err,data)=>{
        console.log(req.params.id)
        if(err)
            {
                return res.json(err)
            }
        else
        {
            return res.json(data[0])
        }
    })
}

const deleteUser = (req,res) => {
    let q= 'DELETE FROM `user_manage` WHERE user_id=?'
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
const AddUser = (req,res) => {
    let q = 'INSERT INTO `user_manage`( `user_name`, `password`, `email`, `mobile`, `resume`, `role`, `status`, `entry_dt`, `entry_by`) VALUES (?)'
    const values = [
        req.body.user_name,
        req.body.password,
        req.body.email,
        req.body.mobile,
        req.file?.filename,
        req.body?.role || 1,
        req.body.status,
        new Date,
        req.body?.entry_by || 1,
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
const updateUser = (req,res) => {
    let q = 'UPDATE `user_manage` SET `user_name`=?,`password`=?,`email`=?,`mobile`=?,`resume`=?,`role`=?,`status`=?,`entry_by`=?,`updated_dt`=? WHERE user_id=?'
    const values = [
        req.body.user_name,
        req.body.password,
        req.body.email,
        req.body.mobile,
        req.file?.filename,
        req.body.role,
        req.body.status,
        req.body.entry_dt,
        req.body.entry_by,
        new Date
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

module.exports = {getUsers,getUser,deleteUser,AddUser,updateUser}
const db= require('../db.js')
const express=require('express')

const getSkills = (req,res) => {
    let q= 'SELECT a. * ,b.category_name FROM `manage_skill` a,company_category b WHERE a.category_id=b.category_id;';

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

const getSkill = (req,res) => {
    let q= 'SELECT * FROM `manage_skill` WHERE skill_id=?'
    db.query(q,[req.params.id],(err,data)=>{
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

const deleteSkill = (req,res) => {
    let q= 'DELETE FROM `manage_skill` WHERE skill_id=?'
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
const AddSkill = (req,res) => {
    console.log(req.body)
    let q = 'INSERT INTO `manage_skill`( `skill_name`, `category_id`, `description`, `entry_dt`, `entry_by`, `status`) VALUES (?)'
    const values = [
        req.body.skill_name,
        req.body.category_id,
        req.body.description,
        new Date,
        req.body?.entry_by || 1,
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
const updateSkill = (req,res) => {
    let q = 'UPDATE `manage_skill` SET `skill_name`=?,`category_id`=?,`description`=?,`entry_by`=?,`updated_dt`=?,`status`=? WHERE skill_id=?'
    const values = [
        req.body.skill_name,
        req.body.category_id,
        req.body.description,
        req.body.entry_by,
        new Date,
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

module.exports = {getSkills,getSkill,deleteSkill,AddSkill,updateSkill}
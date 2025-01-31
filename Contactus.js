const db= require('../db.js')
const express=require('express')

const getContacts = (req,res) => {
    let q= 'SELECT * FROM `contact_us`';

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

const getContact = (req,res) => {
    let q= 'SELECT * FROM `contact_us` WHERE contact_id =?'
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

const deleteContact = (req,res) => {
    let q= 'DELETE FROM `contact_us` WHERE contact_id=?'
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
const AddContact = (req,res) => {
    let q = 'INSERT INTO `contact_us`( `email_id`, `whatsapp_no`, `contact_no`, `Address1`, `Address2`, `state`, `country`, `facebook_link`, `instagram_link`, `linkedin_link`) VALUES (?)'
    const values = [
        req.body.email_id,
        req.body.whatsapp_no,
        req.body.contact_no,
        req.body.Address1 ,
        req.body.Address2,
        req.body.state,
        req.body.country,
        req.body.facebook_link,
        req.body.instagram_link,
        req.body.linkedin_link
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
const updateContact = (req,res) => {
    let q = 'UPDATE `contact_us` SET `email_id`=?,`whatsapp_no`=?,`contact_no`=?,`Address1`=?,`Address2`=?,`state`=?,`country`=?,`facebook_link`=?,`instagram_link`=?,`linkedin_link`=? WHERE contact_id=?'
    const values = [
        req.body.email_id,
        req.body.whatsapp_no,
        req.body.contact_no,
        req.body.Address1 ,
        req.body.Address2,
        req.body.state,
        req.body.country,
        req.body.facebook_link,
        req.body.instagram_link,
        req.body.linkedin_link
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

module.exports = {getContacts,getContact,deleteContact,AddContact,updateContact}
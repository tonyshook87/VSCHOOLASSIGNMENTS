const express = require('express');
const bountyRouter = express.Router();
const Bounties = require("../Model/bounties");



  bountyRouter.get("/",async (req, res) => {
    try {
      const bounties = await Bounties.find({})
      res.status(200).send (bounties)  
    } catch (error) {
      console.error(error)
    }
    
  });

bountyRouter.post("/", async (req, res) => {
  try{
    const newBounty = new Bounties(req.body)
    const result = await newBounty.save()
    res.status(201).send(result)
  } catch (error) {
    console.error(error)
  }
})

bountyRouter.put("/:id", async(req, res) => {
  try{
    const updatedBounty = await Bounties.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!updatedBounty) return res.status(404).send("bounty not found")
    res.send(updatedBounty)
  } catch (error) {
    console.error(error)
  }
})

bountyRouter.delete("/:id", async(req, res) => {
  try{
    const deletedBounty = await Bounties.findByIdAndDelete(req.params.id)
    if (!deletedBounty) return res.status(404).send("bounty not found")
    res.send(deletedBounty)
  } catch (error) {
    console.error(error)
  }

})


  module.exports = bountyRouter
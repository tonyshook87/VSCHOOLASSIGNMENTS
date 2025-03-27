const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");


const bounties = [
    {
      firstName: "Marneg",
      lastName: "Folstock",
      living: true,
      amount: 100,
      type: "Jedi",
      _id: uuidv4(),
    },
    {
      firstName: "Tarenth",
      lastName: "Vortex",
      living: false,
      amount: 200,
      type: "Sith",
      _id: uuidv4(),
    },
    {
      firstName: "Zethara",
      lastName: "Arvax",
      living: true,
      amount: 300,
      type: "Sith",
      _id: uuidv4(),
    },
  ];

  bountyRouter.get("/", (req, res) => {
    res.send(bounties)
  });

bountyRouter.post("/", (req, res) => {
const newBounty= req.body
newBounty._id = uuidv4()
bounties.push(newBounty)
res.send("bounty added successfully")
})

bountyRouter.put("/:id", (req, res) => {
  const updatedBounty = req.body
  const id = req.params.id
  const index = bounties.findIndex(bounty => bounty._id === id)

  // if (index === -1) {
  //   return res.status(404).send("Bounty not found")
  // }

  bounties[index] = {...bounties[index],...updatedBounty }
  res.send("bounty updated successfully")
})

bountyRouter.delete("/:id", (req, res) => {
const deletedBounty = req.body
  const id = req.params.id
  const index = bounties.findIndex(bounty => bounty._id === id)
  bounties.splice(index, 1)
  res.send("bounty deleted successfully")
})


  module.exports = bountyRouter
import React, { useState, useEffect } from "react";

export default function BountyForm({ addBounty, bounty = {} }) {
 const [formData, setFormData] = useState({
 firstName: bounty.firstName || "",
 lastName: bounty.lastName || "",
 living: bounty.living !== undefined ? bounty.living : true,
 amount: bounty.amount || "",
 type: bounty.type || "Sith",
 });

 useEffect(() => {
 if (bounty && bounty._id) {
 setFormData({
 firstName: bounty.firstName || "",
 lastName: bounty.lastName || "",
 living: bounty.living !== undefined ? bounty.living : true,
 amount: bounty.amount || "",
 type: bounty.type || "Sith",
 });
 }
 }, [bounty]);

 function handleChange(e) {
 const { name, value, type, checked } = e.target;
 setFormData((prevFormData) => ({
 ...prevFormData,
 [name]: type === "checkbox" ? checked : value,
 }));
 }

 function handleSubmit(e) {
 e.preventDefault();
 addBounty(formData);
 setFormData({
 firstName: bounty.firstName || "",
 lastName: bounty.lastName || "",
 living: bounty.living !== undefined ? bounty.living : true,
 amount: bounty.amount || "",
 type: bounty.type || "Sith",

 })
 }

 return (
 <main className="p-4 flex-row justify-center">
 <h2 className="text-2xl text-gray-400 font-bold mb-4 text-center font-Martian">
 People to Kill
 </h2>
 <div className="bg-gray-800 shadow-md rounded px-6 py-6">
 <form onSubmit = {handleSubmit}>
 <input
 type="text"
 name="firstName"
 value={formData.firstName}
 onChange = {handleChange}
 placeholder="First Name"
 className="mb-2 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500"
 required
 />
 <input
 type="text"
 name="lastName"
 value={formData.lastName}
 onChange = {handleChange}
 placeholder="Last Name"
 className="mb-2 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500"
 required
 />
 <label className="block text-gray-500 mb-2">
 Living:
 <input
 type="checkbox"
 name="living"
 checked={formData.living}
 onChange = {handleChange}
 className="ml-2"
 />
 </label>
 <input
 type="number"
 name="amount"
 value={formData.amount}
 onChange = {handleChange}
 placeholder="Bounty Amount"
 className="mb-2 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500"
 required
 />
 <select
 name="type"
 value={formData.type}
 onChange = {handleChange}
 className="mb-4 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500"
 >
 <option value="Sith">Sith</option>
 <option value="Jedi">Jedi</option>
 </select>
 <button
 type="submit"
 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
 >
 {bounty._id ? "Update Bounty" : "Add Bounty"}
 </button>
 </form>
 </div>
 </main>
 );
}
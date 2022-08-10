var info = {
    name: "Shivam Garg",
    age: 21,
    Address: {city:"Muzaffarnagar", state:"UP", pincode:251001 },
    details: function() {
        return this.name +" from "+ this.Address.city;
    }
}
document.write(info.details());
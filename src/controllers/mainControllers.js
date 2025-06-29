const getData = (req, res) => {
  res.json({data: [{address: 'account1', pin: 0758}, {address: 'account2', pin: 0759}]});
}

const sendData = (req, res) => {
  const {address, pin} = req.body;
  
  console.log(`Address: ${address}, Pin: ${pin}`);
  
  res.json({message: 'Data received.'});
}

module.exports = {getData, sendData};
const mongoose = require("mongoose")


const connectdb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected')
    }
    catch(error){
        console.log(error);
        process.exit(1)
    }
}



//   // Fetch 
//   async function fetchAndPrintData() {
//     try {
//       const records = await InitTable.find({});
//       console.log('init_table records:', records);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//     }
//   }
  
//   // function calling
//   fetchAndPrintData();
  
  
//   // Close MongoDB connection on application termination
//   process.on('SIGINT', async () => {
//     try {
//       await mongoose.connection.close();
//       console.log('MongoDB disconnected on app termination');
//       process.exit(0);
//     } catch (err) {
//       console.error('Error closing MongoDB connection:', err);
//       process.exit(1);
//     }
//   });
  
  module.exports = connectdb;
// Replace export with module.exports
const test = (req, res) => {
     res.json({
       message: 'api is working..'
     });
   };
   
   module.exports = {
     test
   };
   
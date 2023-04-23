import User from "../model/user.js"

// export const getUser = async(req,res)=>{
//     try{
//         const {search,location,verified} = req.query
      
//         const query = {
//           name: { $regex: search, $options: 'i' },
//           location: { $regex: location, $options: 'i' },
//           verified: verified,
//         };
//         if(!verified){
//             res.json("USer is not verified")
//         }
//         const users = await User.find(query).sort({name:1})
        
//         res.status(200).json(users)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// export const getUser = async (req, res) => {
//   try {
//     const { search, location, verified } = req.query;
//     const locations = location ? location.split(",") : [];

//     const query = {
//       name: { $regex: search, $options: "i" },
//       location: { $in: locations },
//       verified: verified,
//     };

//     if (!verified) {
//       res.json("User is not verified");
//     }

//     const users = await User.find(query).sort({ name: 1 });

//     res.status(200).json(users);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getUser = async (req, res) => {
    try {
      const { search, locations, verified } = req.query;
        
      const locationArray = locations ? locations.split(",") : [];
      const verifiedBool = verified ? JSON.parse(verified.toLowerCase()) : true;
  
      const query = {
        name: { $regex: search, $options: "i" },
        location: { $in: locationArray },
        verified: verifiedBool,
      };
      
      if(verified==="false"){
        return res.json("User is not verified")
      }

      let users;

      if (search || locations || verified) {
        users = await User.find(query).sort({ name: 1 });
      } else {
        users = await User.find().sort({ name: 1 });
      }
      return res.status(200).json(users);
        // const users = await User.find(query).sort({ name: 1 });
        // return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

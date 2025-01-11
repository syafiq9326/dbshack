// const { CompanyAccount } = require("../seed/seed");
const CompanyAccount  = require("../models/companyaccount");


// Get CompanyAccount by ID
// const getCompanyAccountById = async (req, res) => {
//   try {
//     const companyId = req.params.id; // Extract ID from URL parameters
//     const companyAccount = await CompanyAccount.findById(companyId);

//     if (!companyAccount) {
//       return res.status(404).json({ message: "CompanyAccount not found" });
//     }

//     res.status(200).json(companyAccount);
//   } catch (error) {
//     console.error("Error fetching company account:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


const getCompanyAccountById = async (req, res) => {
  try {
    const companyId = req.params.id;

    // // Validate ID format
    // if (!mongoose.Types.ObjectId.isValid(companyId)) {
    //   return res.status(400).json({ message: "Invalid ID format" });
    // }

    // Query the database
    const companyAccount = await CompanyAccount.findById(companyId);

    if (!companyAccount) {
      return res.status(404).json({ message: "CompanyAccount not found" });
    }

    res.status(200).json(companyAccount);
  } catch (error) {
    console.error("Error fetching company account:", error.stack);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getCompanyAccountById,
};




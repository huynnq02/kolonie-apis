import bcrypt from "bcrypt";
import Customer from "../models/customer.js";

export const CustomerController = {
  createCustomer: async (req, res) => {
    try {
      const { name, phoneNumber, dateOfBirth } = req.body;

      // Generate the default password
      const password = phoneNumber + dateOfBirth.replace(/\//g, "");

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const customer = new Customer({
        name,
        phoneNumber,
        dateOfBirth,
        password: hashedPassword,
      });

      await customer.save();

      return res
        .status(200)
        .json({ success: true, message: "Customer created" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  // Other controller methods for customer operations can be added here
};

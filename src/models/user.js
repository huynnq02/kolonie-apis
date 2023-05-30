import mongoose from "mongoose";

// Define the base User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Define the Customer schema extending the User schema
const customerSchema = new mongoose.Schema({
  user: userSchema,
  paymentHistory: [
    {
      ref: "bills",
    },
  ],
  children: [
    {
      name: String,
      dateOfBirth: String,
    },
  ],
  billTotal: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  imagePath: {
    type: String,
    default: null,
  },
});

// Define the Owner schema extending the User schema
const ownerSchema = new mongoose.Schema({
  user: userSchema,
});

// Define the Employee schema extending the User schema
const employeeSchema = new mongoose.Schema({
  user: userSchema,
});

// Create the models using the schemas
const Customer = mongoose.model("customers", customerSchema);
const Owner = mongoose.model("owner", ownerSchema);
const Employee = mongoose.model("employees", employeeSchema);

export { Customer, Owner, Employee };

const User = require("../Model/User"); // Adjust the path as needed
const bcrypt = require("bcryptjs"); // For password hashing

// Controller object
const userController = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      const { name, role, email, address, telephone, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Generate userId (you might want to implement your own logic)
    
    const lastUser = await User.findOne().sort({ userid: -1 });
    const userid = lastUser ? lastUser.userid + 1 : 1;

      // Create new user
      const newUser = new User({
        userid,
        name,
        role,
        email,
        address,
        telephone,
        password: hashedPassword
      });

      const savedUser = await newUser.save();
      
      // Remove password from response
      const userResponse = savedUser.toObject();
      delete userResponse.password;

      res.status(201).json(userResponse);
    } catch (error) {
      res.status(500).json({ 
        message: "Error creating user",
        error: error.message 
      });
    }
  },

  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({}).select("-password");
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ 
        message: "Error fetching users",
        error: error.message 
      });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findOne({ userid: req.params.id }).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ 
        message: "Error fetching user",
        error: error.message 
      });
    }
  },

  // Update user
  updateUser: async (req, res) => {
    try {
      const { name, role, email, address, telephone, password } = req.body;
      const updateData = { name, role, email, address, telephone };

      // If password is being updated, hash it
      if (password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(password, salt);
      }

      const updatedUser = await User.findOneAndUpdate(
        { userid: req.params.id },
        updateData,
        { new: true, runValidators: true }
      ).select("-password");

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ 
        message: "Error updating user",
        error: error.message 
      });
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findOneAndDelete({ userid: req.params.id });
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ 
        message: "Error deleting user",
        error: error.message 
      });
    }
  },

  // Login user
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Create response without password
      const userResponse = user.toObject();
      delete userResponse.password;

      res.status(200).json(userResponse);
    } catch (error) {
      res.status(500).json({ 
        message: "Error logging in",
        error: error.message 
      });
    }
  },

  // Get users by role
  getUsersByRole: async (req, res) => {
    try {
      const { role } = req.params;
      const users = await User.find({ role }).select("-password");
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ 
        message: "Error fetching users by role",
        error: error.message 
      });
    }
  }
};

module.exports = userController;
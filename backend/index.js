// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");


// app.use(express.json());
// app.use(cors());



// // API CREATION
// app.get("/",(req,res)=>{
//     res.json("Api Is Running.");
// })



// // ADDING DATABASE
// mongoose.connect("mongodb+srv://dhruvsharmacode29:dhruv1222620@cluster0.x868g9w.mongodb.net/MERN4")
// .then(()=>console.log("Database Is Connected."))
// .catch((error)=>{
//     console.log("Error",error)
// });



// // IMAGE STORAGE ENGINE
// const storage = multer.diskStorage({
//     destination: path.join(__dirname,"upload/images"),
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// const upload = multer({storage});



// // ENDPOINT FOR IMAGE UPLOAD
// app.use("/images",express.static(path.join(__dirname,"upload/images")));
// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:true,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     });
// });



// // PRODUCT SCHEMA
// const Product = mongoose.model('Product',{
//     id:{
//         type:Number,
//         required:true,
//     },
//     name:{
//         type:String,
//         required:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//         type:String,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     available:{
//         type:Boolean,
//         default:true,
//     },
// });



// // ENDPOINT FOR ADDING PRODUCT TO DATABASE
// app.post("/addproduct",async(req,res)=>{
//     const products = await Product.find({});
//     let id;
//     if(products.length>0){
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id + 1;
//     }
//     else{
//         id = 1;
//     }

// const product = new Product({
//     id:id,
//     name:req.body.name,
//     image:req.body.image,
//     category:req.body.category,
//     old_price:req.body.old_price,
//     new_price:req.body.new_price,
// });

// await product.save();
// console.log(product);
// console.log("Product Added To Database.")
// res.send({
//     success:true,
//     name:req.body.name,
// });
// });



// // ENDPOINT FOR REMOVING PRODUCT
// app.post("/removeproduct",async(req,res)=>{
// const product = await Product.findOneAndDelete({id:req.body.id});
// console.log("Product Removed From Database.");
// res.json({
//     success:true,
//     message:"Product Removed."
// });
// });



// // ENDPOINT TO SHOW ALL ADDED PRODUCTS
// app.get("/productlist",async(req,res)=>{
//     let products = await Product.find({});
//     console.log("All Products Fetched.");
//     res.send(products);
// });



// // ENDPOINT TO SHOW WOMENS PRODUCTS
// app.get("/womenproducts",async(req,res)=>{
// let women_products = await Product.find({category:"womens"}).limit(4);
// console.log("Womens Products fetched.");
// res.send(women_products);
// });



// // ENDPOINT FOR NEW ARRIVALS PRODUCTS
// app.get("/newarrivals",async(req,res)=>{
//     let product = await Product.find({}).sort({ createdAt: -1 }).limit(8);
//     console.log("New Arrivals Fetched");
//     res.send(product);
// });



// // USER SCHEMA
// const Users = mongoose.model("Users",{
//     username:{
//         type:String,
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     cartData:{
//         type:Object,
//     },
// });






// // ENDPOINT FOR USER REGISTRATION / SIGNUP
// app.post("/signup",async(req,res)=>{
//     let check = await Users.findOne({email:req.body.email});
//     if(check){
//         return res.status(401).json({success:false,error:"User Already Exists With Same Email"});
//     }

//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//         cart[i] = 0;
//     }


//     const user = new Users({
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//         cartData:cart,
//     });

//     await user.save();
    
//     const data = {
//         user:{
//             id:user.id,
//         }
//     }

//     let token = jwt.sign(data,'secret_ecom');
//     res.json({success:true,token});
// });



// // ENDPOINT FOR USER LOGIN / SIGNIN
// app.post("/login",async(req,res)=>{
//     let user = await Users.findOne({email:req.body.email});
//     if(user){
//         const comparePass = req.body.password === user.password;
//         if(comparePass){
//             const data = {
//                 user:{
//                     id:user.id,
//                 }
//             }

//             let token = jwt.sign(data,'secret_ecom');
//             res.json({success:true,token});
//         }
//         else{
//             res.status(401).json({success:false,error:"Wrong Password."});
//         }
//     }
//     else{
//         res.status(401).json({success:false,error:"Wrong Email."});
//     }
// });











// // MIDDLEWARE
// const fetchUser = (req,res,next)=>{
// let token = req.header('auth-token');
// if(!token){
//     res.json({success:false,error:"Please Authenticate Using Valid Token."});
// }
// else{
//     try {
//         const data = jwt.verify(token,'secret_ecom');
//         req.user = data.user;
//         next();
//     } catch (error) {
//         res.status(401).json({success:false,error:"Please Authenticate Using a Valid Token"});
//     }
// }
// }


// // ENDPONT TO SHWOW LOGIN DETAILS
// app.get("/userdetails",async(req,res)=>{
//     const details = await Users.find({});
//     console.log("User Details Fetched.");
//     res.send(details);
// });








// // ENDPOINT FOR ADD TO CART
// app.post("/addtocart",fetchUser,async(req,res)=>{
// let userData = await Users.findOne({_id:req.user.id});
// userData.cartData[req.body.itemId] += 1;
// await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
// res.json("Added");
// });



// // ENDPOINT FOR REMOVE FROM CART
// app.post("/removefromcart",fetchUser,async(req,res)=>{
// let userData = await Users.findOne({_id:req.user.id});
// userData.cartData[req.body.itemId] -= 1;
// await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
// res.json("Removed");
// });



// // ENDPOINT TO GET CART DATA
// app.post("/getcart",fetchUser,async(req,res)=>{
//     console.log("Get Cart");
//     let userData = await Users.findOne({_id:req.user.id});
//     res.json(userData.cartData);
// })



// // ENDPOINT TO START OUR PORT
// app.listen(port,(error)=>{
//     if(error){
//         console.log("Error Occured",+error);
//     }
//     else{
//         console.log("Server Is Running On Port",+port);
//     }
// })


// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");

// app.use(express.json());
// app.use(cors());

// // API CREATION
// app.get("/",(req,res)=>{
//     res.json("Api Is Running.");
// })

// // ADDING DATABASE
// mongoose.connect("mongodb+srv://dhruvsharmacode29:dhruv1222620@cluster0.x868g9w.mongodb.net/MERN4")
// .then(()=>console.log("Database Is Connected."))
// .catch((error)=>{
//     console.log("Error",error)
// });

// // IMAGE STORAGE ENGINE
// const storage = multer.diskStorage({
//     destination: path.join(__dirname,"upload/images"),
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// const upload = multer({storage});

// // ENDPOINT FOR IMAGE UPLOAD
// app.use("/images",express.static(path.join(__dirname,"upload/images")));
// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:true,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     });
// });

// // PRODUCT SCHEMA
// const Product = mongoose.model('Product',{
//     id:{
//         type:Number,
//         required:true,
//     },
//     name:{
//         type:String,
//         required:true,
//     },
//     image:{
//         type:String,
//         required:true,
//     },
//     category:{
//         type:String,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     available:{
//         type:Boolean,
//         default:true,
//     },
// });

// // ENDPOINT FOR ADDING PRODUCT TO DATABASE
// app.post("/addproduct",async(req,res)=>{
//     const products = await Product.find({});
//     let id;
//     if(products.length>0){
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id + 1;
//     }
//     else{
//         id = 1;
//     }

// const product = new Product({
//     id:id,
//     name:req.body.name,
//     image:req.body.image,
//     category:req.body.category,
//     old_price:req.body.old_price,
//     new_price:req.body.new_price,
// });

// await product.save();
// console.log(product);
// console.log("Product Added To Database.")
// res.send({
//     success:true,
//     name:req.body.name,
// });
// });

// // ENDPOINT FOR REMOVING PRODUCT
// app.post("/removeproduct",async(req,res)=>{
// const product = await Product.findOneAndDelete({id:req.body.id});
// console.log("Product Removed From Database.");
// res.json({
//     success:true,
//     message:"Product Removed."
// });
// });

// // ENDPOINT TO SHOW ALL ADDED PRODUCTS
// app.get("/productlist",async(req,res)=>{
//     let products = await Product.find({});
//     console.log("All Products Fetched.");
//     res.send(products);
// });

// // ENDPOINT TO SHOW WOMENS PRODUCTS
// app.get("/womenproducts",async(req,res)=>{
// let women_products = await Product.find({category:"womens"}).limit(4);
// console.log("Womens Products fetched.");
// res.send(women_products);
// });

// // ENDPOINT FOR NEW ARRIVALS PRODUCTS
// app.get("/newarrivals",async(req,res)=>{
//     let product = await Product.find({}).sort({ createdAt: -1 }).limit(8);
//     console.log("New Arrivals Fetched");
//     res.send(product);
// });

// // USER SCHEMA
// const Users = mongoose.model("Users",{
//     username:{
//         type:String,
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     },
//     cartData:{
//         type:Object,
//     },
// });

// // ORDER SCHEMA
// const Order = mongoose.model("Order",{
//     userId:{
//         type:String,
//         required:true,
//     },
//     userEmail:{
//         type:String,
//         required:true,
//     },
//     username:{
//         type:String,
//         required:true,
//     },
//     products:[{
//         productId:Number,
//         name:String,
//         image:String,
//         category:String,
//         price:Number,
//         quantity:Number,
//     }],
//     totalAmount:{
//         type:Number,
//         required:true,
//     },
//     status:{
//         type:String,
//         enum:['Pending','Processing','Shipped','Delivered','Cancelled'],
//         default:'Pending',
//     },
//     orderDate:{
//         type:Date,
//         default:Date.now,
//     },
// });

// // ADMIN SCHEMA
// const Admin = mongoose.model("Admin",{
//     username:{
//         type:String,
//         required:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
// });

// // ENDPOINT FOR USER REGISTRATION / SIGNUP
// app.post("/signup",async(req,res)=>{
//     let check = await Users.findOne({email:req.body.email});
//     if(check){
//         return res.status(401).json({success:false,error:"User Already Exists With Same Email"});
//     }

//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//         cart[i] = 0;
//     }

//     const user = new Users({
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//         cartData:cart,
//     });

//     await user.save();
    
//     const data = {
//         user:{
//             id:user.id,
//         }
//     }

//     let token = jwt.sign(data,'secret_ecom');
//     res.json({success:true,token});
// });

// // ENDPOINT FOR USER LOGIN / SIGNIN
// app.post("/login",async(req,res)=>{
//     let user = await Users.findOne({email:req.body.email});
//     if(user){
//         const comparePass = req.body.password === user.password;
//         if(comparePass){
//             const data = {
//                 user:{
//                     id:user.id,
//                 }
//             }

//             let token = jwt.sign(data,'secret_ecom');
//             res.json({success:true,token});
//         }
//         else{
//             res.status(401).json({success:false,error:"Wrong Password."});
//         }
//     }
//     else{
//         res.status(401).json({success:false,error:"Wrong Email."});
//     }
// });

// // ENDPOINT FOR ADMIN LOGIN
// app.post("/admin/login",async(req,res)=>{
//     // Default admin credentials - admin/admin123
//     if(req.body.username === "admin" && req.body.password === "admin123"){
//         const token = jwt.sign({admin:true},'secret_admin');
//         res.json({success:true,token});
//     }
//     else{
//         res.status(401).json({success:false,error:"Invalid Credentials"});
//     }
// });

// // MIDDLEWARE
// const fetchUser = (req,res,next)=>{
// let token = req.header('auth-token');
// if(!token){
//     res.json({success:false,error:"Please Authenticate Using Valid Token."});
// }
// else{
//     try {
//         const data = jwt.verify(token,'secret_ecom');
//         req.user = data.user;
//         next();
//     } catch (error) {
//         res.status(401).json({success:false,error:"Please Authenticate Using a Valid Token"});
//     }
// }
// }

// // ADMIN MIDDLEWARE
// const fetchAdmin = (req,res,next)=>{
//     let token = req.header('admin-token');
//     if(!token){
//         return res.status(401).json({success:false,error:"Please Authenticate As Admin"});
//     }
//     else{
//         try {
//             const data = jwt.verify(token,'secret_admin');
//             if(!data.admin){
//                 return res.status(401).json({success:false,error:"Not Authorized"});
//             }
//             next();
//         } catch (error) {
//             res.status(401).json({success:false,error:"Invalid Admin Token"});
//         }
//     }
// }

// // ENDPONT TO SHWOW LOGIN DETAILS
// app.get("/userdetails",async(req,res)=>{
//     const details = await Users.find({});
//     console.log("User Details Fetched.");
//     res.send(details);
// });

// // ENDPOINT FOR ADD TO CART
// app.post("/addtocart",fetchUser,async(req,res)=>{
// let userData = await Users.findOne({_id:req.user.id});
// userData.cartData[req.body.itemId] += 1;
// await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
// res.json("Added");
// });

// // ENDPOINT FOR REMOVE FROM CART
// app.post("/removefromcart",fetchUser,async(req,res)=>{
// let userData = await Users.findOne({_id:req.user.id});
// userData.cartData[req.body.itemId] -= 1;
// await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
// res.json("Removed");
// });

// // ENDPOINT TO GET CART DATA
// app.post("/getcart",fetchUser,async(req,res)=>{
//     console.log("Get Cart");
//     let userData = await Users.findOne({_id:req.user.id});
//     res.json(userData.cartData);
// })

// // ENDPOINT TO CREATE ORDER
// app.post("/createorder",fetchUser,async(req,res)=>{
//     try {
//         let userData = await Users.findOne({_id:req.user.id});
        
//         const order = new Order({
//             userId:userData._id,
//             userEmail:userData.email,
//             username:userData.username,
//             products:req.body.products,
//             totalAmount:req.body.totalAmount,
//             status:'Pending',
//         });

//         await order.save();
        
//         // Clear cart after order
//         let cart = {};
//         for (let i = 0; i < 300; i++) {
//             cart[i] = 0;
//         }
//         await Users.findOneAndUpdate({_id:req.user.id},{cartData:cart});
        
//         console.log("Order Created");
//         res.json({success:true,orderId:order._id,message:"Order Placed Successfully"});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({success:false,error:"Failed to create order"});
//     }
// });

// // ENDPOINT TO GET ALL ORDERS (ADMIN)
// app.get("/admin/orders",fetchAdmin,async(req,res)=>{
//     try {
//         let orders = await Order.find({}).sort({orderDate:-1});
//         console.log("All Orders Fetched");
//         res.json(orders);
//     } catch (error) {
//         res.status(500).json({success:false,error:"Failed to fetch orders"});
//     }
// });

// // ENDPOINT TO UPDATE ORDER STATUS (ADMIN)
// app.post("/admin/updateorder",fetchAdmin,async(req,res)=>{
//     try {
//         await Order.findOneAndUpdate(
//             {_id:req.body.orderId},
//             {status:req.body.status}
//         );
//         console.log("Order Status Updated");
//         res.json({success:true,message:"Order Status Updated"});
//     } catch (error) {
//         res.status(500).json({success:false,error:"Failed to update order"});
//     }
// });

// // ENDPOINT TO GET USER ORDERS
// app.get("/myorders",fetchUser,async(req,res)=>{
//     try {
//         let orders = await Order.find({userId:req.user.id}).sort({orderDate:-1});
//         res.json(orders);
//     } catch (error) {
//         res.status(500).json({success:false,error:"Failed to fetch orders"});
//     }
// });



// // Blog Schema
// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   slug: { type: String, required: true, unique: true },
//   content: { type: String, required: true },
//   excerpt: { type: String },
//   image: { type: String },
//   author: { type: String, required: true },
//   category: { type: String, default: 'General' },
//   tags: [String],
//   published: { type: Boolean, default: false },
//   views: { type: Number, default: 0 },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });

// const Blog = mongoose.model('Blog', blogSchema);



// // Auth Middleware
// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');
  
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }
  
//   try {
//     const decoded = jwt.verify(token, 'your-secret-key-change-this');
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// // ===== AUTH ROUTES =====

// // Register
// app.post('/api/auth/register', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
    
//     const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }
    
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, email, password: hashedPassword });
//     await user.save();
    
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Login
// app.post('/api/auth/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     const user = await Users.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
    
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
    
//     const token = jwt.sign(
//       { userId: user._id, username: user.username },
//       'your-secret-key-change-this',
//       { expiresIn: '7d' }
//     );
    
//     res.json({ token, username: user.username });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // ===== BLOG ROUTES =====

// // Get all published blogs (Public)
// app.get('/api/blogs', async (req, res) => {
//   try {
//     const { category, tag, search } = req.query;
//     let query = { published: true };
    
//     if (category) query.category = category;
//     if (tag) query.tags = tag;
//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: 'i' } },
//         { content: { $regex: search, $options: 'i' } }
//       ];
//     }
    
//     const blogs = await Blog.find(query).sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get single blog by slug (Public)
// app.get('/api/blogs/:slug', async (req, res) => {
//   try {
//     const blog = await Blog.findOne({ slug: req.params.slug, published: true });
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
    
//     blog.views += 1;
//     await blog.save();
    
//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all blogs for admin (Protected)
// app.get('/api/admin/blogs', authMiddleware, async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Create blog (Protected)
// app.post('/api/admin/blogs', authMiddleware, upload.single('image'), async (req, res) => {
//   try {
//     const { title, content, excerpt, category, tags, published } = req.body;
    
//     const slug = title.toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/^-|-$/g, '');
    
//     const blog = new Blog({
//       title,
//       slug,
//       content,
//       excerpt,
//       category,
//       tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
//       published: published === 'true',
//       author: req.user.username,
//       image: req.file ? `/uploads/${req.file.filename}` : null
//     });
    
//     await blog.save();
//     res.status(201).json(blog);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update blog (Protected)
// app.put('/api/admin/blogs/:id', authMiddleware, upload.single('image'), async (req, res) => {
//   try {
//     const { title, content, excerpt, category, tags, published } = req.body;
    
//     const updateData = {
//       title,
//       content,
//       excerpt,
//       category,
//       tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
//       published: published === 'true',
//       updatedAt: Date.now()
//     };
    
//     if (title) {
//       updateData.slug = title.toLowerCase()
//         .replace(/[^a-z0-9]+/g, '-')
//         .replace(/^-|-$/g, '');
//     }
    
//     if (req.file) {
//       updateData.image = `/uploads/${req.file.filename}`;
//     }
    
//     const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete blog (Protected)
// app.delete('/api/admin/blogs/:id', authMiddleware, async (req, res) => {
//   try {
//     await Blog.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Blog deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get categories
// app.get('/api/categories', async (req, res) => {
//   try {
//     const categories = await Blog.distinct('category', { published: true });
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all tags
// app.get('/api/tags', async (req, res) => {
//   try {
//     const tags = await Blog.distinct('tags', { published: true });
//     res.json(tags);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // ENDPOINT TO START OUR PORT
// app.listen(port,(error)=>{
//     if(error){
//         console.log("Error Occured",+error);
//     }
//     else{
//         console.log("Server Is Running On Port",+port);
//     }
// })









const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

// API CREATION
app.get("/",(req,res)=>{
    res.json("Api Is Running.");
})

// ADDING DATABASE
mongoose.connect("mongodb+srv://dhruvsharmacode29:dhruv1222620@cluster0.x868g9w.mongodb.net/MERN4")
.then(()=>console.log("Database Is Connected."))
.catch((error)=>{
    console.log("Error",error)
});

// IMAGE STORAGE ENGINE
const storage = multer.diskStorage({
    destination: path.join(__dirname,"upload/images"),
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage});

// ENDPOINT FOR IMAGE UPLOAD
app.use("/images",express.static(path.join(__dirname,"upload/images")));
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:true,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    });
});

// PRODUCT SCHEMA
const Product = mongoose.model('Product',{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
});

// USER SCHEMA
const Users = mongoose.model("Users",{
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    cartData:{
        type:Object,
    },
});

// ORDER SCHEMA
const Order = mongoose.model("Order",{
    userId:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    products:[{
        productId:Number,
        name:String,
        image:String,
        category:String,
        price:Number,
        quantity:Number,
    }],
    totalAmount:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['Pending','Processing','Shipped','Delivered','Cancelled'],
        default:'Pending',
    },
    orderDate:{
        type:Date,
        default:Date.now,
    },
});

// BLOG SCHEMA
const Blog = mongoose.model('Blog', {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String },
    image: { type: String },
    author: { type: String, required: true },
    category: { type: String, default: 'General' },
    tags: [String],
    published: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// ===== MIDDLEWARE =====

// User Middleware
const fetchUser = (req,res,next)=>{
    let token = req.header('auth-token');
    if(!token){
        res.json({success:false,error:"Please Authenticate Using Valid Token."});
    }
    else{
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).json({success:false,error:"Please Authenticate Using a Valid Token"});
        }
    }
}

// Admin Middleware
const fetchAdmin = (req,res,next)=>{
    let token = req.header('admin-token');
    if(!token){
        return res.status(401).json({success:false,error:"Please Authenticate As Admin"});
    }
    else{
        try {
            const data = jwt.verify(token,'secret_admin');
            if(!data.admin){
                return res.status(401).json({success:false,error:"Not Authorized"});
            }
            next();
        } catch (error) {
            res.status(401).json({success:false,error:"Invalid Admin Token"});
        }
    }
}

// Blog Auth Middleware - FIXED VERSION
const authMiddleware = (req, res, next) => {
    // Try to get token from both Authorization header and admin-token header
    const token = req.header('Authorization')?.replace('Bearer ', '') || req.header('admin-token');
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    
    try {
        // First try to verify as admin token
        const decoded = jwt.verify(token, 'secret_admin');
        
        if (decoded.admin) {
            req.user = { username: 'admin', admin: true };
            return next();
        }
    } catch (adminError) {
        // If admin token verification fails, try user token
        try {
            const decoded = jwt.verify(token, 'secret_ecom');
            req.user = { username: decoded.user.username || 'User' };
            return next();
        } catch (userError) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
};

// ===== PRODUCT ENDPOINTS =====

app.post("/addproduct",async(req,res)=>{
    const products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        old_price:req.body.old_price,
        new_price:req.body.new_price,
    });

    await product.save();
    console.log(product);
    console.log("Product Added To Database.")
    res.send({
        success:true,
        name:req.body.name,
    });
});

app.post("/removeproduct",async(req,res)=>{
    const product = await Product.findOneAndDelete({id:req.body.id});
    console.log("Product Removed From Database.");
    res.json({
        success:true,
        message:"Product Removed."
    });
});

app.get("/productlist",async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched.");
    res.send(products);
});

app.get("/womenproducts",async(req,res)=>{
    let women_products = await Product.find({category:"womens"}).limit(4);
    console.log("Womens Products fetched.");
    res.send(women_products);
});

app.get("/newarrivals",async(req,res)=>{
    let product = await Product.find({}).sort({ createdAt: -1 }).limit(8);
    console.log("New Arrivals Fetched");
    res.send(product);
});

// ===== USER ENDPOINTS =====

app.post("/signup",async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(401).json({success:false,error:"User Already Exists With Same Email"});
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    });

    await user.save();
    
    const data = {
        user:{
            id:user.id,
        }
    }

    let token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token});
});

app.post("/login",async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const comparePass = req.body.password === user.password;
        if(comparePass){
            const data = {
                user:{
                    id:user.id,
                }
            }

            let token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.status(401).json({success:false,error:"Wrong Password."});
        }
    }
    else{
        res.status(401).json({success:false,error:"Wrong Email."});
    }
});

app.post("/admin/login",async(req,res)=>{
    if(req.body.username === "admin" && req.body.password === "admin123"){
        const token = jwt.sign({admin:true},'secret_admin');
        res.json({success:true,token});
    }
    else{
        res.status(401).json({success:false,error:"Invalid Credentials"});
    }
});

app.get("/userdetails",async(req,res)=>{
    const details = await Users.find({});
    console.log("User Details Fetched.");
    res.send(details);
});

// ===== CART ENDPOINTS =====

app.post("/addtocart",fetchUser,async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.json("Added");
});

app.post("/removefromcart",fetchUser,async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.json("Removed");
});

app.post("/getcart",fetchUser,async(req,res)=>{
    console.log("Get Cart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

// ===== ORDER ENDPOINTS =====

app.post("/createorder",fetchUser,async(req,res)=>{
    try {
        let userData = await Users.findOne({_id:req.user.id});
        
        const order = new Order({
            userId:userData._id,
            userEmail:userData.email,
            username:userData.username,
            products:req.body.products,
            totalAmount:req.body.totalAmount,
            status:'Pending',
        });

        await order.save();
        
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }
        await Users.findOneAndUpdate({_id:req.user.id},{cartData:cart});
        
        console.log("Order Created");
        res.json({success:true,orderId:order._id,message:"Order Placed Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,error:"Failed to create order"});
    }
});

app.get("/admin/orders",fetchAdmin,async(req,res)=>{
    try {
        let orders = await Order.find({}).sort({orderDate:-1});
        console.log("All Orders Fetched");
        res.json(orders);
    } catch (error) {
        res.status(500).json({success:false,error:"Failed to fetch orders"});
    }
});

app.post("/admin/updateorder",fetchAdmin,async(req,res)=>{
    try {
        await Order.findOneAndUpdate(
            {_id:req.body.orderId},
            {status:req.body.status}
        );
        console.log("Order Status Updated");
        res.json({success:true,message:"Order Status Updated"});
    } catch (error) {
        res.status(500).json({success:false,error:"Failed to update order"});
    }
});

app.get("/myorders",fetchUser,async(req,res)=>{
    try {
        let orders = await Order.find({userId:req.user.id}).sort({orderDate:-1});
        res.json(orders);
    } catch (error) {
        res.status(500).json({success:false,error:"Failed to fetch orders"});
    }
});

// ===== BLOG ENDPOINTS =====

// Get all published blogs (Public)
app.get('/api/blogs', async (req, res) => {
    try {
        const { category, tag, search } = req.query;
        let query = { published: true };
        
        if (category) query.category = category;
        if (tag) query.tags = tag;
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } }
            ];
        }
        
        const blogs = await Blog.find(query).sort({ createdAt: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single blog by slug (Public)
app.get('/api/blogs/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug, published: true });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        
        blog.views += 1;
        await blog.save();
        
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all blogs for admin (Protected)
app.get('/api/admin/blogs', authMiddleware, async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        console.log("Admin Blogs Fetched:", blogs.length);
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create blog (Protected)
// app.post('/api/admin/blogs', authMiddleware, upload.single('image'), async (req, res) => {
//     try {
//         const { title, content, excerpt, category, tags, published } = req.body;
        
//         const slug = title.toLowerCase()
//             .replace(/[^a-z0-9]+/g, '-')
//             .replace(/^-|-$/g, '');
        
//         const blog = new Blog({
//             title,
//             slug,
//             content,
//             excerpt,
//             category,
//             tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
//             published: published === 'true',
//             author: req.user.username || 'admin',
//             image: req.file ? `/images/${req.file.filename}` : null
//         });
        
//         await blog.save();
//         console.log("Blog Created:", blog.title);
//         res.status(201).json(blog);
//     } catch (error) {
//         console.error("Error creating blog:", error);
//         res.status(500).json({ message: error.message });
//     }
// });

// Ab Blog Create endpoint me ye changes karo:
app.post('/api/admin/blogs', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const { title, content, excerpt, category, tags, published } = req.body;
        
        const slug = title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
        
        const blog = new Blog({
            title,
            slug,
            content,
            excerpt,
            category,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
            published: published === 'true',
            author: req.user.username || 'admin',
            // FIX: Remove leading slash for consistency
            image: req.file ? `images/${req.file.filename}` : null
        });
        
        await blog.save();
        console.log("Blog Created:", blog.title);
        console.log("Image Path:", blog.image); // Debug log
        res.status(201).json(blog);
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: error.message });
    }
});

// Update blog (Protected)
// app.put('/api/admin/blogs/:id', authMiddleware, upload.single('image'), async (req, res) => {
//     try {
//         const { title, content, excerpt, category, tags, published } = req.body;
        
//         const updateData = {
//             title,
//             content,
//             excerpt,
//             category,
//             tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
//             published: published === 'true',
//             updatedAt: Date.now()
//         };
        
//         if (title) {
//             updateData.slug = title.toLowerCase()
//                 .replace(/[^a-z0-9]+/g, '-')
//                 .replace(/^-|-$/g, '');
//         }
        
//         if (req.file) {
//             updateData.image = `/images/${req.file.filename}`;
//         }
        
//         const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
//         console.log("Blog Updated:", blog.title);
//         res.json(blog);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



// Update endpoint bhi fix karo:
app.put('/api/admin/blogs/:id', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const { title, content, excerpt, category, tags, published } = req.body;
        
        const updateData = {
            title,
            content,
            excerpt,
            category,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
            published: published === 'true',
            updatedAt: Date.now()
        };
        
        if (title) {
            updateData.slug = title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
        }
        
        if (req.file) {
            // FIX: Remove leading slash
            updateData.image = `images/${req.file.filename}`;
        }
        
        const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
        console.log("Blog Updated:", blog.title);
        console.log("Image Path:", blog.image); // Debug log
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete blog (Protected)
app.delete('/api/admin/blogs/:id', authMiddleware, async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        console.log("Blog Deleted");
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get categories
app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Blog.distinct('category', { published: true });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all tags
app.get('/api/tags', async (req, res) => {
    try {
        const tags = await Blog.distinct('tags', { published: true });
        res.json(tags);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ENDPOINT TO START OUR PORT
app.listen(port,(error)=>{
    if(error){
        console.log("Error Occured",+error);
    }
    else{
        console.log("Server Is Running On Port",+port);
    }
})
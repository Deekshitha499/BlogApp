//userApi.js
import exp from "express";
import { register } from "../services/authService.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";


export const userRoute = exp.Router();

// Register user
userRoute.post("/users", upload.single("profileImageUrl"), async (req, res, next) => {
  let cloudinaryResult;

  try {
    const userObj = req.body;

    if (req.file) {
      cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    }

    const newUserObj = await register({
      ...userObj,
      role: "USER",
      profileImageUrl: cloudinaryResult?.secure_url || "",
    });

    res.status(201).json({
      message: "user created",
      payload: newUserObj,
    });
  } catch (err) {
    if (cloudinaryResult?.public_id) {
      await cloudinary.uploader.destroy(cloudinaryResult.public_id);
    }
    next(err);
  }
});

// Read all active articles
userRoute.get("/articles", verifyToken("USER"), async (req, res, next) => {
  try {
    const articles = await ArticleModel.find({ isArticleActive: true }).populate(
      "author",
      "firstName email profileImageUrl"
    );

    res.status(200).json({ message: "all articles", payload: articles });
  } catch (err) {
    next(err);
  }
});

// Read single article by id
userRoute.get("/articles/:id", verifyToken("USER", "AUTHOR"), async (req, res, next) => {
  try {
    const article = await ArticleModel.findOne({
      _id: req.params.id,
      isArticleActive: true,
    }).populate("author", "firstName email profileImageUrl");

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "article", payload: article });
  } catch (err) {
    next(err);
  }
});

// Add comment
userRoute.put("/articles", verifyToken("USER"), async (req, res, next) => {
  try {
    const { articleId, comment } = req.body;

    const articleWithComment = await ArticleModel.findOneAndUpdate(
      { _id: articleId, isArticleActive: true },
      {
        $push: {
          comments: {
            user: req.user.userId,
            comment,
          },
        },
      },
      { new: true, runValidators: true }
    );

    if (!articleWithComment) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({
      message: "comment added successfully",
      payload: articleWithComment,
    });
  } catch (err) {
    next(err);
  }
});
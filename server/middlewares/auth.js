import { clerkClient, requireAuth } from "@clerk/express";

// Middleware to check userId and hasPremiumPlan
export const auth = async (req, res, next) => {
  try {
    // `requireAuth` ensures user is authenticated
    const { userId } = req.auth;  

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Fetch user details from Clerk
    const user = await clerkClient.users.getUser(userId);

    // Check premium plan from private metadata
    const hasPremiumPlan = user.privateMetadata?.plan === "premium";

    if (!hasPremiumPlan && user.privateMetadata?.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      // Reset free usage if premium OR no usage left
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          ...user.privateMetadata,
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }

    req.plan = hasPremiumPlan ? "premium" : "free";

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

"use server";

import { storePost } from "@/lib/posts";

export async function createPost(formData) {
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    let errors = [];
    if (!title || title.trim().length === 0) {
        errors.push("Title is required");
    }
    if (!content || content.trim().length === 0) {
        errors.push("Content is required");
    }
    if (!image) {
        errors.push("Image is required");
    }

    if (errors.length > 0) {
        return { errors };
    }

    storePost({
        imageUrl: "",
        title,
        content,
        userId: 1
    });

    return { success: true };
}

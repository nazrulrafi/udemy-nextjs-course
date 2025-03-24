'use server';
import {createUser, getUserByEmail} from "@/lib/user";
import {hashUserPassword, verifyPassword} from "@/lib/hash";
import {redirect} from "next/navigation";
import {createAuthSession, destroySession} from "@/lib/auth";

export async function signup(prevState, formData){
    const email = formData.get('email');
    const password = formData.get('password');

    let errors={};

    if (!email.includes('@')){
        errors.email = 'Email is required';
    }
    if (password.trim().length < 6) {
        errors.password = 'Password is required';
    }
    if (Object.keys(errors).length > 0){
        return {
            errors
        }
    }
    const hashedPass = hashUserPassword(password)
    try {
        const id = createUser(email, hashedPass)
        await createAuthSession(id)
        redirect("/training")
    }catch(error){
        if (error.code === "SQLITE_CONSTRAINT_UNIQUE"){
            return {
                errors:{
                    email:"It seems like an account for the chosen email already exists"
                }
            }
        }
        throw error;
    }
}

export async function login(prevState, formData){
    const email = formData.get('email');
    const password = formData.get('password');
    const existingUser = getUserByEmail(email);
    if(!existingUser){
        return {
            errors:{
                email:"Could  not authenticated with this email"
            }
        }
    }
    const isValidPassword = verifyPassword(existingUser.password, password);
    if (!isValidPassword){
        return {
            errors:{
                password:"Could  not authenticated with this password"
            }
        }
    }
    await createAuthSession(existingUser.id);
    redirect("/training")
}

export async function auth(mode,prevState,formData){
    if (mode === "login"){
        return login(prevState,formData);
    }
    return signup(prevState,formData);
}


export async function logout(){
    await destroySession();
    redirect("/")
}
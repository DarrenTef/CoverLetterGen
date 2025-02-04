// authController.test.js
// Goal is to test basic authController logic

import { signUp, login } from "./authController";
import supabase from "../services/supabaseClient";

jest.mock('../services/supabaseClient');

// describe() is used to group related tests together
describe('signUp function', () => {
    // it() is used to define an individual test case
    it('Signs up a user successfully', async () => {
        // step 1: mocks the desired response from function being tested
        supabase.auth.signUp.mockResolvedValue({
            user: { email: 'test@example.com'},
            error: null,
        });
        // step 2: define the inputs of the actual function in this case it is signUp(req, res)
        const req = {
            body: {email: 'test@example.com', password: 'password123'},
        };

        const res = {
            status:jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await signUp(req, res);
        expect(supabase.auth.signUp).toHaveBeenCalledWith({
            email: 'test@example.com',
            password: 'password123',
        });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'User signed up'});
    });

    it('Signs up user unsuccessfully and fails with an error', async () => {
        supabase.auth.signUp.mockResolvedValue({
            user: null,
            error: { message: "Email already taken" },
        });
        const req = {
            body: {email: 'test@example.com', password: 'password123'},
        };

        const res = {
            status:jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await signUp(req, res);
        expect(supabase.auth.signUp).toHaveBeenCalledWith({
            email: 'test@example.com',
            password: 'password123',
        });
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Email already taken'});
    });
});

describe('login function', () => {
    it('Logs user in successfully', async () => {
        supabase.auth.signInWithPassword.mockResolvedValue({
            user: {email: "test@example.com"},
            error: null
        });

        const req = {
            body: {email: "test@example.com", password: "password123"}
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await login(req, res);
        expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
            email: "test@example.com",
            password: "password123"
        });

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({message: "User logged in", user: {email: "test@example.com"}})
    });

    it('Logs user in unsuccessfully and fails due to error', async () => {
        supabase.auth.signInWithPassword.mockResolvedValue({
            user: null,
            error: { message: 'Invalid credentials'}
        });

        const req = {
            body : {email: 'test@example.com', password: 'password123'}
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await login(req, res);
        expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
            email: "test@example.com",
            password: "password123"
        });

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({message: 'Invalid credentials'});
    })
})
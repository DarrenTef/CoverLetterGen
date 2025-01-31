/**
 * supabaseClient.js
 * Initialization file for the Supabase Client, seperating the configuration logic
 */
// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL; // Using process.env
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

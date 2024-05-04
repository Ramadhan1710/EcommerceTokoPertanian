import { createClient } from "@/utils/supabase/client";

export async function getUser() {
  try {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    return user;
  } catch (error) {
    // console.error("Error fetching user:", error.message);
    return null; // or handle error as needed
  }
}

export async function signOut() {
  try {
    const supabase = createClient();
    await supabase.auth.signOut();
  } catch (error) {
    // console.error("Error signing out:", error.message);
    throw error; // or handle error as needed
  }
}

export async function getProfile(userId: string) {
  try {
    const supabase = createClient();
    const { data: profile, error } = await supabase
      .from('profile')
      .select('name')
      .eq('user_id', userId)
      .single();
    return { profile, error };
  } catch (error) {
    console.error("Error fetching profile:", error);
    return { data: null, error }; // or handle error as needed
  }
}

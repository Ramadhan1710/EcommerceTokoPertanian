'use client'

import Link from 'next/link';
import { Button } from '@mantine/core';
import { use, useEffect, useState } from 'react';
import { getUser, signOut, getProfile } from '@/utils/AuthFunction';
import { User } from '@supabase/supabase-js';

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData?.data.user || null);

      if(userData){
        const { profile, error } = await getProfile(userData.data.user?.id ?? '');
        if (error) {
          console.error("Error fetching profile:", error);
          return;
        }
        setProfile(profile);
        console.log(profile);
      }
    };
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      // Handle error
    }
  };

  return user ? (
    <div className="flex items-center gap-4">
      <p>Hey, {profile ? profile.name : 'Nama tidak ditemukan'}</p>
      <Button variant="default" onClick={handleSignOut}>Log out</Button>
    </div>
  ) : (
    <Link href="/login">
      <Button variant="default" >Log in</Button>
    </Link>
  );
}

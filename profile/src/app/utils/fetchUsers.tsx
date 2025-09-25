export type User = {
  id: number;
  email: string;
  role: string;
  org_name?: string;
  logo_image?: string | null;
  created_at?: string;
  is_active?: boolean;
};

export async function fetchUsers(): Promise<User[]> {
  const token = localStorage.getItem('Token');
  if (!token) throw new Error('No token found in localStorage.');

  try {
    const response = await fetch('/api/users/', {
      headers: { Authorization: `Token ${token}` },
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      // If backend error, show error message
      throw new Error(data.error || 'Failed to fetch users');
    }



    return data; // if data is just an array
  } catch (error) {
    throw new Error(
      (error as Error).message || 'Invalid response format from server.'
    );
  }
}
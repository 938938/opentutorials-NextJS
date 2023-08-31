'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  async function deletePage() {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, {
      method: 'DELETE',
    });
    await resp.json();
    router.push('/');
    router.refresh();
  }
  return (
    <ul>
      <li>
        <Link href='/create'>create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>update</Link>
          </li>
          <li>
            <button onClick={deletePage}>delete</button>
          </li>
        </>
      ) : null}
    </ul>
  );
}

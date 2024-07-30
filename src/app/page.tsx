import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/d3140398-1af8-4440-b08b-e8c60a464095-vzsv4p.jpg",
  "https://utfs.io/f/6535af64-bed0-4e01-ad47-fb12ad431645-3vug5v.jpg",
  "https://utfs.io/f/a7a1361d-b1d2-4a13-846e-1420bf03c317-xxcl87.jpg",
  "https://utfs.io/f/26ef90df-e0f0-4a7a-ba2b-5250b49a247d-2082nl.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            {" "}
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      gallery progress
    </main>
  );
}

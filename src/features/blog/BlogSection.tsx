import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "@/utils/blogLoader";
import type { BlogPost } from "@/utils/blogLoader";

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await getAllBlogPosts();
      setPosts(allPosts);
      setLoading(false);
    }
    loadPosts();
  }, []);

  if (loading) {
    return (
      <main className="bg-primary py-30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white">Cargando blogs...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-primary py-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-5xl font-semibold text-secondary">Perspectivas Culinarias</h2>
          <p className="text-white">
            Descubre historias, consejos y perspectivas culinarias que inspirán sus aventuras gastronómicas diarias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10" data-aos="fade-up">
          {posts.length === 0 ? (
            <div className="col-span-full text-center">
              <p className="text-white">No hay blogs disponibles aún.</p>
            </div>
          ) : (
            posts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="space-y-2 cursor-pointer group block"
              >
                <div className="overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-96 object-cover transition-transform duration-300 ease-out group-hover:scale-105" 
                  />
                </div>
                <div className="flex items-center gap-2">
                  <hr className="border-secondary w-10" />
                  <span className="text-secondary">{post.date}</span>
                </div>
                <h3 className="text-3xl font-semibold text-white group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
